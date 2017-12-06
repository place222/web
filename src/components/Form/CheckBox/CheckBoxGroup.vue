<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: "CheckBoxGroup",
  props: {
    value: {}
  },
  mounted: function() {
    this.$on("checkbox-change", function(val) {
      if (Array.isArray(this.value)) {
        if (this.value.indexOf(val) != -1) {
          this.value.splice(this.value.indexOf(val), 1);
        } else {
          this.value.push(val);
        }
      } else {
        this.value = val;
      }
      this.$emit("input", this.value);
    });
  }
};
</script>
