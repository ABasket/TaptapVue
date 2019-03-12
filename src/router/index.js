import Vue from 'vue'
import Router from 'vue-router'
import Home from './../pages/Home/Home.vue'
import Follow from './../pages/Follow/Follow.vue'
import Add from './../pages/Add/Add.vue'
import Notice from './../pages/Notice/Notice.vue'
import Me from './../pages/Me/Me.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/follow',
      name: 'home',
      component: Follow
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/notice',
      name: 'notice',
      component: Notice
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
  ]
})
