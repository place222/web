<template>
  <label class="radio" >
    <span class="radio_circular" >
      <input type="radio" :value="label" v-model="model" @change="handleChange"/>
    </span>
    <span class="radio_text">{{label}}</span>
  </label>
</template>
<script>
export default {
  props: {
    value: {},
    label: {}
  },
  computed: {
    model: {
      get() {
        console.log(`get方法${this.value}`)
        return this.value;
      },
      set(val) {
        console.log(`set方法${val}`)
        this.$emit("input", val);
      }
    }
  },
  methods: {
    handleChange() {
        this.$emit("change", this.model);

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
  margin-left: 4px;
}
.radio_circular.checked::after {
  background-color: blue;
  transform: scale(2);
}
.radio_circular {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid blue;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  &:after {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 100%;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: scale(1);
    transition: all 0.2s;
  }
  & > input {
    // opacity: 0;
  }
}
</style>
