<template>
  <div class="container">
    <h2>Radio单选框</h2>
    <p>在一组备选项中进行单选</p>
    <div class="stand_radio">
      <Radio v-model="model1" value="123">可以</Radio>
      <Radio v-model="model1" value="1223">不可以</Radio>
    </div>
    <div class="stand_radio">
      <Radio v-model="model2" :value="false">可以</Radio>
      <Radio v-model="model2" :value="true">不可以</Radio>
    </div>
    <p>禁用状态</p>
    <div class="stand_radio">
      <Radio v-model="model3" :value="'123'" disabled>可以</Radio>
      <Radio v-model="model3" :value="'1223'" disabled>不可以</Radio>
    </div>
    <p>分组</p>
    <div class="stand_radio">
      <RadioGroup  v-model="model4">
        <Radio value="123">可以</Radio>
        <Radio value="1223">不可以</Radio>
      </RadioGroup>
    </div>
    <p>按钮样式</p>
  </div>
</template>

<script>
import Radio from "@/components/Form/Radio/Radio";
import RadioGroup from "@/components/Form/Radio/RadioGroup";

export default {
  data() {
    return {
      model1: null,
      model2: null,
      model3: null,
      model4: null
    };
  },
  components: {
    Radio,
    RadioGroup
  },
  watch: {
    model1: function(val, oldVal) {
      console.log(this.model1);
    },
    model2: function(val, oldVal) {
      console.log(this.model2);
    },
    model4: function(val, oldVal) {
      console.log(`${val}-${oldVal}`);
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
