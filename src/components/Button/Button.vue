<template>
  <button class="btn" :class="[`btn-${this.type}`,disabled?'btn-disabled':'']">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

