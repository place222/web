<template>
    <label class="checkbox" :class="[
      {'check':model},
      {'is-disabled':disabled}
    ]" >
      <span class="checkbox_check">
        <input type="checkbox"
              :name="name"
              :value="value"
              v-model="model"
              :disabled="disabled"
              >
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
    items: {
      type: Array,
      default: function() {
        return [];
      }
    },
    value: [String, Boolean, Number],
    name: String,
    disabled: Boolean
  },
  data() {
    return {
      model: this.items.indexOf(this.value) != -1
    };
  },
  watch: {
    model: function(val, oldVal) {
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

