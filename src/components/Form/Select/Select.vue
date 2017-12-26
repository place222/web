<template>
  <Popper :arrow="false" class="select" ref="popper">
    <div class="select__input">
      <input class="select__input_inner" ref="input" type="text" v-model="selectValue">
      <div class="select__arrow">
          <i class="fa fa-caret-left fa-lg"></i>
      </div>
    </div>
    <template slot="pop">
      <ul ref="ul"><slot></slot></ul>
    </template>
  </Popper>
</template>


<script>
export const SELECT_TYPE = {
  SINGLE: "single",
  MULTI: "multi"
};
import Popper from "../../Popper";

export default {
  componentName: "Select",
  components: {
    Popper
  },
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
          height += Number.parseFloat(window.getComputedStyle(v.elm).lineHeight);
          index += 1;
          return true;
        }
      });
      this.$refs.ul.style.maxHeight = height + 'px';
    }
    this.$on("select-item", this.selectItem);
  },
  methods: {
    selectItem: function(val) {
      if (this.type == SELECT_TYPE.SINGLE) this.$refs.popper.hidePop();
      this.selectValue = val.text;
      this.$emit("input", val.value);
    }
  }
};
</script>



