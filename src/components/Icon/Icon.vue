
<template>
  <i :class="['fa','fa-'+name]"></i>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    size: {
      type: Number,
      default: 1
    }
  }
};
</script>

