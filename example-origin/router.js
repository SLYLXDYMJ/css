import Vue from 'vue';
import Router from 'vue-router';

import Index from './views/index';
import Reset from './views/reset';
import Utils from './views/utils';
import Layout from './views/layout';
import Component from './views/component';

Vue.use(Router);

export default new Router({
  routes: [
    // index
    {
      path: '/index',
      name: Index.name,
      component: Index
    },
    // reset
    {
      path: '/reset',
      name: Reset.name,
      component: Reset
    },
    // utils
    {
      path: '/utils',
      name: Utils.name,
      component: Utils
    },
    // layout
    {
      path: '/layout',
      name: Layout.name,
      component: Layout
    },
    // component
    {
      path: '/component',
      name: Component.name,
      component: Component
    },
    // 404
    {
      path: '*',
      redirect: { name: Index.name }
    }
  ]
});
