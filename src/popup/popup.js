import Vue from "vue";
import App from "./App";
import VueCookies from "vue-cookies";

import store from "../store";
import router from "./router";
import "view-design/dist/styles/iview.css";
import ViewUI from "view-design";

import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";
import TagsNav from "../components/TagsNav";
import request from "../lib/request";
Vue.component("icon", Icon);
Vue.component("tags-nav", TagsNav);
Vue.use(ViewUI);
Vue.use(VueCookies);
import config from "../config";
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config;
Vue.prototype.$http = request; // ajax请求方法
Vue.config.productionTip = false;
Vue.prototype.$cookie = VueCookies;
/* eslint-disable no-new */

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
  // watch: {
  //     "$route": 'checkLogin'
  // },
  // created() {
  //     this.checkLogin();
  // },
  // methods: {
  //     checkLogin() {
  //         this.$router.push("/");
  //     }
  // }
});
