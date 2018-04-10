// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import router from "./router"; //引入router
import axios from 'axios'; // 引入axios
import VueAxios from 'vue-axios';

import "./assets/css/style.css"; 
import 'element-ui/lib/theme-default/index.css'; // 引入element
import ElementUI from "element-ui"; 

import App from "./App"; // 引入根组件app

import "@js/mock/data";

Vue.use(ElementUI);
Vue.use(VueAxios, axios)

Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {
//   window.scrollTo(0, 0);
//   next();
// });
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
