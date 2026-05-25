/* ============================================
   Product Data - Smart Capsule Models
   ============================================ */

(function () {
  'use strict';

  var modelFeatures = [
    'products.specSize',
    'products.specSolar',
    'products.specInsulation',
    'products.specHvac',
    'products.specDeploy'
  ];

  window.ZK_PRODUCT_MODELS = {
    order: ['zk01', 'zk07', 'zk08', 'abaid'],
    items: {
      zk01: {
        code: 'ZK01',
        series: 'ZK Series',
        titleKey: 'products.modelZK01',
        descKey: 'products.modelZK01Desc',
        shortDescKey: 'home.modelZK01Desc',
        mainImage: 'assets/media/products/ZK01.png',
        mainCaptionKey: 'gallery.imgZK01',
        detailImages: [
          { src: 'assets/media/products/ZK01-1.png', captionKey: 'gallery.imgZK01Detail' }
        ],
        features: modelFeatures
      },
      zk07: {
        code: 'ZK07',
        series: 'ZK Series',
        titleKey: 'products.modelZK07',
        descKey: 'products.modelZK07Desc',
        shortDescKey: 'home.modelZK07Desc',
        mainImage: 'assets/media/products/ZK07.png',
        mainCaptionKey: 'gallery.imgZK07',
        detailImages: [
          { src: 'assets/media/products/ZK07-1.png', captionKey: 'gallery.imgZK07Detail1' },
          { src: 'assets/media/products/ZK07-2.png', captionKey: 'gallery.imgZK07Detail2' },
          { src: 'assets/media/products/ZK07-3.png', captionKey: 'gallery.imgZK07Detail3' },
          { src: 'assets/media/products/ZK07-4.png', captionKey: 'gallery.imgZK07ThreeView' }
        ],
        features: modelFeatures
      },
      zk08: {
        code: 'ZK08',
        series: 'ZK Series',
        titleKey: 'products.modelZK08',
        descKey: 'products.modelZK08Desc',
        shortDescKey: 'home.modelZK08Desc',
        mainImage: 'assets/media/products/ZK08.png',
        mainCaptionKey: 'gallery.imgZK08',
        detailImages: [],
        features: modelFeatures
      },
      abaid: {
        code: 'ABAID',
        series: 'ABAID Series',
        titleKey: 'products.modelABAID',
        descKey: 'products.modelABAIDDesc',
        shortDescKey: 'home.modelABAIDDesc',
        mainImage: 'assets/media/products/ABAID-1.png',
        mainCaptionKey: 'gallery.imgABAID',
        detailImages: [
          { src: 'assets/media/products/ABAID-2.png', captionKey: 'gallery.imgABAIDDetail' }
        ],
        features: modelFeatures
      }
    }
  };
})();
