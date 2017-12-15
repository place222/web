<template>
  <div class="select">
    <input ref="input" type="text" @focus="handleFocus" v-model="selectValue">
    <div class="arrow">
      <!--这个地方放置箭头-->
    </div>
    <ul ref="bubble" class="pop" v-show="show"><slot></slot></ul>
  </div>
</template>


<script>
import Popper from "popper.js";
let startClick;
export default {
  componentName: "Select",
  props:{
    value:''
  },
  data() {
    return {
      popper: null,
      show: false,
      selectValue: null
    };
  },
  mounted() {
    var _this = this;
    this.$on("select-item", this.selectItem);
    document.addEventListener('mousedown',function(event){startClick = event;},false);
    document.addEventListener('mouseup',function(event){
      //如果判断点击的不是某个元素的区域
      if(_this.$el.contains(startClick.target) //如果down的时候点击的目标在这个元素里面就是点击这个元素的区域下
      ||_this.$el.contains(event.target) //up同理
      ||_this.$el === event.target
      )
      return;
      _this._destory();
    },false)
  },
  methods: {
    handleFocus: function() {
      this.show = !this.show;
      this.$nextTick(() => {
        this.popper = new Popper(this.$refs.input, this.$refs.bubble, {
          placement: "bottom"
        });
      });
    },
    selectItem: function(val) {
      this.selectValue = val.text;
      this.$emit('input',val.value);
      this._destory();
    },
    _destory:function(){
      if(this.popper){
        this.show = !this.show;
        this.$nextTick(()=>{
          this.popper.destroy();
          this.popper = null;
        })
      }
    }
  }
};
</script>



