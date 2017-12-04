<template>
  <div class="container">
    <Select>
      <Option value="1">呵呵1</Option>
      <Option value="2">呵呵2</Option>
      <Option value="3">呵呵3</Option>
    </Select>
  </div>
</template>


<script>
import Select from "@/components/Form/Select/Select";
import Option from "@/components/Form/Select/Option"
export default {
  components: {
    Select,
    Option
  }
};
</script>


<style lang="less" scoped>
.container {
  padding: 20px;
}
</style>
