/* eslint-disable */
module.exports = {
  debug: false,
  middleware: {
    webpack: {
      enable: false,
    },
    login: {
      enable: false,
    },
    aliyunLogin: {
      enable: false,
    },
    thirdPartyBind: {
      enable: false,
    },
    commonUserAuth: {
      config: {
        ssoTicketCheckUrl: 'http://33.83.61.75:8777/user/ticketCheck',
      },
    },
  },
  extension: {
    redirect: {
      config: {
        allowDomains: [],
      },
    },
  },
  services: {},
};
