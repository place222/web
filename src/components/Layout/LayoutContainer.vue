<template>
  <div class="layout_container" :class="hasSidebar?'layout_container_sidebar':''">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    hasSidebar: {
      type: Boolean,
      default: false
    }
  },
  mounted:function(){
    console.log(this.hasSidebar)
  }
};
</script>


<style lang="less" scoped>
.layout_container {
  display: flex;
  flex: 1;
  flex-direction: column;

}
.layout_container_sidebar {
  flex-direction: row;
}
</style>


