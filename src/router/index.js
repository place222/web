import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'

import dropDown from '@/pages/nav/dropDown'
import Menu from '@/pages/nav/Menu'

import alert from '@/pages/notice/alert'
import message from '@/pages/notice/message'

import Grid from '@/pages/layout/Grid'

import form from '@/pages/form/form'
import Checkbox from '@/pages/form/Checkbox'
import Radio from '@/pages/form/Radio'
import Select from '@/pages/form/Select'
import Input from '@/pages/form/Input'
import Switch from '@/pages/form/Switch'

import DatePicker from '@/pages/datepicker/DatePicker'
import DateTimePicker from '@/pages/datepicker/DateTimePicker'
import TimePicker from '@/pages/datepicker/TimePicker'

import Container from '@/pages/container/Container'

import Button from '@/pages/content/Button'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    redirect: to => {
      return '/layout/grid'
    },
    component: Index
  }, {
    path: '/layout',
    name: '布局',
    component: Index,
    children: [{
      path: 'grid',
      component: Grid
    }]
  }, {
    path: '/container',
    name: '容器',
    component: Index,
    children: [{
      path: 'container',
      component: Container
    }]
  }, {
    path: '/content',
    component: Index,
    children: [{
      path: 'button',
      component: Button
    }]
  }, {
    path: '/form',
    name: '表单',
    component: Index,
    children: [{
      path: 'radio',
      component: Radio
    }, {
      path: 'checkbox',
      component: Checkbox
    }, {
      path: 'input',
      component: Input
    }, {
      path: 'select',
      component: Select
    }, {
      path: 'switch',
      component: Switch
    }, {
      path: 'form',
      component: form
    }]
  }, {
    path: '/datepicker',
    component: Index,
    children: [{
      path: 'datepicker',
      component: DatePicker
    }, {
      path: 'datetimepicker',
      component: DateTimePicker
    }, {
      path: 'timepicker',
      component: TimePicker
    }]
  }, {
    path: '/nav',
    component: Index,
    children: [{
      path: 'dropdown',
      component: dropDown
    }, {
      path: 'menu',
      component: Menu
    }]
  }, {
    path: '/notice',
    component: Index,
    children: [{
      path: 'alert',
      component: alert
    }, {
      path: 'message',
      component: message
    }]
  }, {
    path: '/other',
    component: Index
  }]
})
