import Vue from 'vue';
import VueRouter from 'vue-router';

import Menu from './Menu.vue';
import Home from './Home.vue';
import MenuItemDetails from './MenuItemDetails.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/menu',
    component: Menu,
    props: true,
  },
  {
    path: '/menuItem/:id',
    component: MenuItemDetails,
    props: true,
  },
];


const router = new VueRouter({
  routes,
});

Vue.use(VueRouter);

export default router;
