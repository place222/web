<template>
  <div class="container">
    <Input></Input>
  </div>
</template>

<script>
import Input from "@/components/Form/Input";
export default {
  components: {
    Input
  },
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    checked: Boolean,
    value: String
  }
};
</script>


<style lang="less" scoped>
.container {
  padding: 20px;
}
</style>
