import React, { useCallback, useMemo } from 'react';
import { Switch, Route, Router, Prompt } from 'react-router-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import enUS from 'antd/lib/locale-provider/en_US';
import { ConfigProvider, Spin } from 'antd';
import Layout from '@components/Layout';

import history from './history';

export default () => {
  const routeChangeHandler = useCallback(location => {
    console.log('location: ', location);
  }, []);

  const getCookie = useCallback(name => {
    let arr;
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    if (arr && arr === document.cookie.match(reg)) return unescape(arr[2]);
    return null;
  }, []);

  const returnLanguage = useMemo(() => {
    if (getCookie('et_lang')) {
      return getCookie('et_lang');
    }
    if (navigator.languages[0] === 'en') {
      return 'en-us';
    }
    if (navigator.languages[0] === 'zh-CN') {
      return 'zh-cn';
    }
    return 'zh-cn';
  }, [navigator]);

  const PageHome = React.lazy(() => import('../pages/home'));
  const Home = props => (
    <React.Suspense fallback={<Spin />}>
      <PageHome {...props} />
    </React.Suspense>
  );

  const PageHome2 = React.lazy(() => import('../pages/home2'));
  const Home2 = props => (
    <React.Suspense fallback={<Spin />}>
      <PageHome2 {...props} />
    </React.Suspense>
  );

  return (
    <ConfigProvider locale={returnLanguage === 'zh-cn' ? zhCN : enUS}>
      <Router basename="/" history={history}>
        <Layout>
          <Prompt message={location => routeChangeHandler(location)} />
          <Switch>
            <Route exact component={Home} path="/"></Route>
            <Route exact component={Home} path="/home"></Route>
            <Route exact component={Home2} path="/home2"></Route>
          </Switch>
        </Layout>
      </Router>
    </ConfigProvider>
  );
};
