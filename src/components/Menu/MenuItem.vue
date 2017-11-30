<template>
  <li class="menu_item" @click="handleItemClick">
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <template v-else>
      <a href="#">
        <i class="fa" :class="icon?`fa-${icon}`:''"></i>
        <span>{{title}}</span>
      </a>
    </template>
  </li>
</template>

<script>
export default {
  props: {
    title: String,
    commmand: {
      type: String
    },
    icon: {
      type: String,
      default: "address-book"
    }
  },
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
