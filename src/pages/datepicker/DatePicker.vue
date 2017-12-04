<template>
  <div class="container">
    <h1>DatePicker</h1>
    <DatePicker></DatePicker>
  </div>
</template>

<script>
import DatePicker from "@/components/Form/DateTime/DatePicker.vue";

export default {
  components: {
    DatePicker
  }
};
</script>

<style lang="less" scoped>
.container{
  padding: 50px;
}
</style>
