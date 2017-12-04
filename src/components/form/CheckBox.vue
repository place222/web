<template>
    <label class="checkbox" :class="check?'check':''" >
      <span class="checkbox_check">
        <input type="checkbox" v-model="check">
      </span>
      <span class="checkbox_text"><slot></slot></span>
    </label>
</template>

<script>
export default {
  model: {
    prop: "items"
  },
  props: {
    items: [Array],
    value: [String, Boolean, Number]
  },
  data() {
    return {
      check: this.items.indexOf(this.value) != -1
    };
  },
  watch: {
    check: function(val, oldVal) {
      if (val) {
        this.items.push(this.value);
      } else {
        this.items.splice(this.items.indexOf(this.value), 1);
      }
      this.$emit("input", this.items);
    }
  }
};
</script>

