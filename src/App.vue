<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    $("body").addClass("hold-transition skin-blue sidebar-mini");
  }
};
</script>

<style lang="less">
@import "less/less/AdminLTE.less";
</style>

