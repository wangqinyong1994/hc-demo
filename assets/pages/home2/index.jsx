import React from 'react';
import { Link } from 'react-router-dom';

import './index.less';

export default () => (
  <div className="home-container">
    我是home2
    <Link to="/home">点击跳转</Link>
  </div>
);
