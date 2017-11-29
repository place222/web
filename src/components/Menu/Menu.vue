<template>
  <ul class="menu">
    <slot></slot>
  </ul>
</template>

<script>
export default {};
</script>


<style lang="less" scoped>
//vue scoped只能支持但层次的嵌套样式
.menu {
  background-color: #222d32;
}
</style>
