import Vue from 'vue';
import App from './App.vue';
import router from './router';

// global css
import './assets/style/global.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
