<template>
  <li>
    <span class="menu_item_group_title">{{title}}</span>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>
<script>
export default {
  props: {
    title: String
  }
};
</script>

<style lang="less" scoped>
.menu_item_group_title {
  display: block;
}
</style>
