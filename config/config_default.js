const path = require('path');
const pJson = require('../package.json');

module.exports = {

  /* honeybee config occupied */
  dumpConfig: true,
  root: undefined,
  serverRoot: undefined,
  serverEnv: undefined,

  /* honeybee config end  */
  debug: true,
  isDev: true,
  prefix: `/${pJson.name}`,
  staticPath: undefined,
  logs: {
    sys: {
      level: 'INFO',
    },
  },
  middleware: {
    cookieSession: {
      config: {
        name: 'permissions_session',
        secret: 'defalutSecret!PLEASE!REPLACE!',
      },
    },
    public: {
      enable: true,
      router: '/static',
      extends: 'static',
      config: {
        root: path.join(__dirname, '../static'),
      },
    },
    webpack: {
      enable: true,
      module: 'honeypack',
      router: '/assets',
    },
    commonUserAuth: {
      enable: false,
      module: 'hc-common-user-auth',
      config: {
        logUrl: 'http://10.45.32.240:8001/portal-system/',
        cookieName: 'commonUser',
        ssoTicketCheckUrl:
          'http://10.45.32.240:8899/api/authenticationMgr/NoSecurityController/checkToken',
        ignore: ['/login'],
        baseUrl: 'portal-system',
        logoutUrl: 'http://15.75.0.65:8080/cas/logout', // path to logout(del req.session.user) default `/logout`
      },
    },

    thirdPartyBind: {
      enable: false,
      module: '../middleware/thirdPartyBind',
    },
    login: {
      enable: false,
      module: '../middleware/login',
    },
    aliyunLogin: {
      enable: false,
      module: '@ali/hc-aliyun-auth',
    },
    loginLocal: {
      enable: false,
      module: '../middleware/loginLocal',
    },
    spa: {
      enable: true,
      module: '../middleware/spa',
      config: {
        ignore: ['/api', '/assets'],
      },
    },
  },
  extension: {
    redirect: {
      config: {
        allowDomains: ['127.0.0.1:8001'],
      },
    },
  },
  services: {
    // 接口服务相关配置放于此,当接口层已允许跨域时，则无需配置代理
    // gisServerPrefix: 'http://10.45.70.121:8874'    // gisservice后台地址
    gisServerPrefix: 'http://112.47.60.183:9984', // gisservice后台地址
    serviceUrl: 'http://10.45.70.33:28099/', // video后端
    requestUrl: 'http://10.45.70.34:8384', // 接口请求地址
    websocketServiceUrl: 'ws://33.104.6.5:28099/dispatchManagement/',
  },
  mapServer: {
    // 地图相关配置放于此
    mapSet: {
      center: '29.8687,121.54291',
      zoom: 15,
      pitch: 60,
      maxZoom: 21,
    },
    baseLayerType: 'GAODETILELAYER', // 3d
    // 基础底图
    baseLayerUrl:
      // "https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}", //3d
      '/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}', // 3d
    // baseLayerUrl:'/ruyi/api/proxy/GAODEProxy/v3/tile?z={z}&x={x}&y={y}',
    // baseLayerPrefix: "http://10.45.7.11:6080", //3d服务跨域时可能用到
    baseLayerPrefix: 'https://map.geoq.cn', // 3d服务跨域时可能用到
    // 路况类型
    roadConditionLayerType: 'arcgistilelayer',
    // 路况图层URL
    roadConditionLayerUrl:
      'http://10.45.7.11:8080/geoserver/gwc/service/tms/1.0.0/cite%3Aadm_devcoper_bas_rdnet_linkid_info_d10@3857@pbf/{z}/{x}/{-y}.pbf',
  },
};
