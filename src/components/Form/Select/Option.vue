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
      this.dispatch('Select','select-item',{text:this.$slots.default[0].text,value:this.value});
    }
  }
};
</script>
