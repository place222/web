<template>
  <div class="container">
    <CheckBox v-model="checks" value="first">1</CheckBox>
    <CheckBox v-model="checks" value="second">2</CheckBox>
    <CheckBox v-model="checks" value="third">3</CheckBox>
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
  padding: 20px;
}
</style>

