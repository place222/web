<template>
  <li class="menu_item" @click="handleItemClick">
    <a href="#">
      <i class="fa fa-archive"></i>
      <span><slot></slot></span>
    </a>
  </li>
</template>

<script>
export default {
  methods: {
    handleItemClick: function() {
      this.$emit("menu-item-click");
    }
  }
};
</script>


<style lang="less" scoped>
.menu_item {
  & a {
    padding: 10px 12px;
    display: block;
    color: #eee;
  }
  & a:hover {
    background-color: lighten(#222d32, 10%);
  }
  & i + span {
    margin-left: 5px;
  }
}
</style>
