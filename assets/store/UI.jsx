import { observable, action } from 'mobx';

class UI {
  // 菜单
  @observable menuId = '';

  // 设置当前选中菜单
  @action setMenu = menuId => {
    this.menuId = menuId;
  };

  // 通用的更新数据方法
  @action updateContent = (key, val) => {
    this[key] = val;
  };
}

const ui = new UI();

export default ui;
