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


<style lang="less" scoped>
@import "../../less/variables.less";

.btn {
  display: inline-block;
  margin-bottom: 0; //为了input.btn
  box-shadow: none; //去掉默认的阴影
  border: 1px solid transparent; //去掉浏览器默认的边框
  .button-size(@padding-base-vertical; @padding-base-horizontal; @font-size; @line-height; @btn-border-radius-base);
}
.btn-disabled{
  opacity: .65;
  cursor:not-allowed;
}
.btn-default {
  .button-variant(@btn-default-color; @btn-default-bg; @btn-default-border);
}
.btn-primary {
  .button-variant(@btn-primary-color; @btn-primary-bg; @btn-primary-border);
}
// Success appears as green
.btn-success {
  .button-variant(@btn-success-color; @btn-success-bg; @btn-success-border);
}
// Info appears as blue-green
.btn-info {
  .button-variant(@btn-info-color; @btn-info-bg; @btn-info-border);
}
// Warning appears as orange
.btn-warning {
  .button-variant(@btn-warning-color; @btn-warning-bg; @btn-warning-border);
}
// Danger and error appear as red
.btn-danger {
  .button-variant(@btn-danger-color; @btn-danger-bg; @btn-danger-border);
}
</style>

