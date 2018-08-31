import Vue from 'vue';
import App from './App.vue';
import router from './components/Routes';

console.log('router', router);

new Vue({
  router,
  render: h => h(App),
}).$mount('#root');
