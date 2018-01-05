<template>
  <div
    class="form_select"
    :class="[{'show':showDropdown},{'disabled':disabled}]"
    v-clickoutside="handleClickoutside">
    <div class="reference" @click.stop="handleDropdown">
      <input type="hidden" :value="selectValue">
      <Icon class="arrow" name="caret-left"></Icon>
      <div class="clear" v-show="clearableShow" @click.stop="handleClear"></div>
      <div class="placeholder" v-show="placeHolderShow">{{placeholder}}</div>
      <div v-if="isSingle">{{selectValue}}</div>
      <div class="multi" v-else>
        <div class="multi_item" v-for="item in selectValue">
          <span class="text">{{item.text}}</span>
          <Icon name="times" class="cancel"></Icon>
        </div>
      </div>
    </div>
    <transition name="dropdown">
      <div class="pop" v-show="showDropdown">
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
import Icon from "@/components/Icon/Icon";
import Emitter from "../../../mixins/emitter";

export default {
  componentName: "Select",
  components: {
    CollapseTransition,
    Icon
  },
  directives: { clickoutside },
  mixins: [Emitter],
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
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: "请选择"
    }
  },
  computed: {
    isMulti() {
      return this.type === SELECT_TYPE.MULTI;
    },
    isSingle() {
      return this.type === SELECT_TYPE.SINGLE;
    },
    placeHolderShow() {
      return !this.selectValue;
    },
    clearableShow() {
      return this.selectValue && this.clearable;
    }
  },
  data() {
    return {
      showDropdown: false,
      selectValue: null
    };
  },
  created() {
    if (this.type === SELECT_TYPE.MULTI) this.selectValue = [];
    else if (this.type === SELECT_TYPE.SINGLE) this.selectValue = "";
  },
  mounted() {
    this.$on("select.selectedItem", this.selectItem);
    this.$on("select.unSelectedItem", this.unSelectItem);
  },
  methods: {
    handleDropdown() {
      if (this.disabled) return;
      this.showDropdown = !this.showDropdown;
    },
    unSelectItem: function(val) {
      if (this.type === SELECT_TYPE.MULTI) {
        if (Array.isArray(this.selectValue)) {
          for (let i = 0; i < this.selectValue.length; i++) {
            if (this.selectValue[i].value === val.value) {
              this.selectValue.splice(i, 1);
            }
          }
        }
      }
    },
    selectItem: function(val) {
      if (this.type === SELECT_TYPE.SINGLE) {
        this.showDropdown = false;
        this.selectValue = val.text;
        this.broadcast("Option", "select.afterSelectItem", val);
      } else if (this.type === SELECT_TYPE.MULTI) {
        //继续做这个对象数组的筛选
        if (Array.isArray(this.selectValue)) {
          this.selectValue.push(val);
        }
      }
      this.$emit("input", val.value);
    },
    handleClickoutside(e) {
      this.showDropdown = false;
    },
    handleClear() {
      if (Array.isArray(this.selectValue)) {
        this.selectValue = [];
      } else {
        this.selectValue = null;
      }
      this.$emit("input", this.selectValue);
    }
  }
};
</script>



