/* Shared navigation and footer for the static multi-page website. */
(function () {
  'use strict';

  var headerHost = document.querySelector('[data-site-header]');
  if (headerHost) {
    headerHost.innerHTML = [
      '<header class="site-header" id="siteHeader">',
        '<div class="header-inner">',
          '<a href="index.html" class="logo-area" aria-label="Zhongke International home">',
            '<img class="brand-mark" src="assets/media/brand/company-mark.webp" alt="">',
            '<span class="logo-text">中科国际<small>Zhongke International</small></span>',
          '</a>',
          '<button class="nav-toggle" id="navToggle" aria-label="Menu"><span></span><span></span><span></span></button>',
          '<nav class="nav-links" id="navLinks">',
            '<a href="products.html" data-page="products" data-i18n="nav.products">产品中心</a>',
            '<a href="solutions.html" data-page="solutions" data-i18n="nav.solutions">解决方案</a>',
            '<a href="cases.html" data-page="cases" data-i18n="nav.cases">案例展示</a>',
            '<a href="about.html" data-page="about" data-i18n="nav.about">关于我们</a>',
            '<a href="contact.html" data-page="contact" data-i18n="nav.contact">联系我们</a>',
            '<a href="contact.html" class="header-cta" data-i18n="nav.appointment">预约参观</a>',
            '<button class="lang-toggle" id="langToggle" aria-label="Switch Language">EN</button>',
          '</nav>',
        '</div>',
      '</header>'
    ].join('');
  }

  var footerHost = document.querySelector('[data-site-footer]');
  if (footerHost) {
    footerHost.innerHTML = [
      '<footer class="site-footer">',
        '<div class="container">',
          '<div class="footer-grid">',
            '<div class="footer-brand">',
              '<div class="logo-area footer-logo"><img class="brand-mark" src="assets/media/brand/company-mark.webp" alt=""><span class="logo-text">中科国际<small>Zhongke International</small></span></div>',
              '<p data-i18n="footer.brandDesc">中科国际专注于智能舱体产品与多场景部署。</p>',
              '<ul class="footer-meta">',
                '<li><span data-i18n="footer.registrationLabel">注册证号</span><strong data-i18n="footer.registrationNo">78386327</strong></li>',
                '<li><span data-i18n="footer.phoneLabel">联系电话</span><strong data-i18n="footer.phone">杨涛峰 13319274381</strong></li>',
                '<li><span data-i18n="footer.addressLabel">地址</span><strong data-i18n="footer.address">香港尖沙咀麼地道75号南洋中心2座7楼</strong></li>',
              '</ul>',
            '</div>',
            '<div class="footer-col">',
              '<h4 data-i18n="footer.products">产品</h4>',
              '<a href="products.html" data-i18n="footer.productCenter">正式产品系列</a>',
              '<a href="zk06.html" data-i18n="footer.featured">ZK06 叠加度假舱</a>',
              '<a href="solutions.html" data-i18n="footer.solutions">场景解决方案</a>',
            '</div>',
            '<div class="footer-col">',
              '<h4 data-i18n="footer.company">公司</h4>',
              '<a href="about.html" data-i18n="footer.aboutUs">公司简介</a>',
              '<a href="contact.html" data-i18n="footer.contactUs">联系我们</a>',
            '</div>',
            '<div class="footer-col">',
              '<h4 data-i18n="footer.resources">内容</h4>',
              '<a href="cases.html" data-i18n="footer.casesLink">案例展示</a>',
              '<a href="gallery.html" data-i18n="footer.galleryLink">产品影像</a>',
              '<a href="contact.html" class="footer-inquiry" data-i18n="footer.contactUs">联系我们</a>',
            '</div>',
          '</div>',
          '<div class="footer-bottom"><span data-i18n="footer.copyright">© 2026 中科国际 版权所有</span><span>Smart Capsule Series</span></div>',
        '</div>',
      '</footer>'
    ].join('');
  }
})();
