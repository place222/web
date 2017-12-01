<template>
  <input type="radio">
</template>
<script>
export default {
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    checked: Boolean,
    value: String
  },
  watch:{
    checked:function(){
      console.log('checked 改变了')
    }
  }
};
</script>
