<template>
  <div>
      <label>{{label}}</label>
      <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    label:String,
    direction:{

    }
  }
}
</script>

