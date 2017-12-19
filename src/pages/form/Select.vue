<template>
  <div class="container">
    <Select v-model="selectValue">
      <Option value="1">呵呵1</Option>
      <Option value="2">呵呵2</Option>
      <Option value="3">呵呵3</Option>
      <Option value="4">呵呵3</Option>
      <Option value="5">呵呵3</Option>
      <Option value="6">呵呵3</Option>
      <Option value="7">呵呵3</Option>
      <Option value="8">呵呵3</Option>
      <Option value="9">呵呵3</Option>
      <Option value="0">呵呵3</Option>
      <Option value="10">呵呵3</Option>
      <Option value="11">呵呵3</Option>
      <Option value="12">呵呵3</Option>
      <Option value="13">呵呵3</Option>
    </Select>
    <p>{{selectValue}}</p>
  </div>
</template>


<script>
import Select from "@/components/Form/Select/Select";
import Option from "@/components/Form/Select/Option";
import Popper from '@/components/Popper'
export default {
  components: {
    Select,
    Option,
    Popper
  },
  data() {
    return {
      selectValue: "",
    };
  },
  methods:{
    hello(){

    }
  }
};
</script>


<style lang="less" scoped>
.uu{
  border: 1px solid #ccc;
  & > li{
    line-height: 30px;
  }
}

.container {
  padding: 20px;
}

.region {
  background: red;
}

</style>
