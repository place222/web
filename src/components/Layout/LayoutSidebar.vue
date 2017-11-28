<template>
  <div :style="{width}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    width:{
      type:String,
      default:'230px'
    }
  }
};
</script>

<style lang="less" scoped>

</style>

