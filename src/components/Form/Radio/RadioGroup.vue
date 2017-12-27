<template>
  <div :class="[
    'form-radio-group',
    {'form-radio-group-vertical':vertical},
    {'form-radio-group-button':type === 'button'}
    ]">
      <slot></slot>
  </div>
</template>

<script>
export default {
  componentName: "RadioGroup",
  props: {
    value: {},
    type: [String],
    vertical: Boolean
  },
  methods: {
    radioChange: function(val) {
      this.$emit("input", val);
    }
  },
  mounted: function() {
    this.$on("radio-change", this.radioChange);
  }
};
</script>
