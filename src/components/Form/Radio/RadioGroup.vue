<template>
  <div>
      <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: "RadioGroup",
  props: {
    value: {}
  },
  methods: {
    radioChange: function(val) {
      this.$emit('input',val);
    }
  },
  mounted: function() {
    this.$on("radio-change", this.radioChange);
  }
};
</script>
