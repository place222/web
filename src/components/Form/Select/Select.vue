<template>
  <div class="form_select" v-clickoutside="handleClickoutside">
    <div class="reference" @click.stop="handleDropdown">
      <input type="hidden" :value="selectValue">
      <Icon class="arrow" name="caret-left"></Icon>
       <div class="multi">
          <div class="multi_item">
            <span class="text">123</span>
            <Icon name="times" class="cancel"></Icon>
          </div>
          <div class="multi_item">
            <span class="text">123</span>
            <Icon name="times" class="cancel"></Icon>
          </div>
        </div>
    </div>
    <transition name="dropdown">
      <div class="pop" v-show="show">
        <ul>
          <slot></slot>
        </ul>
      </div>
    </transition>
  </div>
</template>


<script>
export const SELECT_TYPE = {
  SINGLE: "single",
  MULTI: "multi"
};
import clickoutside from "../../../directives/clickoutside";
import CollapseTransition from "@/mixins/transitions/collapse-transition";
import Icon from '@/components/Icon/Icon'

export default {
  componentName: "Select",
  components: {
    CollapseTransition,
    Icon
  },
  directives: { clickoutside },
  props: {
    value: "",
    //多选 单选
    type: {
      type: String,
      default: SELECT_TYPE.SINGLE
    },
    //这个是多少个项出现滚动条的
    max: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      show: false,
      selectValue: null
    };
  },
  mounted() {
    if (Array.isArray(this.$slots.default)) {
      let index = 1;
      let height = 0;
      var options = this.$slots.default.filter(v => {
        if (
          v.componentOptions !== undefined &&
          v.componentOptions.tag === "Option" &&
          index <= this.max
        ) {
          height += Number.parseFloat(
            window.getComputedStyle(v.elm).lineHeight
          );
          index += 1;
          return true;
        }
      });
      // this.$refs.ul.style.maxHeight = height + "px";
    }
    this.$on("select-item", this.selectItem);
  },
  methods: {
    handleDropdown() {
      this.show = !this.show;
    },
    selectItem: function(val) {
      if (this.type == SELECT_TYPE.SINGLE) this.show = false;
      this.selectValue = val.text;
      this.$emit("input", val.value);
    },
    handleClickoutside(e) {
      if (this.type == SELECT_TYPE.SINGLE) this.show = false;
    }
  }
};
</script>



