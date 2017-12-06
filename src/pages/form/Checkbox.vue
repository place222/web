<template>
  <div class="container">
    <h2>checkbox复选框</h2>
    <p>在一组备选项中进行复选(这个是value有值的情况下)</p>
    <div class="stand_radio">
      <CheckBox v-model="model1" value="first">1</CheckBox>
      <CheckBox v-model="model1" value="second">2</CheckBox>
      <CheckBox v-model="model1" value="third">3</CheckBox>
      {{model1}}
    </div>
    <p>在一组备选项中进行复选(这个是没有value的情况下,只能作为单选true false存在)</p>
    <div class="stand_radio">
      <CheckBox v-model="model2" true-value="123" false-value="456">1</CheckBox>
      {{model2}}
    </div>
    <p>禁用状态</p>
    <div class="stand_radio">
      <CheckBox v-model="model3" value="first" disabled>1</CheckBox>
      <CheckBox v-model="model3" value="second" disabled>2</CheckBox>
      <CheckBox v-model="model3" value="third" disabled>3</CheckBox>
      {{model3}}
    </div>
    <p>分组</p>
    <div class="stand_radio">
      <CheckBoxGroup v-model="model4">
        <CheckBox value="first">1</CheckBox>
        <CheckBox value="second">2</CheckBox>
        <CheckBox value="third">3</CheckBox>
      </CheckBoxGroup>
      {{model4}}
    </div>
  </div>
</template>
<script>
import CheckBox from "@/components/Form/CheckBox/CheckBox";
import CheckBoxGroup from "@/components/Form/CheckBox/CheckBoxGroup";
export default {
  components: {
    CheckBox,
    CheckBoxGroup
  },
  data() {
    return {
      model1: [],
      model2: [],
      model3: [],
      model4: [],
      model5: []
    };
  }
};
</script>


<style lang="less" scoped>
.container {
  padding: 50px;
  & p {
    margin: 10px 0;
  }
}
.stand_radio {
  padding: 50px 10px;
  border: 1px solid #eee;
}
</style>

