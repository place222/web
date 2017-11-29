<template>
  <li class="menu_item">
    <a href="#" @click.stop="handleClick">
      <i class="fa fa-archive"></i>
      <span><slot name="title"></slot></span>
      <i class="fa fa-angle-left pull-right"></i>
    </a>
    <transition name="fade"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled">
      <ul v-show="show">
        <slot></slot>
      </ul>
    </transition>
  </li>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    handleClick: function() {
      this.show = !this.show;
    },
    beforeEnter: function(el) {
      //获取一下子节点的总高 然后赋值给动画的max-height
      var maxHeight = 0;
      var lis = el.getElementsByTagName("li");
    },
    enter: function(el) {
      console.log("执行中");
    },
    afterEnter: function(el) {
      console.log("执行后");
    },
    enterCancelled: function() {
      console.log("取消了");
    }
  }
};
</script>


<style lang="less" scoped>
.menu_item {
  & a:hover {
    background-color: lighten(#222d32, 10%);
  }

  & a {
    padding: 10px 12px;
    display: block;
    color: #eee;
  }

  & i + span {
    margin-left: 5px;
  }

  & > ul {
    padding-left: 5px;
    list-style: none;
    max-height: 400px;
    overflow: hidden; //过渡的多余高度隐藏
  }
  .fade-enter-active {
    transition: max-height .3s ease-out;
  }
  .fade-leave-active {
    transition: max-height .3s ease-in;
  }
  .fade-enter,
  .fade-leave-to {
    max-height: 0;
  }
}
</style>

