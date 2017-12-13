<template>
  <div class="container">
    <Select v-model="selectValue">
      <Option value="1">呵呵1</Option>
      <Option value="2">呵呵2</Option>
      <Option value="3">呵呵3</Option>
    </Select>
    <p>{{selectValue}}</p>
  </div>
</template>


<script>
import Select from "@/components/Form/Select/Select";
import Option from "@/components/Form/Select/Option"
export default {
  components: {
    Select,
    Option
  },
  data(){
    return {
      selectValue:''
    }
  }
};
</script>


<style lang="less" scoped>
.container {
  padding: 20px;
}
</style>
