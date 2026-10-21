/* Approved customer-facing catalog and media assignments. */
(function () {
  'use strict';

  window.ZK_PRODUCT_MODELS = {
    order: ['zk01', 'zk02', 'zk03', 'zk04', 'zk05', 'zk06', 'zk07', 'zk08', 'zk09', 'abadi'],
    structure: {
      src: 'assets/media/products/structure-exploded.webp',
      captionKey: 'detail.structureCaption'
    },
    interiorShowcase: [
      { kind: 'interior', code: 'ZK01', src: 'assets/media/products/ZK01-interior-generated.webp', captionKey: 'gallery.imgZK01InteriorGenerated' },
      { kind: 'interior', code: 'ZK02', src: 'assets/media/products/ZK02-interior-generated.webp', captionKey: 'gallery.imgZK02InteriorGenerated' },
      { kind: 'interior', code: 'ZK03', src: 'assets/media/products/ZK03-interior-education.webp', captionKey: 'gallery.imgZK03Education' },
      { kind: 'interior', code: 'ZK03', src: 'assets/media/products/ZK03-interior-meeting.webp', captionKey: 'gallery.imgZK03Meeting' },
      { kind: 'interior', code: 'ZK04', src: 'assets/media/products/ZK04-interior.webp', captionKey: 'gallery.imgZK04Interior' },
      { kind: 'interior', code: 'ZK05', src: 'assets/media/products/ZK05-interior-bedroom.webp', captionKey: 'gallery.imgZK05Bedroom' },
      { kind: 'interior', code: 'ZK05', src: 'assets/media/products/ZK05-interior-suite.webp', captionKey: 'gallery.imgZK05Suite' },
      { kind: 'interior', code: 'ZK05', src: 'assets/media/products/ZK05-interior-lounge.webp', captionKey: 'gallery.imgZK05Lounge' },
      { kind: 'interior', code: 'ZK06', src: 'assets/media/products/ZK06-interior-lounge.webp', captionKey: 'gallery.imgZK06InteriorLounge' },
      { kind: 'interior', code: 'ZK06', src: 'assets/media/products/ZK06-interior-bedroom.webp', captionKey: 'gallery.imgZK06InteriorBedroom' },
      { kind: 'interior', code: 'ZK06', src: 'assets/media/products/ZK06-interior-suite.webp', captionKey: 'gallery.imgZK06InteriorSuite' },
      { kind: 'interior', code: 'ZK07', src: 'assets/media/products/ZK07-interior-generated.webp', captionKey: 'gallery.imgZK07InteriorGenerated' },
      { kind: 'interior', code: 'ZK08', src: 'assets/media/products/ZK08-interior-generated.webp', captionKey: 'gallery.imgZK08InteriorGenerated' },
      { kind: 'interior', code: 'ABADI', src: 'assets/media/products/ABADI-interior-generated.webp', captionKey: 'gallery.imgABADIInteriorGenerated' },
      { kind: 'layout', code: 'ZK01', src: 'assets/media/products/ZK01-layout-generated.webp', captionKey: 'gallery.imgZK01LayoutGenerated' },
      { kind: 'layout', code: 'ZK02', src: 'assets/media/products/ZK02-layout-generated.webp', captionKey: 'gallery.imgZK02LayoutGenerated' },
      { kind: 'layout', code: 'ZK03', src: 'assets/media/products/ZK03-layout-generated.webp', captionKey: 'gallery.imgZK03LayoutGenerated' },
      { kind: 'layout', code: 'ZK09', src: 'assets/media/products/ZK09-interior-01.webp', captionKey: 'gallery.imgZK09Interior1' },
      { kind: 'layout', code: 'ZK09', src: 'assets/media/products/ZK09-interior-02.webp', captionKey: 'gallery.imgZK09Interior2' },
      { kind: 'layout', code: 'ZK04', src: 'assets/media/products/ZK04-interior-layout.webp', captionKey: 'gallery.imgZK04Layout' },
      { kind: 'layout', code: 'ZK05', src: 'assets/media/products/ZK05-layout-01.webp', captionKey: 'gallery.imgZK05Layout1' },
      { kind: 'layout', code: 'ZK05', src: 'assets/media/products/ZK05-layout-02.webp', captionKey: 'gallery.imgZK05Layout2' },
      { kind: 'layout', code: 'ZK05', src: 'assets/media/products/ZK05-layout-03.webp', captionKey: 'gallery.imgZK05Layout3' },
      { kind: 'layout', code: 'ZK06', src: 'assets/media/products/ZK06-layout.webp', captionKey: 'gallery.imgZK06Layout' },
      { kind: 'layout', code: 'ZK06', src: 'assets/media/products/ZK06-layout-option-c.webp', captionKey: 'gallery.imgZK06LayoutOptionC' },
      { kind: 'layout', code: 'ZK07', src: 'assets/media/products/ZK07-layout-generated.webp', captionKey: 'gallery.imgZK07LayoutGenerated' },
      { kind: 'layout', code: 'ZK08', src: 'assets/media/products/ZK08-layout-generated.webp', captionKey: 'gallery.imgZK08LayoutGenerated' },
      { kind: 'layout', code: 'ZK09', src: 'assets/media/products/ZK09-layout-01.webp', captionKey: 'gallery.imgZK09Layout1' },
      { kind: 'layout', code: 'ZK09', src: 'assets/media/products/ZK09-layout-02.webp', captionKey: 'gallery.imgZK09Layout2' },
      { kind: 'layout', code: 'ABADI', src: 'assets/media/products/ABADI-layout-generated.webp', captionKey: 'gallery.imgABADILayoutGenerated' },
      { kind: 'structure', code: 'SERIES', src: 'assets/media/products/structure-exploded.webp', captionKey: 'detail.structureCaption' }
    ],
    categories: {
      all: ['zk01', 'zk02', 'zk03', 'zk04', 'zk05', 'zk06', 'zk07', 'zk08', 'zk09', 'abadi'],
      stay: ['zk01', 'zk02', 'zk05', 'zk06', 'zk09', 'abadi'],
      education: ['zk03', 'zk09'],
      medical: ['zk04', 'zk08'],
      commercial: ['zk07', 'abadi'],
      emergency: ['zk08'],
      custom: ['zk09', 'abadi']
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
        image: 'assets/media/products/ZK01-exterior.webp',
        gallery: [
          { src: 'assets/media/products/ZK01-exterior.webp', captionKey: 'gallery.imgZK01Exterior' },
          { src: 'assets/media/products/ZK01-main.webp', captionKey: 'gallery.imgZK01' },
          { src: 'assets/media/products/ZK01-interior-generated.webp', captionKey: 'gallery.imgZK01InteriorGenerated' },
          { src: 'assets/media/products/ZK01-layout-generated.webp', captionKey: 'gallery.imgZK01LayoutGenerated', kind: 'layout' }
        ],
        interiors: [
          { src: 'assets/media/products/ZK01-interior-generated.webp', captionKey: 'gallery.imgZK01InteriorGenerated' },
          { src: 'assets/media/products/ZK01-layout-generated.webp', captionKey: 'gallery.imgZK01LayoutGenerated', kind: 'layout' }
        ],
        videos: [
          { src: 'assets/media/video/ZK01-web-20s.mp4', poster: 'assets/media/products/ZK01-exterior.webp', captionKey: 'gallery.videoTitle1' }
        ],
        quoteStatusKey: 'products.quotePending',
        quoteUrl: ''
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
        image: 'assets/media/products/ZK02-exterior.webp',
        gallery: [
          { src: 'assets/media/products/ZK02-exterior.webp', captionKey: 'gallery.imgZK02Exterior' },
          { src: 'assets/media/products/ZK02-solar.webp', captionKey: 'gallery.imgZK02Solar' },
          { src: 'assets/media/products/ZK02-interior-generated.webp', captionKey: 'gallery.imgZK02InteriorGenerated' },
          { src: 'assets/media/products/ZK02-layout-generated.webp', captionKey: 'gallery.imgZK02LayoutGenerated', kind: 'layout' }
        ],
        interiors: [
          { src: 'assets/media/products/ZK02-interior-generated.webp', captionKey: 'gallery.imgZK02InteriorGenerated' },
          { src: 'assets/media/products/ZK02-layout-generated.webp', captionKey: 'gallery.imgZK02LayoutGenerated', kind: 'layout' }
        ],
        videos: [],
        quoteStatusKey: 'products.quotePending',
        quoteUrl: ''
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
        image: 'assets/media/products/ZK03-exterior.webp',
        gallery: [
          { src: 'assets/media/products/ZK03-exterior.webp', captionKey: 'gallery.imgZK03Exterior' },
          { src: 'assets/media/products/ZK03-interior-education.webp', captionKey: 'gallery.imgZK03Education' },
          { src: 'assets/media/products/ZK03-interior-meeting.webp', captionKey: 'gallery.imgZK03Meeting' },
          { src: 'assets/media/products/ZK03-layout-generated.webp', captionKey: 'gallery.imgZK03LayoutGenerated', kind: 'layout' }
        ],
        interiors: [
          { src: 'assets/media/products/ZK03-interior-education.webp', captionKey: 'gallery.imgZK03Education' },
          { src: 'assets/media/products/ZK03-interior-meeting.webp', captionKey: 'gallery.imgZK03Meeting' },
          { src: 'assets/media/products/ZK03-layout-generated.webp', captionKey: 'gallery.imgZK03LayoutGenerated', kind: 'layout' }
        ],
        videos: [],
        quoteStatusKey: 'products.quotePending',
        quoteUrl: ''
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
        image: 'assets/media/products/ZK04-exterior.webp',
        gallery: [
          { src: 'assets/media/products/ZK04-exterior.webp', captionKey: 'gallery.imgZK04Exterior' },
          { src: 'assets/media/products/ZK04-interior-layout.webp', captionKey: 'gallery.imgZK04Layout' },
          { src: 'assets/media/products/ZK04-interior.webp', captionKey: 'gallery.imgZK04Interior' }
        ],
        interiors: [
          { src: 'assets/media/products/ZK04-interior-layout.webp', captionKey: 'gallery.imgZK04Layout', kind: 'layout' },
          { src: 'assets/media/products/ZK04-interior.webp', captionKey: 'gallery.imgZK04Interior' }
        ],
        videos: [],
        quoteStatusKey: 'products.quotePending',
        quoteUrl: ''
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
        image: 'assets/media/products/ZK05-exterior.webp',
        gallery: [
          { src: 'assets/media/products/ZK05-exterior.webp', captionKey: 'gallery.imgZK05Exterior' },
          { src: 'assets/media/products/ZK05-view.webp', captionKey: 'gallery.imgZK05View' },
          { src: 'assets/media/products/ZK05-interior-bedroom.webp', captionKey: 'gallery.imgZK05Bedroom' },
          { src: 'assets/media/products/ZK05-interior-suite.webp', captionKey: 'gallery.imgZK05Suite' },
          { src: 'assets/media/products/ZK05-interior-lounge.webp', captionKey: 'gallery.imgZK05Lounge' },
          { src: 'assets/media/products/ZK05-layout-01.webp', captionKey: 'gallery.imgZK05Layout1' },
          { src: 'assets/media/products/ZK05-layout-02.webp', captionKey: 'gallery.imgZK05Layout2' },
          { src: 'assets/media/products/ZK05-layout-03.webp', captionKey: 'gallery.imgZK05Layout3' }
        ],
        interiors: [
          { src: 'assets/media/products/ZK05-interior-bedroom.webp', captionKey: 'gallery.imgZK05Bedroom' },
          { src: 'assets/media/products/ZK05-interior-suite.webp', captionKey: 'gallery.imgZK05Suite' },
          { src: 'assets/media/products/ZK05-interior-lounge.webp', captionKey: 'gallery.imgZK05Lounge' },
          { src: 'assets/media/products/ZK05-layout-01.webp', captionKey: 'gallery.imgZK05Layout1', kind: 'layout' },
          { src: 'assets/media/products/ZK05-layout-02.webp', captionKey: 'gallery.imgZK05Layout2', kind: 'layout' },
          { src: 'assets/media/products/ZK05-layout-03.webp', captionKey: 'gallery.imgZK05Layout3', kind: 'layout' }
        ],
        videos: [
          { src: 'assets/media/video/ZK05-web.mp4', poster: 'assets/media/products/ZK05-exterior.webp', captionKey: 'gallery.videoZK05' }
        ],
        quoteStatusKey: 'products.quotePending',
        quoteUrl: ''
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
        image: 'assets/media/products/ZK06-exterior.webp',
        gallery: [
          { src: 'assets/media/products/ZK06-exterior.webp', captionKey: 'gallery.imgZK06' },
          { src: 'assets/media/products/ZK06-interior-lounge.webp', captionKey: 'gallery.imgZK06InteriorLounge' },
          { src: 'assets/media/products/ZK06-interior-bedroom.webp', captionKey: 'gallery.imgZK06InteriorBedroom' },
          { src: 'assets/media/products/ZK06-interior-suite.webp', captionKey: 'gallery.imgZK06InteriorSuite' },
          { src: 'assets/media/products/ZK06-layout.webp', captionKey: 'gallery.imgZK06Layout' },
          { src: 'assets/media/products/ZK06-layout-option-c.webp', captionKey: 'gallery.imgZK06LayoutOptionC' }
        ],
        interiors: [
          { src: 'assets/media/products/ZK06-interior-lounge.webp', captionKey: 'gallery.imgZK06InteriorLounge' },
          { src: 'assets/media/products/ZK06-interior-bedroom.webp', captionKey: 'gallery.imgZK06InteriorBedroom' },
          { src: 'assets/media/products/ZK06-interior-suite.webp', captionKey: 'gallery.imgZK06InteriorSuite' },
          { src: 'assets/media/products/ZK06-layout.webp', captionKey: 'gallery.imgZK06Layout', kind: 'layout' },
          { src: 'assets/media/products/ZK06-layout-option-c.webp', captionKey: 'gallery.imgZK06LayoutOptionC', kind: 'layout' }
        ],
        videos: [
          { src: 'assets/media/video/ZK06-web.mp4', poster: 'assets/media/products/ZK06-exterior.webp', captionKey: 'gallery.videoZK06' }
        ],
        quoteStatusKey: 'products.quotePending',
        quoteUrl: '',
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
        image: 'assets/media/products/ZK07-exterior.webp',
        gallery: [
          { src: 'assets/media/products/ZK07-exterior.webp', captionKey: 'gallery.imgZK07Commercial' },
          { src: 'assets/media/products/ZK07-interior-generated.webp', captionKey: 'gallery.imgZK07InteriorGenerated' },
          { src: 'assets/media/products/ZK07-layout-generated.webp', captionKey: 'gallery.imgZK07LayoutGenerated', kind: 'layout' }
        ],
        interiors: [
          { src: 'assets/media/products/ZK07-interior-generated.webp', captionKey: 'gallery.imgZK07InteriorGenerated' },
          { src: 'assets/media/products/ZK07-layout-generated.webp', captionKey: 'gallery.imgZK07LayoutGenerated', kind: 'layout' }
        ],
        videos: [
          { src: 'assets/media/video/ZK07-web.mp4', poster: 'assets/media/products/ZK07-exterior.webp', captionKey: 'gallery.videoZK07' }
        ],
        quoteStatusKey: 'products.quotePending',
        quoteUrl: ''
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
        image: 'assets/media/products/ZK08-exterior.webp',
        gallery: [
          { src: 'assets/media/products/ZK08-exterior.webp', captionKey: 'gallery.imgZK08Exterior' },
          { src: 'assets/media/products/ZK08-emergency.webp', captionKey: 'gallery.imgZK08Emergency' },
          { src: 'assets/media/products/ZK08-interior-generated.webp', captionKey: 'gallery.imgZK08InteriorGenerated' },
          { src: 'assets/media/products/ZK08-layout-generated.webp', captionKey: 'gallery.imgZK08LayoutGenerated', kind: 'layout' }
        ],
        interiors: [
          { src: 'assets/media/products/ZK08-interior-generated.webp', captionKey: 'gallery.imgZK08InteriorGenerated' },
          { src: 'assets/media/products/ZK08-layout-generated.webp', captionKey: 'gallery.imgZK08LayoutGenerated', kind: 'layout' }
        ],
        videos: [
          { src: 'assets/media/video/ZK08-web.mp4', poster: 'assets/media/products/ZK08-exterior.webp', captionKey: 'gallery.videoZK08' }
        ],
        quoteStatusKey: 'products.quotePending',
        quoteUrl: ''
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
        image: 'assets/media/products/ZK09-exterior.webp',
        gallery: [
          { src: 'assets/media/products/ZK09-exterior.webp', captionKey: 'gallery.imgZK09' },
          { src: 'assets/media/products/ZK09-interior-01.webp', captionKey: 'gallery.imgZK09Interior1', kind: 'layout' },
          { src: 'assets/media/products/ZK09-interior-02.webp', captionKey: 'gallery.imgZK09Interior2', kind: 'layout' },
          { src: 'assets/media/products/ZK09-layout-01.webp', captionKey: 'gallery.imgZK09Layout1' },
          { src: 'assets/media/products/ZK09-layout-02.webp', captionKey: 'gallery.imgZK09Layout2' },
          { src: 'assets/media/products/ZK09-1.webp', captionKey: 'gallery.imgZK09Detail1' },
          { src: 'assets/media/products/ZK09-2.webp', captionKey: 'gallery.imgZK09Detail2' }
        ],
        interiors: [
          { src: 'assets/media/products/ZK09-layout-01.webp', captionKey: 'gallery.imgZK09Layout1', kind: 'layout' },
          { src: 'assets/media/products/ZK09-layout-02.webp', captionKey: 'gallery.imgZK09Layout2', kind: 'layout' }
        ],
        videos: [
          { src: 'assets/media/video/ZK09-web.mp4', poster: 'assets/media/products/ZK09-exterior.webp', captionKey: 'gallery.videoZK09' }
        ],
        quoteStatusKey: 'products.quotePending',
        quoteUrl: ''
      },
      abadi: {
        code: 'ABADI',
        nameKey: 'models.abadi.name',
        taglineKey: 'models.abadi.tagline',
        areaKey: 'models.abadi.area',
        useKey: 'models.abadi.use',
        summaryKey: 'models.abadi.summary',
        exteriorKey: 'models.abadi.exterior',
        interiorKey: 'models.abadi.interior',
        configKey: 'models.abadi.config',
        image: 'assets/media/products/ABADI-custom.webp',
        gallery: [
          { src: 'assets/media/products/ABADI-custom.webp', captionKey: 'gallery.imgABADICustom' },
          { src: 'assets/media/products/ABADI-1.webp', captionKey: 'gallery.imgABADISignature' },
          { src: 'assets/media/products/ABADI-clean.webp', captionKey: 'gallery.imgABADI' },
          { src: 'assets/media/products/ABADI-interior-generated.webp', captionKey: 'gallery.imgABADIInteriorGenerated' },
          { src: 'assets/media/products/ABADI-layout-generated.webp', captionKey: 'gallery.imgABADILayoutGenerated', kind: 'layout' }
        ],
        interiors: [
          { src: 'assets/media/products/ABADI-interior-generated.webp', captionKey: 'gallery.imgABADIInteriorGenerated' },
          { src: 'assets/media/products/ABADI-layout-generated.webp', captionKey: 'gallery.imgABADILayoutGenerated', kind: 'layout' }
        ],
        videos: [],
        quoteStatusKey: 'products.quotePending',
        quoteUrl: ''
      }
    }
  };
  /* Hospitality series appended after the established smart-capsule range. */
  var catalog = window.ZK_PRODUCT_MODELS;
  var hospitality = {
  "zk-me": {
    "code": "ZK-ME",
    "nameKey": "models.zk-me.name",
    "taglineKey": "models.zk-me.tagline",
    "areaKey": "models.zk-me.area",
    "useKey": "models.zk-me.use",
    "summaryKey": "models.zk-me.summary",
    "exteriorKey": "models.zk-me.exterior",
    "interiorKey": "models.zk-me.interior",
    "configKey": "models.zk-me.config",
    "dimensionsKey": "models.zk-me.dimensions",
    "seriesKey": "models.zk-me.series",
    "image": "assets/media/products/ZK-ME-01.webp",
    "gallery": [
      {
        "src": "assets/media/products/ZK-ME-01.webp",
        "captionKey": "gallery.imgZKME01",
        "kind": "exterior"
      },
      {
        "src": "assets/media/products/ZK-ME-02.webp",
        "captionKey": "gallery.imgZKME02",
        "kind": "layout"
      },
      {
        "src": "assets/media/products/ZK-ME-03.webp",
        "captionKey": "gallery.imgZKME03",
        "kind": "layout"
      }
    ],
    "interiors": [
      {
        "src": "assets/media/products/ZK-ME-02.webp",
        "captionKey": "gallery.imgZKME02",
        "kind": "layout"
      },
      {
        "src": "assets/media/products/ZK-ME-03.webp",
        "captionKey": "gallery.imgZKME03",
        "kind": "layout"
      }
    ],
    "videos": [],
    "quoteStatusKey": "products.quotePending",
    "quoteUrl": ""
  },
  "zk-m22": {
    "code": "ZK-M22",
    "nameKey": "models.zk-m22.name",
    "taglineKey": "models.zk-m22.tagline",
    "areaKey": "models.zk-m22.area",
    "useKey": "models.zk-m22.use",
    "summaryKey": "models.zk-m22.summary",
    "exteriorKey": "models.zk-m22.exterior",
    "interiorKey": "models.zk-m22.interior",
    "configKey": "models.zk-m22.config",
    "dimensionsKey": "models.zk-m22.dimensions",
    "seriesKey": "models.zk-m22.series",
    "image": "assets/media/products/ZK-M22-01.webp",
    "gallery": [
      {
        "src": "assets/media/products/ZK-M22-01.webp",
        "captionKey": "gallery.imgZKM2201",
        "kind": "exterior"
      },
      {
        "src": "assets/media/products/ZK-M22-02.webp",
        "captionKey": "gallery.imgZKM2202",
        "kind": "exterior"
      },
      {
        "src": "assets/media/products/ZK-M22-03.webp",
        "captionKey": "gallery.imgZKM2203",
        "kind": "exterior"
      },
      {
        "src": "assets/media/products/ZK-M22-04.webp",
        "captionKey": "gallery.imgZKM2204",
        "kind": "layout"
      },
      {
        "src": "assets/media/products/ZK-M22-05.webp",
        "captionKey": "gallery.imgZKM2205",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-M22-06.webp",
        "captionKey": "gallery.imgZKM2206",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-M22-07.webp",
        "captionKey": "gallery.imgZKM2207",
        "kind": "layout"
      }
    ],
    "interiors": [
      {
        "src": "assets/media/products/ZK-M22-04.webp",
        "captionKey": "gallery.imgZKM2204",
        "kind": "layout"
      },
      {
        "src": "assets/media/products/ZK-M22-05.webp",
        "captionKey": "gallery.imgZKM2205",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-M22-06.webp",
        "captionKey": "gallery.imgZKM2206",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-M22-07.webp",
        "captionKey": "gallery.imgZKM2207",
        "kind": "layout"
      }
    ],
    "videos": [],
    "quoteStatusKey": "products.quotePending",
    "quoteUrl": ""
  },
  "zk-m28": {
    "code": "ZK-M28",
    "nameKey": "models.zk-m28.name",
    "taglineKey": "models.zk-m28.tagline",
    "areaKey": "models.zk-m28.area",
    "useKey": "models.zk-m28.use",
    "summaryKey": "models.zk-m28.summary",
    "exteriorKey": "models.zk-m28.exterior",
    "interiorKey": "models.zk-m28.interior",
    "configKey": "models.zk-m28.config",
    "dimensionsKey": "models.zk-m28.dimensions",
    "seriesKey": "models.zk-m28.series",
    "image": "assets/media/products/ZK-M28-01.webp",
    "gallery": [
      {
        "src": "assets/media/products/ZK-M28-01.webp",
        "captionKey": "gallery.imgZKM2801",
        "kind": "exterior"
      },
      {
        "src": "assets/media/products/ZK-M28-02.webp",
        "captionKey": "gallery.imgZKM2802",
        "kind": "exterior"
      },
      {
        "src": "assets/media/products/ZK-M28-03.webp",
        "captionKey": "gallery.imgZKM2803",
        "kind": "exterior"
      },
      {
        "src": "assets/media/products/ZK-M28-04.webp",
        "captionKey": "gallery.imgZKM2804",
        "kind": "layout"
      },
      {
        "src": "assets/media/products/ZK-M28-05.webp",
        "captionKey": "gallery.imgZKM2805",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-M28-06.webp",
        "captionKey": "gallery.imgZKM2806",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-M28-07.webp",
        "captionKey": "gallery.imgZKM2807",
        "kind": "interior"
      }
    ],
    "interiors": [
      {
        "src": "assets/media/products/ZK-M28-04.webp",
        "captionKey": "gallery.imgZKM2804",
        "kind": "layout"
      },
      {
        "src": "assets/media/products/ZK-M28-05.webp",
        "captionKey": "gallery.imgZKM2805",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-M28-06.webp",
        "captionKey": "gallery.imgZKM2806",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-M28-07.webp",
        "captionKey": "gallery.imgZKM2807",
        "kind": "interior"
      }
    ],
    "videos": [],
    "quoteStatusKey": "products.quotePending",
    "quoteUrl": ""
  },
  "zk-m28t": {
    "code": "ZK-M28T",
    "nameKey": "models.zk-m28t.name",
    "taglineKey": "models.zk-m28t.tagline",
    "areaKey": "models.zk-m28t.area",
    "useKey": "models.zk-m28t.use",
    "summaryKey": "models.zk-m28t.summary",
    "exteriorKey": "models.zk-m28t.exterior",
    "interiorKey": "models.zk-m28t.interior",
    "configKey": "models.zk-m28t.config",
    "dimensionsKey": "models.zk-m28t.dimensions",
    "seriesKey": "models.zk-m28t.series",
    "image": "assets/media/products/ZK-M28T-01.webp",
    "gallery": [
      {
        "src": "assets/media/products/ZK-M28T-01.webp",
        "captionKey": "gallery.imgZKM28T01",
        "kind": "exterior"
      },
      {
        "src": "assets/media/products/ZK-M28T-02.webp",
        "captionKey": "gallery.imgZKM28T02",
        "kind": "exterior"
      },
      {
        "src": "assets/media/products/ZK-M28T-03.webp",
        "captionKey": "gallery.imgZKM28T03",
        "kind": "exterior"
      },
      {
        "src": "assets/media/products/ZK-M28T-04.webp",
        "captionKey": "gallery.imgZKM28T04",
        "kind": "layout"
      },
      {
        "src": "assets/media/products/ZK-M28T-05.webp",
        "captionKey": "gallery.imgZKM28T05",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-M28T-06.webp",
        "captionKey": "gallery.imgZKM28T06",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-M28T-07.webp",
        "captionKey": "gallery.imgZKM28T07",
        "kind": "interior"
      }
    ],
    "interiors": [
      {
        "src": "assets/media/products/ZK-M28T-04.webp",
        "captionKey": "gallery.imgZKM28T04",
        "kind": "layout"
      },
      {
        "src": "assets/media/products/ZK-M28T-05.webp",
        "captionKey": "gallery.imgZKM28T05",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-M28T-06.webp",
        "captionKey": "gallery.imgZKM28T06",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-M28T-07.webp",
        "captionKey": "gallery.imgZKM28T07",
        "kind": "interior"
      }
    ],
    "videos": [],
    "quoteStatusKey": "products.quotePending",
    "quoteUrl": ""
  },
  "zk-m38": {
    "code": "ZK-M38",
    "nameKey": "models.zk-m38.name",
    "taglineKey": "models.zk-m38.tagline",
    "areaKey": "models.zk-m38.area",
    "useKey": "models.zk-m38.use",
    "summaryKey": "models.zk-m38.summary",
    "exteriorKey": "models.zk-m38.exterior",
    "interiorKey": "models.zk-m38.interior",
    "configKey": "models.zk-m38.config",
    "dimensionsKey": "models.zk-m38.dimensions",
    "seriesKey": "models.zk-m38.series",
    "image": "assets/media/products/ZK-M38-01.webp",
    "gallery": [
      {
        "src": "assets/media/products/ZK-M38-01.webp",
        "captionKey": "gallery.imgZKM3801",
        "kind": "exterior"
      },
      {
        "src": "assets/media/products/ZK-M38-02.webp",
        "captionKey": "gallery.imgZKM3802",
        "kind": "exterior"
      },
      {
        "src": "assets/media/products/ZK-M38-03.webp",
        "captionKey": "gallery.imgZKM3803",
        "kind": "layout"
      },
      {
        "src": "assets/media/products/ZK-M38-04.webp",
        "captionKey": "gallery.imgZKM3804",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-M38-05.webp",
        "captionKey": "gallery.imgZKM3805",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-M38-06.webp",
        "captionKey": "gallery.imgZKM3806",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-M38-07.webp",
        "captionKey": "gallery.imgZKM3807",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-M38-08.webp",
        "captionKey": "gallery.imgZKM3808",
        "kind": "exterior"
      }
    ],
    "interiors": [
      {
        "src": "assets/media/products/ZK-M38-03.webp",
        "captionKey": "gallery.imgZKM3803",
        "kind": "layout"
      },
      {
        "src": "assets/media/products/ZK-M38-04.webp",
        "captionKey": "gallery.imgZKM3804",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-M38-05.webp",
        "captionKey": "gallery.imgZKM3805",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-M38-06.webp",
        "captionKey": "gallery.imgZKM3806",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-M38-07.webp",
        "captionKey": "gallery.imgZKM3807",
        "kind": "interior"
      }
    ],
    "videos": [],
    "quoteStatusKey": "products.quotePending",
    "quoteUrl": ""
  },
  "zk-mf": {
    "code": "ZK-MF",
    "nameKey": "models.zk-mf.name",
    "taglineKey": "models.zk-mf.tagline",
    "areaKey": "models.zk-mf.area",
    "useKey": "models.zk-mf.use",
    "summaryKey": "models.zk-mf.summary",
    "exteriorKey": "models.zk-mf.exterior",
    "interiorKey": "models.zk-mf.interior",
    "configKey": "models.zk-mf.config",
    "dimensionsKey": "models.zk-mf.dimensions",
    "seriesKey": "models.zk-mf.series",
    "image": "assets/media/products/ZK-MF-01.webp",
    "gallery": [
      {
        "src": "assets/media/products/ZK-MF-01.webp",
        "captionKey": "gallery.imgZKMF01",
        "kind": "exterior"
      },
      {
        "src": "assets/media/products/ZK-MF-02.webp",
        "captionKey": "gallery.imgZKMF02",
        "kind": "exterior"
      },
      {
        "src": "assets/media/products/ZK-MF-03.webp",
        "captionKey": "gallery.imgZKMF03",
        "kind": "exterior"
      },
      {
        "src": "assets/media/products/ZK-MF-04.webp",
        "captionKey": "gallery.imgZKMF04",
        "kind": "layout"
      },
      {
        "src": "assets/media/products/ZK-MF-05.webp",
        "captionKey": "gallery.imgZKMF05",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-MF-06.webp",
        "captionKey": "gallery.imgZKMF06",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-MF-07.webp",
        "captionKey": "gallery.imgZKMF07",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-MF-08.webp",
        "captionKey": "gallery.imgZKMF08",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-MF-09.webp",
        "captionKey": "gallery.imgZKMF09",
        "kind": "interior"
      }
    ],
    "interiors": [
      {
        "src": "assets/media/products/ZK-MF-04.webp",
        "captionKey": "gallery.imgZKMF04",
        "kind": "layout"
      },
      {
        "src": "assets/media/products/ZK-MF-05.webp",
        "captionKey": "gallery.imgZKMF05",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-MF-06.webp",
        "captionKey": "gallery.imgZKMF06",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-MF-07.webp",
        "captionKey": "gallery.imgZKMF07",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-MF-08.webp",
        "captionKey": "gallery.imgZKMF08",
        "kind": "interior"
      },
      {
        "src": "assets/media/products/ZK-MF-09.webp",
        "captionKey": "gallery.imgZKMF09",
        "kind": "interior"
      }
    ],
    "videos": [],
    "quoteStatusKey": "products.quotePending",
    "quoteUrl": ""
  }
};
  var hospitalityIds = Object.keys(hospitality);
  hospitalityIds.forEach(function (id) { catalog.items[id] = hospitality[id]; });
  catalog.order = catalog.order.concat(hospitalityIds);
  catalog.categories.all = catalog.order.slice();
  catalog.categories.smart = catalog.order.slice(0, 10);
  catalog.categories.hospitality = hospitalityIds.slice();
  catalog.categories.stay = catalog.categories.stay.concat(hospitalityIds);
  catalog.interiorShowcase = catalog.interiorShowcase.concat([
  {
    "src": "assets/media/products/ZK-ME-02.webp",
    "captionKey": "gallery.imgZKME02",
    "kind": "layout",
    "code": "ZK-ME"
  },
  {
    "src": "assets/media/products/ZK-ME-03.webp",
    "captionKey": "gallery.imgZKME03",
    "kind": "layout",
    "code": "ZK-ME"
  },
  {
    "src": "assets/media/products/ZK-M22-04.webp",
    "captionKey": "gallery.imgZKM2204",
    "kind": "layout",
    "code": "ZK-M22"
  },
  {
    "src": "assets/media/products/ZK-M22-05.webp",
    "captionKey": "gallery.imgZKM2205",
    "kind": "interior",
    "code": "ZK-M22"
  },
  {
    "src": "assets/media/products/ZK-M22-06.webp",
    "captionKey": "gallery.imgZKM2206",
    "kind": "interior",
    "code": "ZK-M22"
  },
  {
    "src": "assets/media/products/ZK-M22-07.webp",
    "captionKey": "gallery.imgZKM2207",
    "kind": "layout",
    "code": "ZK-M22"
  },
  {
    "src": "assets/media/products/ZK-M28-04.webp",
    "captionKey": "gallery.imgZKM2804",
    "kind": "layout",
    "code": "ZK-M28"
  },
  {
    "src": "assets/media/products/ZK-M28-05.webp",
    "captionKey": "gallery.imgZKM2805",
    "kind": "interior",
    "code": "ZK-M28"
  },
  {
    "src": "assets/media/products/ZK-M28-06.webp",
    "captionKey": "gallery.imgZKM2806",
    "kind": "interior",
    "code": "ZK-M28"
  },
  {
    "src": "assets/media/products/ZK-M28-07.webp",
    "captionKey": "gallery.imgZKM2807",
    "kind": "interior",
    "code": "ZK-M28"
  },
  {
    "src": "assets/media/products/ZK-M28T-04.webp",
    "captionKey": "gallery.imgZKM28T04",
    "kind": "layout",
    "code": "ZK-M28T"
  },
  {
    "src": "assets/media/products/ZK-M28T-05.webp",
    "captionKey": "gallery.imgZKM28T05",
    "kind": "interior",
    "code": "ZK-M28T"
  },
  {
    "src": "assets/media/products/ZK-M28T-06.webp",
    "captionKey": "gallery.imgZKM28T06",
    "kind": "interior",
    "code": "ZK-M28T"
  },
  {
    "src": "assets/media/products/ZK-M28T-07.webp",
    "captionKey": "gallery.imgZKM28T07",
    "kind": "interior",
    "code": "ZK-M28T"
  },
  {
    "src": "assets/media/products/ZK-M38-03.webp",
    "captionKey": "gallery.imgZKM3803",
    "kind": "layout",
    "code": "ZK-M38"
  },
  {
    "src": "assets/media/products/ZK-M38-04.webp",
    "captionKey": "gallery.imgZKM3804",
    "kind": "interior",
    "code": "ZK-M38"
  },
  {
    "src": "assets/media/products/ZK-M38-05.webp",
    "captionKey": "gallery.imgZKM3805",
    "kind": "interior",
    "code": "ZK-M38"
  },
  {
    "src": "assets/media/products/ZK-M38-06.webp",
    "captionKey": "gallery.imgZKM3806",
    "kind": "interior",
    "code": "ZK-M38"
  },
  {
    "src": "assets/media/products/ZK-M38-07.webp",
    "captionKey": "gallery.imgZKM3807",
    "kind": "interior",
    "code": "ZK-M38"
  },
  {
    "src": "assets/media/products/ZK-MF-04.webp",
    "captionKey": "gallery.imgZKMF04",
    "kind": "layout",
    "code": "ZK-MF"
  },
  {
    "src": "assets/media/products/ZK-MF-05.webp",
    "captionKey": "gallery.imgZKMF05",
    "kind": "interior",
    "code": "ZK-MF"
  },
  {
    "src": "assets/media/products/ZK-MF-06.webp",
    "captionKey": "gallery.imgZKMF06",
    "kind": "interior",
    "code": "ZK-MF"
  },
  {
    "src": "assets/media/products/ZK-MF-07.webp",
    "captionKey": "gallery.imgZKMF07",
    "kind": "interior",
    "code": "ZK-MF"
  },
  {
    "src": "assets/media/products/ZK-MF-08.webp",
    "captionKey": "gallery.imgZKMF08",
    "kind": "interior",
    "code": "ZK-MF"
  },
  {
    "src": "assets/media/products/ZK-MF-09.webp",
    "captionKey": "gallery.imgZKMF09",
    "kind": "interior",
    "code": "ZK-MF"
  }
]);
  catalog.order.forEach(function (id, index) {
    var model = catalog.items[id];
    model.seriesKey = model.seriesKey || 'products.smartSeries';
    var hasPublishedQuotation = ['ZK-M22', 'ZK-M28', 'ZK-M38'].indexOf(model.code) !== -1;
    model.quoteUrl = hasPublishedQuotation ? 'assets/files/中科太空舱报价及配置选单.docx?v=20261021-pv' : '';
    model.quoteUrlEn = hasPublishedQuotation ? 'assets/files/Zhongke-Quotation-and-Options-EN.docx?v=20261021-pv' : '';
  });

})();
