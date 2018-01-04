<template>
  <li class="option"
      :class="{'selected':isSelected}"
      @click.stop="handleClick">
    <div>
      <slot></slot>
      <span v-if="isSelected" style="float:right">选中了</span>
    </div>
  </li>
</template>

<script>
import Emitter from "../../../mixins/emitter";

export default {
  componentName: "Option",
  mixins: [Emitter],
  props: {
    value: String
  },
  data() {
    return {
      isSelected: false
    };
  },
  mounted() {
    this.$on("select.afterSelect", this.handleAfterSelect);
  },
  methods: {
    handleClick: function() {
      this.isSelected = !this.isSelected;
      this.dispatch("Select", "select.selectedItem", {
        text: this.$slots.default[0].text,
        value: this.value
      });
    },
    handleAfterSelect: function(val) {
      if (this.value !== val) {
        this.isSelected = false;
      }
    }
  }
};
</script>
