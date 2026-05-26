/* ZK01-ZK09 product catalog aligned with the customer-facing brochure. */
(function () {
  'use strict';

  window.ZK_PRODUCT_MODELS = {
    order: ['zk01', 'zk02', 'zk03', 'zk04', 'zk05', 'zk06', 'zk07', 'zk08', 'zk09'],
    categories: {
      all: ['zk01', 'zk02', 'zk03', 'zk04', 'zk05', 'zk06', 'zk07', 'zk08', 'zk09'],
      stay: ['zk01', 'zk02', 'zk06', 'zk09'],
      education: ['zk03', 'zk09'],
      medical: ['zk04', 'zk08'],
      commercial: ['zk05', 'zk07'],
      emergency: ['zk05', 'zk08']
    },
    items: {
      zk01: {
        code: 'ZK01',
        nameKey: 'models.zk01.name',
        taglineKey: 'models.zk01.tagline',
        areaKey: 'models.zk01.area',
        useKey: 'models.zk01.use',
        summaryKey: 'models.zk01.summary',
        exteriorKey: 'models.zk01.exterior',
        interiorKey: 'models.zk01.interior',
        configKey: 'models.zk01.config',
        image: 'assets/media/products/ZK01.png',
        gallery: [
          { src: 'assets/media/products/ZK01.png', captionKey: 'gallery.imgZK01' },
          { src: 'assets/media/products/ZK01-1.png', captionKey: 'gallery.imgZK01Detail' }
        ]
      },
      zk02: {
        code: 'ZK02',
        nameKey: 'models.zk02.name',
        taglineKey: 'models.zk02.tagline',
        areaKey: 'models.zk02.area',
        useKey: 'models.zk02.use',
        summaryKey: 'models.zk02.summary',
        exteriorKey: 'models.zk02.exterior',
        interiorKey: 'models.zk02.interior',
        configKey: 'models.zk02.config',
        image: '',
        gallery: []
      },
      zk03: {
        code: 'ZK03',
        nameKey: 'models.zk03.name',
        taglineKey: 'models.zk03.tagline',
        areaKey: 'models.zk03.area',
        useKey: 'models.zk03.use',
        summaryKey: 'models.zk03.summary',
        exteriorKey: 'models.zk03.exterior',
        interiorKey: 'models.zk03.interior',
        configKey: 'models.zk03.config',
        image: '',
        gallery: []
      },
      zk04: {
        code: 'ZK04',
        nameKey: 'models.zk04.name',
        taglineKey: 'models.zk04.tagline',
        areaKey: 'models.zk04.area',
        useKey: 'models.zk04.use',
        summaryKey: 'models.zk04.summary',
        exteriorKey: 'models.zk04.exterior',
        interiorKey: 'models.zk04.interior',
        configKey: 'models.zk04.config',
        image: '',
        gallery: []
      },
      zk05: {
        code: 'ZK05',
        nameKey: 'models.zk05.name',
        taglineKey: 'models.zk05.tagline',
        areaKey: 'models.zk05.area',
        useKey: 'models.zk05.use',
        summaryKey: 'models.zk05.summary',
        exteriorKey: 'models.zk05.exterior',
        interiorKey: 'models.zk05.interior',
        configKey: 'models.zk05.config',
        image: '',
        gallery: []
      },
      zk06: {
        code: 'ZK06',
        nameKey: 'models.zk06.name',
        taglineKey: 'models.zk06.tagline',
        areaKey: 'models.zk06.area',
        useKey: 'models.zk06.use',
        summaryKey: 'models.zk06.summary',
        exteriorKey: 'models.zk06.exterior',
        interiorKey: 'models.zk06.interior',
        configKey: 'models.zk06.config',
        image: '',
        gallery: [],
        featured: true
      },
      zk07: {
        code: 'ZK07',
        nameKey: 'models.zk07.name',
        taglineKey: 'models.zk07.tagline',
        areaKey: 'models.zk07.area',
        useKey: 'models.zk07.use',
        summaryKey: 'models.zk07.summary',
        exteriorKey: 'models.zk07.exterior',
        interiorKey: 'models.zk07.interior',
        configKey: 'models.zk07.config',
        image: 'assets/media/products/ZK07.png',
        gallery: [
          { src: 'assets/media/products/ZK07.png', captionKey: 'gallery.imgZK07' },
          { src: 'assets/media/products/ZK07-1.png', captionKey: 'gallery.imgZK07Detail1' },
          { src: 'assets/media/products/ZK07-2.png', captionKey: 'gallery.imgZK07Detail2' },
          { src: 'assets/media/products/ZK07-3.png', captionKey: 'gallery.imgZK07Detail3' },
          { src: 'assets/media/products/ZK07-4.png', captionKey: 'gallery.imgZK07ThreeView' }
        ]
      },
      zk08: {
        code: 'ZK08',
        nameKey: 'models.zk08.name',
        taglineKey: 'models.zk08.tagline',
        areaKey: 'models.zk08.area',
        useKey: 'models.zk08.use',
        summaryKey: 'models.zk08.summary',
        exteriorKey: 'models.zk08.exterior',
        interiorKey: 'models.zk08.interior',
        configKey: 'models.zk08.config',
        image: 'assets/media/products/ZK08.png',
        gallery: [
          { src: 'assets/media/products/ZK08.png', captionKey: 'gallery.imgZK08' }
        ]
      },
      zk09: {
        code: 'ZK09',
        nameKey: 'models.zk09.name',
        taglineKey: 'models.zk09.tagline',
        areaKey: 'models.zk09.area',
        useKey: 'models.zk09.use',
        summaryKey: 'models.zk09.summary',
        exteriorKey: 'models.zk09.exterior',
        interiorKey: 'models.zk09.interior',
        configKey: 'models.zk09.config',
        image: '',
        gallery: []
      }
    }
  };
})();
