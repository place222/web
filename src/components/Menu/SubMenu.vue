<template>
  <li class="menu_item">
    <a href="#" @click.stop="show = !show" :class="show?'open':''">
      <i class="fa" :class="icon?`fa-${icon}`:''"></i>
      <span><slot name="title"></slot></span>
      <i class="fa fa-caret-left fa-lg pull-right"></i>
    </a>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave = "leave"
      @after-leave ="afterLeave">
      <ul v-show="show">
        <slot></slot>
      </ul>
    </transition>
  </li>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    beforeEnter: function(el) {
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;

      el.style.height = "0";
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    },
    enter: function(el) {
      el.dataset.oldOverflow = el.style.overflow;
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + "px";
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      } else {
        el.style.height = "";
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      }
      el.style.overflow = "hidden";
    },
    afterEnter: function(el) {
      el.style.height = "";
      el.style.overflow = el.dataset.oldOverflow;
    },
    beforeLeave: function(el) {
      if (!el.dataset) el.dataset = {};
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.oldOverflow = el.style.overflow;

      el.style.height = el.scrollHeight + "px";
      el.style.overflow = "hidden";
    },
    leave: function(el) {
      if (el.scrollHeight !== 0) {
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      }
    },
    afterLeave: function(el) {
      el.style.height = "";
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }
  }
};
</script>


<style lang="less" scoped>
.open {
  display: block;
}
.menu_item {
  & a:hover {
    background-color: lighten(#222d32, 10%);
  }

  & a {
    padding: 10px 12px;
    display: block;
    color: #eee;
    & .pull-right {
      transition: 0.5s;
    }
    &.open .pull-right {
      transform: rotate(-90deg);
    }
  }

  & i + span {
    margin-left: 5px;
  }

  & > ul {
    padding-left: 5px;
    list-style: none;
    transition: height 0.2s ease;
  }
}
</style>

