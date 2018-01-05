<template>
  <li class="option"
      :class="[{'selected':isSelected},{'disabled':disabled}]"
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
    value: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isSelected: false
    };
  },
  mounted() {
    this.$on("select.afterSelectItem", this.afterSelectItem);
  },
  methods: {
    afterSelectItem(val) {
      if (this.isSelected && val.value !== this.value) {
        this.isSelected = false;
      }
    },
    handleClick: function() {
      if (this.disabled) return;
      const select = {
        text: this.$slots.default[0].text,
        value: this.value
      };
      if (this.isSelected) {
        this.isSelected = false;
        this.dispatch("Select", "select.unSelectedItem", select);
      } else {
        this.isSelected = true;
        this.dispatch("Select", "select.selectedItem", select);
      }
    }
  }
};
</script>
