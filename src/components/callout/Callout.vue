<template>
  <div class="callout" :class="levelClass">
    <h4>{{title}}</h4>
    <div v-if="$slots.default"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "callout",
  props: {
    title: {
      type: String,
      default: "标题"
    },
    // danger warning info success
    calloutLevel: {
      type: String,
      default: "success"
    }
  },
  computed: {
    levelClass: function() {
      return `callout-${this.calloutLevel}`;
    }
  }
};
</script>
<style lang="less">
@import "../../less/new_less/common.less";
/*
 * Component: Callout
 * ------------------
 */

// Base styles (regardless of theme)
.callout {
  .border-radius(3px);
  margin: 0 0 20px 0;
  padding: 15px 30px 15px 15px;
  border-left: 5px solid #eee;
  a {
    color: #fff;
    text-decoration: underline;
    &:hover {
      color: #eee;
    }
  }
  h4 {
    margin-top: 0;
    font-weight: 600;
  }
  p:last-child {
    margin-bottom: 0;
  }
  code,
  .highlight {
    background-color: #fff;
  }

  // Themes for different contexts
  &.callout-danger {
    &:extend(.bg-red);
    border-color: darken(@red, 10%);
  }
  &.callout-warning {
    &:extend(.bg-yellow);
    border-color: darken(@yellow, 10%);
  }
  &.callout-info {
    &:extend(.bg-aqua);
    border-color: darken(@aqua, 10%);
  }
  &.callout-success {
    &:extend(.bg-green);
    border-color: darken(@green, 10%);
  }
}
</style>
