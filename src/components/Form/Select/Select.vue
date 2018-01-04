<template>
  <div class="form_select" :class="{'show':showDropdown}" v-clickoutside="handleClickoutside">
    <div class="reference" @click.stop="handleDropdown">
      <input type="hidden" :value="selectValue">
      <Icon class="arrow" name="caret-left"></Icon>
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
    }
  },
  computed: {
    isMulti() {
      return this.type === SELECT_TYPE.MULTI;
    },
    isSingle() {
      return this.type === SELECT_TYPE.SINGLE;
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
  },
  methods: {
    handleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    selectItem: function(val) {
      if (this.type === SELECT_TYPE.SINGLE) {
        this.showDropdown = false;
        this.selectValue = val.text;
        this.$emit("input", val.value);
        this.broadcast("Option", "select.afterSelect", val.value);
      } else if (this.type === SELECT_TYPE.MULTI) {
        console.log(this.selectValue)
        //继续做这个对象数组的筛选
        if (Array.isArray(this.selectValue)) {
          if (this.selectValue.indexOf(val) === -1) {
            this.selectValue.push(val);
          } else {
            console.log("删除");
            const index = this.selectValue.indexOf(val);
            this.selectValue.splice(index, 1);
          }
        }
      }
    },
    handleClickoutside(e) {
      this.showDropdown = false;
    }
  }
};
</script>



