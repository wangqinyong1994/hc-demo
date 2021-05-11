/*
 * @Author: ngwang
 * @Date: 2021-04-13 12:37:05
 * @LastEditors: ngwang
 * @LastEditTime: 2021-05-08 14:30:05
 */
import axios from 'axios';
import axiosCancel from 'axios-cancel';

axiosCancel(axios, {
  debug: false,
});

export const get = async (url, params = {}, headers) => {
  Object.keys(params).forEach(item => {
    params[item] = decodeURIComponent(params[item]);
  });

  try {
    const options = {
      method: 'get',
      url,
      noCache: true,
      params,
      timeout: 30000,
      headers,
    };

    options.requestId = url;
    const response = await axios(options);
    return response;
  } catch (err) {
    return {
      isError: true,
      statusCode: -10001,
      message: '接口异常',
      data: null,
    };
  }
};

export const post = async (url, params = {}) => {
  // 所有Post请求加上用户信息
  // params.user = window.userInfo;
  try {
    const response = await axios({
      url,
      method: 'post',
      data: params,
      requestId: url,
      timeout: 30000,
      headers: {
        'x-csrf-token': CSRF_TOKEN,
        'access-control-allow-origin': '*', // 这里的access-control-allow-origin可以用来解决跨域问题,
      },
    });
    return response;
  } catch (err) {
    return {
      isError: true,
      statusCode: -10001,
      message: '接口异常',
      data: null,
    };
  }
};

export default {
  get,
  post,
};
