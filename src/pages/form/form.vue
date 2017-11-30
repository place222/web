<template>
  <div>
    <grid-row class="row">
      <grid-col :span="12">
        <input type="radio">呵呵
      </grid-col>
      <grid-col :span="12">
        <radio-box>444</radio-box>
      </grid-col>
    </grid-row>
    <grid-row class="row">
      <grid-col :span="12">
        <input type="checkbox">呵呵
      </grid-col>
      <grid-col :span="12">

      </grid-col>
    </grid-row>
    <grid-row class="row">
      <grid-col :span="12">
        <input type="text">
      </grid-col>
      <grid-col :span="12">

      </grid-col>
    </grid-row>
    <grid-row class="row">
      <grid-col :span="12">
        <select name="" id="">
          <option value="">选择1</option>
          <option value="">选择2</option>
          <option value="">选择3</option>
          <option value="">选择4</option>
        </select>
      </grid-col>
      <grid-col :span="12">

      </grid-col>
    </grid-row>
    <grid-row class="row">
      <grid-col :span="12">
        <select name="" id="" multiple>
          <option value="">选择1</option>
          <option value="">选择2</option>
          <option value="">选择3</option>
          <option value="">选择4</option>
        </select>
      </grid-col>
      <grid-col :span="12">

      </grid-col>
    </grid-row>
  </div>
</template>


<script>
import GridRow from "@/components/Grid/GridRow";
import GridCol from "@/components/Grid/Gridcol";
import CheckBox from "@/components/form/CheckBox";
import RadioBox from "@/components/form/RadioBox";
export default {
  components: {
    GridRow,
    GridCol,
    CheckBox,
    RadioBox
  }
};
</script>


<style lang="less" scoped>
.row {
  padding: 20px;
}
</style>
