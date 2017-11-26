<template>
  <div id="app">
    <!-- <router-view/> -->
    <div>
      123
    </div>
  </div>
</template>

<script>
//皮肤
import "@/assets/css/font-awesome.css"
import "@/assets/css/ionicons.css"
//启动注入jquery和bootstrap的支持
//逐步替换成vue组件
import $ from "jquery"
import "bootstrap/js/bootstrap.js"
import "adminlte/js/adminlte.js"
//注册组件
export default {
  name: "app",
  created() {
    $("body").addClass("hold-transition skin-blue sidebar-mini");
  }
};
</script>

<style lang="less">
//bootstrap
// @import (reference) "less/bootstrap-less/mixins.less"; //bootstrap的混合函数
// @import (reference) "less/bootstrap-less/variables.less"; //bootstrap的变量
//adminlte
// @import "less/new_less/variables.less"; //变量
// @import "less/new_less/mixins.less"; //混合函数
//bootstrap
@import "less/new_less/normalize.less"; //bootstrap 元素的初始化样式表
// @import "less/new_less/scaffolding.less"; //bootstrap 初始化元素的盒模型
// @import "less/new_less/type.less"; //bootstrap 排版
// @import "less/new_less/buttons.less"; //bootstrap adminlte 按钮
// @import "less/new_less/forms.less";  //bootstrap 表单
// @import "less/new_less/dropdowns.less"; //bootstrap adminlte 下拉
// @import "less/new_less/input-groups.less";//bootstrap 按钮组
// @import "less/new_less/navs.less"; //bootstrap 导航
// @import "less/new_less/navbar.less";//bootstrap 导航条
// @import "less/new_less/breadcrumbs.less";//bootstrap 面包线
// @import "less/new_less/utilities.less"; //工具
// @import "less/new_less/responsive-utilities.less";
//adminlte
// @import "less/new_less/core.less"; //核心
// @import "less/new_less/header.less";
// @import "less/new_less/sidebar.less";
// @import "less/new_less/sidebar-mini.less";
// @import "less/new_less/control-sidebar.less";
// @import "less/new_less/skin-blue.less";
//程序公用的
</style>

