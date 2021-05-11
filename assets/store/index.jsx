import { configure } from 'mobx';
import UI from './UI';
import Map from './Map';

configure({ isolateGlobalState: true, enforceActions: 'always' });

export default {
  UI,
  Map,
};
