<template>
  <ul class="dropdown-menu">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  components: {},
  inject: ["dropdown"] //父组件的注入
};
</script>

