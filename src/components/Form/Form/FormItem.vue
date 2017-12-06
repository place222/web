<template>
  <div class="form_item">
      <label class="form_label">{{label}}</label>
      <div class="form_content">
        <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    direction: {}
  }
};
</script>


<style lang="less" scoped>
.form_item {
  margin-bottom: 20px;
  line-height: 35px;
  height: 35px;
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
  display: inline-block;
  padding: 0 15px;

}
</style>


