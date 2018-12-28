import Vue from 'vue';
import Router from 'vue-router';

import Index from './views/index';
import Normal from './views/normal';
import Responsive from './views/responsive';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/index',
      name: Index.name,
      component: Index
    },
    {
      path: '/normal',
      name: Normal.name,
      component: Normal
    },
    {
      path: '/responsive',
      name: Responsive.name,
      component: Responsive
    },
    {
      path: '*',
      redirect: { name: Index.name }
    }
  ]
});
