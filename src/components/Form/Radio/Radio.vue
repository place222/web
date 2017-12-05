<template>
  <label class="radio" :class="[
    {'is-disabled':disabled},
    {'is-checked':isChecked}
  ]">
    <span class="radio_circular" :class="isChecked?'checked':''" >
      <input type="radio" 
            :name="name"
            :value="value"
            v-model="model" 
            :disabled="disabled" 
            @change="handleChange" 
            />
    </span>
    <span class="radio_text"><slot></slot></span>
  </label>
</template>
<script>
export default {
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
  computed: {
    isChecked: function() {
      return this.checked || this.value === this.data; //用checked和value等于外部的值来判断是否选中
    },
    model: {
      get() {
        return this.data; //重定义返回外部的值
      },
      set(val) {
        this.$emit("change", this.value); //修改外部的值
      }
    }
  },
  methods: {
    handleChange(event) {
      this.$nextTick(() => {
        //nexttick是让外侧组件已经update完数据再触发
        console.log("change"); //这里留着做控件暴露的change事件来扩张执行
      });
    }
  }
};
</script>

