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

