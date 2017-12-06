<template>
  <div class="container">
    <h2>checkbox复选框</h2>
    <p>在一组备选项中进行复选</p>
    <div class="stand_radio">
      <CheckBox v-model="checks" value="first">1</CheckBox>
      <CheckBox v-model="checks" value="second">2</CheckBox>
      <CheckBox v-model="checks" value="third">3</CheckBox>
    </div>
    <p>禁用状态</p>
    <div class="stand_radio">
      <CheckBox v-model="checks" value="first" disabled>1</CheckBox>
      <CheckBox v-model="checks" value="second" disabled>2</CheckBox>
      <CheckBox v-model="checks" value="third" disabled>3</CheckBox>
    </div>
    <p>分组</p>
    <div class="stand_radio">
      <CheckBoxGroup>
        <CheckBox v-model="checks" value="first">1</CheckBox>
        <CheckBox v-model="checks" value="second">2</CheckBox>
        <CheckBox v-model="checks" value="third">3</CheckBox>
      </CheckBoxGroup>
    </div>
  </div>
</template>
<script>
import CheckBox from "@/components/Form/CheckBox/CheckBox";
import CheckBoxGroup from '@/components/Form/CheckBox/CheckBoxGroup';
export default {
  components: {
    CheckBox,
    CheckBoxGroup
  },
  data() {
    return {
      checks: []
    };
  },
  watch: {
    checks: function(val, oldVal) {
      console.log(`${val} - ${oldVal}`);
    }
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

