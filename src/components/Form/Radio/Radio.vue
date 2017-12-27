<template>
  <label class="form-radio" :class="[
    {'-disabled':disabled},
    {'-checked':isChecked}
  ]">
    <span class="circular">
      <input type="radio"
            ref="radio"
            :name="name"
            :value="value"
            v-model="model"
            :disabled="disabled"
            @change="handleChange"
            />
    </span>
    <span class="text"><slot></slot></span>
  </label>
</template>
<script>
import Emitter from "@/mixins/emitter";

export default {
  componentName: "Radio",
  mixins: [Emitter],
  model: {
    prop: "data", //重新定义了value的名字
    event: "change" //重新定义了input事件更新的名字
  },
  props: {
    value: {}, //这个是原生控件的value的值
    data: {}, //这个是记住那个外部的属性，然后用emit进行修改
    disabled: Boolean,
    checked: Boolean,
    name: String
  },
  mounted: function() {
    this.$nextTick(() => {
      //初始化检查下如果组没有进行绑定默认值的话 但是子元素上有checked特性的话自动更新下radiogroup上的v-model
      if (this.isGroup) {
        if (this.$parent.$props.value === null && this.checked) {
          this.dispatch("RadioGroup", "radio-change", this.value);
        }
      }
    });
  },
  computed: {
    isChecked: function() {
      if (this.isGroup) {
        return this.checked || this.value === this.$parent.$props.value;
      } else {
        return this.checked || this.value === this.data; //用checked和value等于外部的值来判断是否选中
      }
    },
    isGroup: function() {
      return this.$parent.$options.componentName === "RadioGroup";
    },
    model: {
      get() {
        if (this.isGroup) {
          return this.$parent.$props.value;
        } else {
          return this.data; //重定义返回外部的值
        }
      },
      set(val) {
        this.updateValue();
      }
    }
  },
  methods: {
    updateValue: function() {
      if (this.isGroup) {
        this.dispatch("RadioGroup", "radio-change", this.value);
      } else {
        this.$emit("change", this.value); //修改外部的值
      }
    },
    handleChange(event) {
      this.$nextTick(() => {
        //nexttick是让外侧组件已经update完数据再触发
        console.log("change"); //这里留着做控件暴露的change事件来扩张执行
      });
    }
  }
};
</script>

