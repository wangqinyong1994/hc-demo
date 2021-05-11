import React, { useEffect, useRef } from 'react';
import { injectIntl } from 'react-intl';

import './index.less';

const ZMap = props => {
  const mapRef = useRef();

  const { onLoaded } = props;

  const initMainMap = () => {
    try {
      const { mapSet } = window.mapServer;
      let mapCenter = mapSet.center.split(',');
      mapCenter = mapCenter.length > 1 ? mapCenter : [0, 0];
      const mainMap = Z.zmap('mainmap', {
        viewMode: '2D',
        center: mapCenter,
        zoom: mapSet.zoom,
        pitch: mapSet.pitch,
        maxZoom: mapSet.maxZoom,
      });
      mainMap.setListen(true);
      mainMap.addBaseLayerByUrl(mapServer.baseLayerType, {
        url: mapServer.baseLayerPrefix + mapServer.baseLayerUrl,
        zIndex: 0,
      });
      window.mainMap = mainMap;
    } catch (e) {
      console.log('地图加载失败\n', e);
    }
  };

  useEffect(() => {
    initMainMap();
    onLoaded && onLoaded();
  }, []);

  return <div className="mainmapContainer" id="mainmap" ref={mapRef} />;
};

export default injectIntl(ZMap);
