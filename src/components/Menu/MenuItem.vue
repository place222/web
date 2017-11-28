<template>
  <li @click="handleItemClick">
    <slot></slot>
  </li>
</template>

<script>
export default {
  methods:{
    handleItemClick:function(){
      this.$emit('menu-item-click')
    }
  }
}
</script>


<style lang="less" scoped>
li {
  padding: 0;
  margin: 0;
}
</style>
