<template>
  <div
    class="form_select"
    :class="[{'show':showDropdown},{'disabled':disabled}]"
    v-clickoutside="handleClickoutside">
    <div class="reference" @click.stop="handleDropdown">
      <input type="hidden" :value="selectValue">
      <Icon class="arrow" name="caret-left"></Icon>
      <Icon class="clear" name="times" v-show="isClearable" @click.native.stop="handleClear"></Icon>
      <div class="placeholder" v-show="isPlaceHolder">{{placeholder}}</div>
      <div v-if="isSingle">{{selectValue?selectValue.text:''}}</div>
      <div class="multi" v-else>
        <div class="multi_item" v-for="item in selectValue">
          <span class="text">{{item.text}}</span>
          <Icon name="times" class="cancel" @click.native.stop="handleRemoveItem(item)"></Icon>
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
import { SELECT_TYPE } from "./core";
import clickoutside from "../../../directives/clickoutside";
import Icon from "@/components/Icon/Icon";
import Emitter from "../../../mixins/emitter";

export default {
  componentName: "Select",
  components: {
    Icon
  },
  directives: { clickoutside },
  mixins: [Emitter],
  provide() {
    return {
      type: this.type
    };
  },
  props: {
    value: "", //v-model绑定进来的值
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
    isPlaceHolder() {
      return !this.selectValue;
    },
    isClearable() {
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
      this._removeItem(val);
    },
    selectItem: function(val) {
      if (this.type === SELECT_TYPE.SINGLE) {
        this.showDropdown = false;
        this.selectValue = val;
        this.broadcast("Option", "select.afterSelectItem", val);
        this.$emit("input", val.value);
      } else if (this.type === SELECT_TYPE.MULTI) {
        if (Array.isArray(this.selectValue)) {
          this.selectValue.push(val);
          this.$emit('input',this.selectValue.map((val)=>val.value));
        }
      }
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
    },
    handleRemoveItem(val) {
      this._removeItem(val);
    },
    _removeItem(val) {
      if (this.type === SELECT_TYPE.MULTI) {
        if (Array.isArray(this.selectValue)) {
          for (let i = 0; i < this.selectValue.length; i++) {
            if (this.selectValue[i].value === val.value) {
              this.selectValue.splice(i, 1);
            }
          }
          this.$emit("input", this.selectValue.map((val)=>val.value));
        }
      }
    }
  }
};
</script>



