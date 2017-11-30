<template>
  <ul :style="{backgroundColor:backgroundColor||''}">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: "#222d32"
    }
  }
};
</script>

