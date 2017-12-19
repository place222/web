

<script>
import Popper from "popper.js";
import debounce from "../mixins/debounce";
import CollapseTransition from '@/mixins/transitions/collapse-transition'

export const TRIGGER = {
  hover: "hover",
  click: "click",
  focus: "focus"
};
var popInstance = null;

export default {
  components:{
    CollapseTransition
  },
  props: {
    offset: {
      type: Number
    },
    trigger: {
      type: String,
      default: TRIGGER.hover
    },
    delay: {
      type: Object,
      default: () => {
        return {
          show: 0,
          hide: 0
        };
      }
    },
    placement: {
      type: String,
      default: "bottom"
    },
    boundariesElement: Element,
    arrow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      show: false,
      timeout: null
    };
  },
  mounted: function() {
    var _this = this;
    if (this.trigger == TRIGGER.hover) {
      this.$refs.component.addEventListener("mouseenter", _this.showPop, false);
      this.$refs.component.addEventListener("mouseleave", _this.hidePop, false);
    } else if (this.trigger == TRIGGER.click) {
      this.$refs.component.addEventListener("click", _this.togglePop, false);
    } else if (this.trigger == TRIGGER.focus) {
      //这里不能用原生事件 我们把所有表单类的元素的focus和blur来挂载来调用
      this.$on("form-item.focus", function() {
        console.log("聚焦了");
      });
      this.$on("form-item.blur", function() {
        console.log("脱离聚焦");
      });
    }
  },
  methods: {
    togglePop() {
      if (this.show) {
        this.hidePop();
      } else {
        this.showPop();
      }
    },
    showPop() {
      clearTimeout(this.timeout);
      if (!popInstance) {
        this.timeout = setTimeout(() => {
          this.show = !this.show;
          this.$nextTick(()=>{this._initPop()})
        }, this.delay.show);
      }
    },
    hidePop() {
      clearTimeout(this.timeout);
      if (popInstance) {
        this.timeout = setTimeout(() => {
          this.show = !this.show;
          this.$nextTick(()=>{this._disposePop()})
        }, this.delay.hide);
      }
    },
    _disposePop() {
      if (popInstance) {
        popInstance.destroy();
        popInstance = null;
      }
    },
    _initPop() {
      var popOptions = {};
      popOptions.modifiers = popOptions.modifiers || {};
      if (this.offset > 0)
        popOptions.modifiers.offset = {
          offset: this.offset
        };
      if (this.placement) popOptions.placement = this.placement;
      if (this.boundariesElement)
        popOptions.modifiers.preventOverflow = Object.assign(
          {},
          { boundariesElement: this.boundariesElement }
        );
      if (this.arrow)
        popOptions.modifiers.arrow = Object.assign(
          {},
          { element: this.$refs.arrow }
        );

      var reference = this.$refs.reference;
      var pop = this.$refs.pop;
      if (!popInstance) popInstance = new Popper(reference, pop, popOptions);
    }
  }
};
</script>
<template>
  <div ref="component" class="popper">
    <div ref="reference" class="popper__reference">
      <slot>
      </slot>
    </div>
      <CollapseTransition>
        <div ref="pop" class="popper_pop" :class="arrow?'arrow__true':''" v-show="show">
          <div ref="arrow" :class="arrow?'arrow':''"></div>
              <slot name="pop"><span></span></slot>
        </div>
      </CollapseTransition>
  </div>
</template>
<style lang="less" scoped>
.popper {
  position: relative;
}
.popper_pop {
  min-height: 30px;
  background: #fff;
  overflow: auto;
  width: 100%;
  z-index: 1000;
  position: absolute;
  box-sizing: border-box;
  &.arrow__true{
    margin-top: 5px;
  }
}
.arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  border-color: #ccc;
  border-style: solid;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
  position: absolute;
}
</style>
