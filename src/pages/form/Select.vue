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

    <button @click="show = !show">Toggle</button>
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled">
          <div v-show="show" class="region">hello</div>
      </transition>
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
      selectValue: "",
      show: false
    };
  },
  methods: {
    beforeEnter: function(el) {
      el.classList.add('collapse-transition')
      el.style.height = '0';
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
      console.log('进入前')
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + 'px';
      console.log('进入中')
    },
    afterEnter: function(el) {
      el.classList.remove('collapse-transition')
      el.style.height='';
      console.log('进入后')
    },
    enterCancelled:function(){
      console.log('取消了')
    }
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
.region {
  height: 400px;
  background: red;
}
.collapse-transition {
  transition: height 12s;
}
</style>
