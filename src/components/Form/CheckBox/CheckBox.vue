<template>
    <label class="checkbox" :class="[
      {'check':isCheck},
      {'is-disabled':disabled}
    ]" >
      <span class="checkbox_check">
        <input type="checkbox"
              v-if="trueValue||falseValue"
              :value="value"
              :name="name"
              v-model="model"
              :disabled="disabled"
              >
        <input type="checkbox"
              v-else
              :value="value"
              :name="name"
              v-model="model"
              :disabled="disabled"
              >
      </span>
      <span class="checkbox_text"><slot></slot></span>
    </label>
</template>

<script>
import Emitter from "../../../mixins/emitter";

export default {
  componentName: "CheckBox",
  mixins: [Emitter],
  model: {
    prop: "data"
  },
  computed: {
    model: {
      get() {
        return this.data;
      },
      set(val) {
        if (this.isGroup) {
          this.dispatch("CheckBoxGroup", "checkbox-change", this.value);
        } else {
          this.$emit("input", val);
        }
      }
    },
    isGroup: function() {
      return this.$parent.$options.componentName === "CheckBoxGroup";
    },
    isCheck: function() {
      if (this.isGroup) {
        return this.$parent.$props.value.indexOf(this.value) != -1;
      } else {
        if (Array.isArray(this.model)) {
          return this.model.indexOf(this.value) != -1;
        } else {
          return this.model;
        }
      }
    }
  },
  props: {
    data: {}, //外部闯入的绑定值,如果这个绑定的是非array对象的时候会是true,false,否则会是个数组
    value: [String, Boolean, Number], //这个是当前checkbox 的值，如果是未定义或者空，会是true false,可以指定true-value和false-value,如果没有那么需要用数组来看待
    trueValue: [String, Boolean, Number],
    falseValue: [String, Boolean, Number],
    name: String,
    disabled: Boolean
  }
};
</script>

