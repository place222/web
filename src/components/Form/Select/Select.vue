<template>
  <div class="select">
    <input ref="input" type="text" @focus="handleFocus" v-model="selectValue">
    <ul ref="bubble" class="pop" v-show="show"><slot></slot></ul>
  </div>
</template>


<script>
import Popper from "popper.js";

export default {
  componentName: "Select",
  data() {
    return {
      popper: {},
      show: false,
      selectValue: null
    };
  },
  mounted() {
    this.$on("select-item", this.selectItem);
  },
  methods: {
    handleFocus: function() {
      this.show = !this.show;
      this.$nextTick(() => {
        this.popper = new Popper(this.$refs.input, this.$refs.bubble, {
          placement: "bottom"
        });
      });
    },
    selectItem: function(val) {
      console.log(val);
      this.selectValue = val;
    }
  }
};
</script>


<style lang="less">
.pop {
  width: 200px;
  height: 200px;
}
.select {
  width: 240px;
  & > input[type="text"] {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  & > ul {
    border: 1px solid #d8dce5;
    border-top: 0;
    width: 240px;
    padding: 6px 0;
    box-shadow: 2px 2px 2px #888888;
    box-sizing: border-box;
  }
}
</style>
