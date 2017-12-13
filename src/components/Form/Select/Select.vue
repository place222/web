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
      if(_this.popper){
        _this.show = !_this.show;
        _this.$nextTick(()=>{
          _this.popper.destroy();
          _this.popper = null;
        })
      }
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
    }
  }
};
</script>


<style lang="less">
.pop {
  width: 200px;
  height: 200px;
}
.select {
  width: 240px;
  position: relative;
  & .arrow{
    width: 35px;
    height: 35px;
    border: 1px solid red;
    position: absolute;
    right: 0;
    top:0;
    box-sizing: border-box;
  }
  & > input[type="text"] {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  & > ul {
    background-color: #fff;
    border: 1px solid #d8dce5;
    border-top: 0;
    width: 240px;
    padding: 6px 0;
    box-shadow: 2px 2px 2px #888888;
    box-sizing: border-box;
    z-index: 1000;//popup的东西应该从1000开始计算
  }
}
</style>
