import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import axios from "axios";
import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log
import { Message } from 'element-ui'
import {
 // Icon,
  PullRefresh,
  List,
  Dialog,
  Col,
  Row,
  Card,
  Progress,
  Panel,
  //button,
   Collapse,
  CollapseItem,
  ActionSheet,
  Field,
  Toast,
} from "vant";

Vue.use(store);
Vue.use(Message);
//Vue.use(Icon);
Vue.use(PullRefresh);
Vue.use(List);
Vue.use(Dialog);
Vue.use(Col);
Vue.use(Row);
Vue.use(Card);
Vue.use(Progress);
Vue.use(Panel);
//Vue.use(button);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(ActionSheet);
Vue.use(Field);
Vue.use(Toast);
import util from './assets/js/util.js'
import * as filters from './filters' // global filters

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
axios.defaults.onUploadProgress = false;
Vue.config.productionTip = false
Vue.prototype.util = util
Vue.prototype.axios = axios;
Vue.prototype.toast = Toast;
Vue.prototype.message = Message;
Vue.prototype.store = store;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
