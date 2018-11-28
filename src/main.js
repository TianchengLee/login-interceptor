import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import './styles/common.less'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
