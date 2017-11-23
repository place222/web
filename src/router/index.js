import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import dropDown from '@/pages/content/dropDown'
import alert from '@/pages/content/alert'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    redirect: to => {
      return '/alert/index'
    },
    component: Index
  }, {
    path: '/dropdown',
    name: 'DropDown',
    component: Index,
    children: [{
      path: 'index',
      name: 'main',
      component: dropDown
    }]
  }, {
    path: '/alert',
    name: 'Alert',
    component: Index,
    children: [{
      path: 'index',
      name: 'main',
      component: alert
    }]
  }]
})
