<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
import "@/assets/css/font-awesome.css"
//注册组件
export default {
  name: "app"
};
</script>

<style lang="less">
@import "less/normalize.less";
@import "less/variables.less";
@import "less/base.less";

</style>

