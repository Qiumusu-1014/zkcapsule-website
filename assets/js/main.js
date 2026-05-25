/* ============================================
   Main JS - i18n, Navigation, Common Logic
   Zhongke International Consultants (HK) Ltd.
   ============================================ */

(function () {
  'use strict';

  // --- Language State ---
  const LANG_KEY = 'zk-lang';
  let currentLang = localStorage.getItem(LANG_KEY) || 'zh';

  // --- Determine current page ---
  const path = window.location.pathname;
  let pageName = 'home';
  if (/about/.test(path)) pageName = 'about';
  else if (/product-detail/.test(path)) pageName = 'detail';
  else if (/products/.test(path)) pageName = 'products';
  else if (/gallery/.test(path)) pageName = 'gallery';
  else if (/contact/.test(path)) pageName = 'contact';

  // --- Apply translations ---
  function t(key) {
    const keys = key.split('.');
    let val = I18N[currentLang];
    for (const k of keys) {
      if (val && val[k] !== undefined) val = val[k];
      else return key;
    }
    return val;
  }

  function applyTranslations() {
    // Update elements with [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const text = t(key);
      if (text && text !== key) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else if (el.tagName === 'OPTION') {
          // Skip options — handled separately
        } else {
          el.textContent = text;
        }
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      const text = t(key);
      if (text && text !== key) el.placeholder = text;
    });

    // Update select options
    document.querySelectorAll('[data-i18n-options]').forEach(function (el) {
      const prefix = el.getAttribute('data-i18n-options');
      const opts = el.querySelectorAll('option');
      opts.forEach(function (opt, i) {
        const key = prefix + (i + 1);
        const text = t(key);
        if (text && text !== key) opt.textContent = text;
      });
    });

    // Update lang toggle text
    var langToggle = document.getElementById('langToggle');
    if (langToggle) {
      langToggle.textContent = t('nav.langLabel');
    }

    // Update document title
    var siteTitle = currentLang === 'zh'
      ? '中科国际顾问 - 智慧太空舱'
      : 'Zhongke International - Smart Capsule';
    var pageTitles = {
      home: currentLang === 'zh' ? '首页' : 'Home',
      about: currentLang === 'zh' ? '公司简介' : 'About Us',
      products: currentLang === 'zh' ? '产品中心' : 'Products',
      detail: currentLang === 'zh' ? '产品详情' : 'Product Details',
      gallery: currentLang === 'zh' ? '视频图库' : 'Gallery',
      contact: currentLang === 'zh' ? '联系我们' : 'Contact Us'
    };
    var pt = pageTitles[pageName] || '';
    document.title = pt ? pt + ' - ' + siteTitle : siteTitle;

    // Update HTML lang attr
    document.documentElement.lang = currentLang;

    // Update active nav link
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.classList.remove('active');
    });
    var activeLink = document.querySelector('.nav-links a[data-page="' + pageName + '"]');
    if (activeLink) activeLink.classList.add('active');
  }

  // --- Toggle language ---
  function toggleLang() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem(LANG_KEY, currentLang);
    applyTranslations();
    document.dispatchEvent(new CustomEvent('zk:langchange', { detail: { lang: currentLang } }));
  }

  // --- Mobile nav ---
  function setupNav() {
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('navLinks');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        nav.classList.toggle('open');
        var spans = toggle.querySelectorAll('span');
        if (nav.classList.contains('open')) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
          spans[0].style.transform = '';
          spans[1].style.opacity = '';
          spans[2].style.transform = '';
        }
      });

      // Close nav on link click
      nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          nav.classList.remove('open');
        });
      });
    }
  }

  // --- Header scroll effect ---
  function setupHeaderScroll() {
    var header = document.getElementById('siteHeader');
    if (!header) return;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    });
  }

  // --- Scroll reveal ---
  function setupScrollReveal() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    function check() {
      var windowH = window.innerHeight;
      reveals.forEach(function (el) {
        var top = el.getBoundingClientRect().top;
        if (top < windowH - 80) el.classList.add('visible');
      });
    }

    window.addEventListener('scroll', check);
    window.addEventListener('resize', check);
    check();
  }

  // --- Lightbox ---
  function setupLightbox() {
    var lb = document.getElementById('lightbox');
    if (!lb) {
      lb = document.createElement('div');
      lb.id = 'lightbox';
      lb.className = 'lightbox';
      lb.innerHTML = '<div class="lightbox-close">&times;</div><div class="lightbox-content"></div>';
      document.body.appendChild(lb);
    }

    var content = lb.querySelector('.lightbox-content');
    var closeBtn = lb.querySelector('.lightbox-close');

    document.addEventListener('click', function (e) {
      var item = e.target.closest('[data-lightbox]');
      if (!item) return;
      e.preventDefault();
      var src = item.getAttribute('data-lightbox');
      var caption = item.getAttribute('data-caption') || '';
      content.innerHTML = '<img src="' + src + '" alt="' + caption + '">';
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    function closeLb() {
      lb.classList.remove('open');
      document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeLb);
    lb.addEventListener('click', function (e) {
      if (e.target === lb) closeLb();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLb();
    });
  }

  // --- Video play button ---
  function setupVideoPlay() {
    document.querySelectorAll('[data-video-play]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetId = btn.getAttribute('data-video-play');
        var video = document.getElementById(targetId);
        if (video) {
          if (video.paused) {
            video.play();
            btn.textContent = '⏸';
          } else {
            video.pause();
            btn.textContent = '▶';
          }
        }
      });
    });
  }

  // --- Hero video duration cap ---
  function setupHeroVideoLimit() {
    var heroVideo = document.querySelector('[data-max-duration]');
    if (!heroVideo) return;

    var maxDuration = Number(heroVideo.getAttribute('data-max-duration'));
    if (!Number.isFinite(maxDuration) || maxDuration <= 0) return;

    heroVideo.addEventListener('timeupdate', function () {
      if (heroVideo.currentTime >= maxDuration) {
        heroVideo.currentTime = 0;
        var playResult = heroVideo.play();
        if (playResult && typeof playResult.catch === 'function') playResult.catch(function () {});
      }
    });
  }

  // --- Init ---
  function init() {
    applyTranslations();
    setupNav();
    setupHeaderScroll();
    setupScrollReveal();
    setupLightbox();
    setupVideoPlay();
    setupHeroVideoLimit();

    // Lang toggle click
    var langBtn = document.getElementById('langToggle');
    if (langBtn) {
      langBtn.addEventListener('click', toggleLang);
    }

    // Update year
    var yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  // --- Expose to global ---
  window.ZK = {
    t: t,
    lang: function () { return currentLang; },
    toggleLang: toggleLang,
    pageName: pageName
  };

  // --- Run ---
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
