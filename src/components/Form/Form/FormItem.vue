<template>
  <div class="form_item" @flur="handleFlur">
      <label class="form_label">{{label}}</label>
      <div class="form_content">
        <slot></slot>
      </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator';

export default {
  props: {
    label: String,
    direction: {}
  },
  methods:{
    handleFlur:function(){
      console.log('validate')
    }
  }
};
</script>


<style lang="less" scoped>
.form_item {
  margin-bottom: 20px;
  line-height: 35px;
}
.form_item::before,
.form_item::after {
  content: "";
  display: table;
}
.form_item::after {
  clear: both;
}
.form_label {
  box-sizing: border-box;
  float: left;
  text-align: right;//对齐可以动态控制
  width: 100px; //这里抽出去
}
.form_content {
  padding: 0 15px;
  margin-left: 100px;
}
</style>


