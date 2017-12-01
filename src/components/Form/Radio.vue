<template>
  <label class="radio" >
    <span class="radio_circular" :class="checked==value?'checked':''" >
      <input type="radio" :checked="checked == value" @change="handleChange" :value="value"/>
    </span>
    <span class="radio_text"><slot></slot></span>
  </label>
</template>
<script>
export default {
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    checked: [String, Number, Boolean],
    value: [String, Number, Boolean]
  },
  methods: {
    handleChange(event) {
      this.$emit("change", this.value);
    }
  },
  watch: {
    checked: function(val, oldVal) {
      //console.log(this.checked);
    }
  }
};
</script>

<style lang="less" scoped>
.radio,
.radio_text {
  display: inline-block;
}
.radio {
  cursor: pointer;
}
.radio_text {
}
.radio_circular.checked::after {
  background-color: #3c8dbc;
}
.radio_circular {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid #3c8dbc;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  &:after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transition: all .2s;
  }
  & > input {
     opacity: 0;
  }
}
</style>
