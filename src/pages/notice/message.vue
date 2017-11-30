<template>
  <div>
    <button @click="handleClick">点击我弹出消息框</button>
  </div>
</template>

<script>
import message from "@/components/message/Main.vue";
import Vue from 'vue'

export default {
  components: {
    message
  },
  methods: {
    handleClick: function() {

      //把这个封装方法 扩展到vue对象上
      var alert = Vue.extend(message);
      var vm = new alert({ propsData: { show: false } }).$mount();
      document.body.appendChild(vm.$el);
      vm.show = true;

    }
  }
};
</script>

