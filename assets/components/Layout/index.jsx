import React, { useState } from 'react';
import { Spin } from 'antd';
import ZMap from '../Map';

import './index.less';

const Layout = props => {
  const [platformLoading, setPlatformLoading] = useState(true);
  const { children } = props;

  return (
    <div className="main-content">
      <ZMap
        key="ZMap"
        onLoaded={() => {
          setPlatformLoading(false);
        }}
      />
      {platformLoading ? (
        <Spin
          id="main-content-spinning"
          tip="系统初始化..."
          spinning={platformLoading}
        />
      ) : (
        children
      )}
    </div>
  );
};

export default Layout;
