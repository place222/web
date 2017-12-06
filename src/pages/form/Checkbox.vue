<template>
  <div class="container">
    <h2>checkbox复选框</h2>
    <p>在一组备选项中进行复选</p>
    <div class="stand_radio">
      <CheckBox v-model="checks" value="first">1</CheckBox>
      <CheckBox v-model="checks" value="second">2</CheckBox>
      <CheckBox v-model="checks" value="third">3</CheckBox>
    </div>
  </div>
</template>
<script>
import CheckBox from "@/components/Form/CheckBox/CheckBox";
export default {
  components: {
    CheckBox
  },
  data() {
    return {
      checks: ["first", "second"]
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

