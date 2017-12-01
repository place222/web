<template>
  <div>
    <!-- 看看这里面的checked属性是怎么回事 -->
    <input type="radio" value="你好2" v-model="value"/>
    <input type="radio" value="你好1" v-model="value"/>
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


