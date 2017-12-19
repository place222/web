<template>
  <li class="menu_item">
    <a href="#" @click.stop="show = !show" :class="show?'open':''">
      <i class="fa" :class="icon?`fa-${icon}`:''"></i>
      <span><slot name="title"></slot></span>
      <i class="fa fa-caret-left fa-lg pull-right"></i>
    </a>
    <CollapseTransition>
      <ul v-show="show">
        <slot></slot>
      </ul>
    </CollapseTransition>
  </li>
</template>

<script>
import CollapseTransition from "@/mixins/transitions/collapse-transition";

export default {
  components: {
    CollapseTransition
  },
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

