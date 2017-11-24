<template>
  <div>
    <layout-row class="row">
      <layout-col :span="12">
        <input type="radio">呵呵
      </layout-col>
      <layout-col :span="12">
        <radio-box>444</radio-box>
      </layout-col>
    </layout-row>
    <layout-row class="row">
      <layout-col :span="12">
        <input type="checkbox">呵呵
      </layout-col>
      <layout-col :span="12">

      </layout-col>
    </layout-row>
    <layout-row class="row">
      <layout-col :span="12">
        <input type="text">
      </layout-col>
      <layout-col :span="12">

      </layout-col>
    </layout-row>
    <layout-row class="row">
      <layout-col :span="12">
        <select name="" id="">
          <option value="">选择1</option>
          <option value="">选择2</option>
          <option value="">选择3</option>
          <option value="">选择4</option>
        </select>
      </layout-col>
      <layout-col :span="12">

      </layout-col>
    </layout-row>
    <layout-row class="row">
      <layout-col :span="12">
        <select name="" id="" multiple>
          <option value="">选择1</option>
          <option value="">选择2</option>
          <option value="">选择3</option>
          <option value="">选择4</option>
        </select>
      </layout-col>
      <layout-col :span="12">

      </layout-col>
    </layout-row>
  </div>
</template>


<script>
import LayoutRow from "@/components/layout/LayoutRow";
import LayoutCol from "@/components/layout/LayoutCol";
import CheckBox from "@/components/form/CheckBox";
import RadioBox from "@/components/form/RadioBox";
export default {
  components: {
    LayoutRow,
    LayoutCol,
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
