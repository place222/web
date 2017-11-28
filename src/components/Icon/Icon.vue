<template>
  <i :class="'icon_'+name"></i>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    }
  }
};
</script>

