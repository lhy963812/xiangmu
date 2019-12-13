// main.js是vue程序的根实例，负责将根组件渲染到挂载点
import Vue from "vue";  // 导入vue
import App from "./App.vue";     // 导入根组件
import router from "./router";
import http from "./util/http.js";
import Cookies from "js-cookie";
import "./assets/reset.css";            // 导入全局样式
import VueAwesomeSwiper from "vue-awesome-swiper";
import 'swiper/dist/css/swiper.css';

// 扩展vue.prototype让所有组件都可以享受到扩展的属性
// 扩展一般都是在根实例里面扩展
Vue.prototype.$http = http;
Vue.prototype.$cookies = Cookies;
Vue.use(VueAwesomeSwiper);

let vm = new Vue({
        render: h => h(App),
        router
});
// runtime版的vue根实例的挂载方式
vm.$mount("#app");