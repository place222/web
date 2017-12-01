<template>
  <div class="container">
    <h2>Radio单选框</h2>
    <p>在一组备选项中进行单选</p>
    <div class="stand_radio">
      <Radio v-model="picked" :value="'123'">可以</Radio>
      <Radio v-model="picked" :value="'1223'">不可以</Radio>
    </div>
    <div class="stand_radio">
      <Radio v-model="radio2" :value="false">可以</Radio>
      <Radio v-model="radio2" :value="true">不可以</Radio>
    </div>
    <p>禁用状态</p>
    <p>分组</p>
    <p>按钮样式</p>
  </div>
</template>

<script>
import Radio from "@/components/Form/Radio";

export default {
  methods: {},
  data() {
    return {
      picked: '123',
      radio2:false
    };
  },
  components: {
    Radio
  },
  watch: {
    picked: function(val, oldVal) {
      console.log(this.picked);
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding:50px;
}
.stand_radio {
  margin-top: 10px;
  padding: 50px 10px;
  border: 1px solid #eee;
}
</style>
