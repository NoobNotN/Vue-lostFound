import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// axios.defaults.baseURL = '/Vue-LostFound/php';
axios.defaults.baseURL = 'http://localhost:8080/lostfound/php/';
Vue.prototype.axios = axios;
// 加入token头
// Vue.config.productionTip = false;
// axios.interceptors.request.use(
//     config=>{
//       if(localStorage.getItem('Token')){
//         config.headers.token = localStorage.getItem('token');
//       }
//       return config;
//   },
//   error => {
//       return Promise.reject(error);
//   }
// );
// axios.interceptors.response.use(
//     response => {
//       return response;
//     },
//     error => {
//       if (error.response) {
//         switch (error.response.status) {
//           case 401:
//             this.$store.commit("delToken");
//             router.replace({
//               path: "/loginPage",
//               query: { redirect: router.currentRoute.fullPath } //登录成功后跳入浏览的当前页面
//             });
//         }
//       }
//       return Promise.reject(error.response.data);}
//     );

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

