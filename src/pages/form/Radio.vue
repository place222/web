<template>
  <div class="container">
    <h2>Radio单选框</h2>
    <p>在一组备选项中进行单选</p>
    <div class="stand_radio">
      <Radio v-model="picked" :label="12"></Radio>
      <Radio v-model="picked" :label="33"></Radio>
    </div>
  </div>
</template>

<script>
import Radio from "@/components/Form/Radio";

export default {
  methods: {},
  data() {
    return {
      picked: ""
    };
  },
  watch: {
    picked: function(val, oldVal) {
      console.log(`${val}-${oldVal}`);
    }
  },
  components: {
    Radio
  }
};
</script>


<style lang="less" scoped>
.container {
  padding: 50px;
}
.stand_radio {
  padding: 50px 0;
}
</style>
