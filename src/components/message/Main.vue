<template>
  <div>
     {{message}}
  </div>
</template>


<script type="text/babel">
export default {
  data: function() {
    return {
      message: "123"
    };
  }
};
</script>


<style lang="less" scoped>
div {
  width: 200px;
  max-height: 50px;
  min-height: 30px;
  border: 1px solid red;
  position: absolute;
  z-index: 9999999;
  top: 200px;
  left: 50%;
  margin-left: -100px;
  transition: top 0.5s;
}
</style>
