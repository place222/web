<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:"ButtonGroup"
};
</script>

<style lang="less" scoped>
.button-group {
  font-size: 0;
  .btn:not(:first-child):not(:last-child){
    border-radius: 0;
    border-left: 0;
  }
  .btn:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .btn:last-child {
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

}
</style>
