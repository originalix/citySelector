// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue';
import Vuex from 'vuex';

import city from './modules/switchCity';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    city
  }
});
