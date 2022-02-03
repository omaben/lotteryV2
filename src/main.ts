import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import "@/assets/css/main.css"
import clipboard from 'clipboard';
import VueI18n from 'vue-i18n'
import { lang } from './locales/message';
import axios, { AxiosStatic } from 'axios';
import { api } from "./utils/api";
import http from "./lib/http-common";

Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.clipboard = clipboard;
Vue.use(VueI18n);

const messages = lang;

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: localStorage.getItem('currLang') ? localStorage.getItem('currLang') : 'zn' as any, // set locale `en` , `zn` or `ru`
  // locale: 'zn', // set locale `en` , `zn` or `ru`
  messages, // set locale messages
})

Vue.prototype.$api = api;
Vue.prototype.$http = http;
declare module 'vue/types/vue' {
  interface Vue {
    $http: AxiosStatic;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $api: any;
  }
}
/** demo start**/

// GameClassificationCoreService.Search(new GameClassificationSearchCoreMessage()).then(function (data) {
//   console.log(data)
// })

/** demo end **/
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
