<template>
  <div class="container">
    <Select v-model="selectValue">
      <Option value="1">呵呵1</Option>
      <Option value="2">呵呵2</Option>
      <Option value="3">呵呵3</Option>
    </Select>
    <p>{{selectValue}}</p>

  <Popper trigger="click" >
    <template>
      <button>点击我</button>
    </template>
  </Popper>
  </div>
</template>


<script>
import Select from "@/components/Form/Select/Select";
import Option from "@/components/Form/Select/Option";
import Popper from "@/components/Popper";
export default {
  components: {
    Select,
    Option,
    Popper
  },
  data() {
    return {
      selectValue: ""
    };
  }
};
</script>


<style lang="less" scoped>
.container {
  padding: 20px;
}
button {
  width: 400px;
}
</style>
