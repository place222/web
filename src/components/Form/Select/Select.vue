<template>
  <Popper :arrow="false" class="select" >
    <div class="select__input">
      <input class="select__input_inner" ref="input" type="text" v-model="selectValue">
      <div class="select__arrow"></div>
    </div>
    <template slot="pop">
      <ul><slot></slot></ul>
    </template>
  </Popper>
</template>


<script>
import Popper from "../../Popper";
export default {
  componentName: "Select",
  components: {
    Popper
  },
  props: {
    value: ""
  },
  data() {
    return {
      popper: null,
      selectValue: null
    };
  },
  mounted() {
    var _this = this;
    this.$on("select-item", this.selectItem);
  },
  methods: {
    selectItem: function(val) {
      this.selectValue = val.text;
      this.$emit("input", val.value);
    }
  }
};
</script>



