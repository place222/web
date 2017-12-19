<template>
  <Popper :arrow="false" class="select" ref="popper">
    <div class="select__input">
      <input class="select__input_inner" ref="input" type="text" v-model="selectValue">
      <div class="select__arrow">
          <i class="fa fa-caret-left fa-lg"></i>
      </div>
    </div>
    <template slot="pop">
      <ul><slot></slot></ul>
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
    type: {
      type: String,
      default: SELECT_TYPE.SINGLE
    }
  },
  data() {
    return {
      selectValue: null
    };
  },
  mounted() {
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



