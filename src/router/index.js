import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'

import dropDown from '@/pages/nav/dropDown'
import Menu from '@/pages/nav/Menu'

import alert from '@/pages/notice/alert'
import message from '@/pages/notice/message'

import Grid from '@/pages/layout/Grid'

import form from '@/pages/form/form'

import Container from '@/pages/container/Container'

import Button from '@/pages/content/Button'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    redirect: to => {
      return '/grid/index'
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
    path: '/container',
    name: 'Container',
    component: Index,
    children: [{
      path: 'index',
      name: 'main',
      component: Container
    }]
  }, {
    path: '/button',
    name: 'Button',
    component: Index,
    children: [{
      path: 'index',
      name: 'main',
      component: Button
    }]
  }, {
    path: '/menu',
    name: 'Menu',
    component: Index,
    children: [{
      path: 'index',
      name: 'main',
      component: Menu
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
