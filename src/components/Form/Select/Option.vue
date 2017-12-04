<template>
  <li class="option" @click.stop="handleClick"><slot></slot></li>
</template>

<script>
import Emitter from '../../../mixins/emitter';

export default {
  mixins:[Emitter],
  props:{
    value:String
  },
  methods: {
    handleClick: function() {
      this.dispatch('Select','select-item',this.$slots.default[0].text);
    }
  }
};
</script>



<style lang="less" scoped>
.option {
  line-height: 34px;
  padding: 0 20px;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
    background-color: #f5f7fa;
  }
}
</style>
