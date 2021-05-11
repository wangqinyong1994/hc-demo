/*
 * @Author: 樵风
 * @Date: 2019-11-03 22:22:06
 * @Content：这里放地图通用状态值，注意：非公用状态值可考虑放组件内部state中或父子参数传递
 */
import { observable, action } from 'mobx';

class Map {
  @observable mapCenter = '';

  // 设置当前选中菜单
  @action setMapCenter = mapCenter => {
    this.mapCenter = mapCenter;
  };
}

const map = new Map();

export default map;
