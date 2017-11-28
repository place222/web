<template>
  <footer :style="{height}">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  props:{
    height:{
      type:String,
      default:"60px"
    }
  }
}
</script>
