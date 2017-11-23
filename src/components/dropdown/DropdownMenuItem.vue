<template>
  <li
    :class="[isTitle?'dropdown-header':'',isSeparator?'divider':'',disabled?'disabled':'']"
    @click.stop="handleClick">
    <slot></slot>
  </li>
</template>

<script>
import emitter from "@/mixins/emitter";
export default {
  mixins: [emitter],
  props: {
    isTitle: {
      type: Boolean,
      default: false
    },
    isSeparator: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    command: {
      type: String,
      default: ""
    }
  },
  mounted: function() {},
  methods: {
    handleClick: function(event) {
      if (this.disabled || this.isSeparator || this.isTitle) return;
      this.dispatch("DropDown", "dropdown-item-click", this.command);
    }
  }
};
</script>

