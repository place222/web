<template>
  <button
  class="btn btn-default dropdown-toggle"
  type="button"
  @click="handleClick">
    <slot></slot>
    <span class="caret"></span>
  </button>
</template>


<script>
import emitter from "@/mixins/emitter";
export default {
  props: {},
  mixins: [emitter],
  methods: {
    handleClick: function() {
      this.dispatch("DropDown", "dropdown-toggle-click");
    }
  }
};
</script>

