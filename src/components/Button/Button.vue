<template>
  <button class="btn" :class="[`btn-${this.type}`,disabled?'btn-disabled':'']" @click.stop="handleClick">
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
  },
  methods:{
    handleClick:function(){
      this.$emit('click');
    }
  }
};
</script>

