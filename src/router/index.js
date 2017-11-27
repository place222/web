import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import dropDown from '@/pages/content/dropDown'
import alert from '@/pages/content/alert'
import message from '@/pages/content/message'
import Grid from '@/pages/content/Grid'
import form from '@/pages/content/form'
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
    path: '/grid',
    name: 'Grid',
    component: Index,
    children: [{
      path: 'index',
      name: 'main',
      component: Grid
    }]
  }, {
    path: '/form',
    name: 'Form',
    component: Index,
    children: [{
      path: 'index',
      name: 'main',
      component: form
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
  }, {
    path: '/message',
    name: 'Message',
    component: Index,
    children: [{
      path: 'index',
      name: 'main',
      component: message
    }]
  }]
})
