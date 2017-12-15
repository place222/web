<template>
  <input type="text"
    v-model="model"
    @change="handleChange"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur">
</template>
<script>
import Emitter from "../../mixins/emitter";
export default {
  mixins: [Emitter],
  props: {
    value: ""
  },
  data() {
    return {
      validate: false
    };
  },
  created: function() {
    this.validate = this.$parent.$options.componentName === "FormItem";
  },
  methods: {
    //输入事件 这有表单输入框的状态改变了才会触发
    handleInput: function() {
      console.log(`input 事件`);
    },
    //失去焦点如果有input才会触发change 这里适合进行自动校验
    handleChange: function(event) {
      console.log(`change 事件`);
      if (this.validate)
        this.dispatch("FormItem", "formitem.change", event.target.value);
    },
    //获取焦点
    handleFocus: function() {
      console.log(`focus 事件`);
    },
    //失去焦点
    handleBlur: function() {
      console.log(`blur 事件`);
    }
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  }
};
</script>


