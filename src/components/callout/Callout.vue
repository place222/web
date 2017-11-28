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
