<template>
  <div
    class="form_item"
    :class="[{error:validateState ==='error'}]"
    >
      <label
        class="form_label"
        style="">{{label}}</label>
      <div class="form_content">
        <slot></slot>
        <span class="form_error">{{validateMessage}}</span>
      </div>
  </div>
</template>

<script>
let tags = [
  "Input",
  "Radio",
  "RadioGroup",
  "CheckBox",
  "CheckBoxGroup",
  "Select"
];

export const VALIDATE_STATE = {
  Success: "success",
  Error: "error",
  Null: "null"
};

import AsyncValidator from "async-validator";

export default {
  componentName: "FormItem",
  props: {
    label: String,
    name: String,
    rules: [Array]
  },
  data() {
    return {
      validateMessage: "",
      validateState: VALIDATE_STATE.Null
    };
  },
  mounted: function() {
    this.$on("formitem.change", this.handleChange);
  },
  methods: {
    handleChange: function(val) {
      let rules = {};
      rules[this.name] = this.rules;

      var validator = new AsyncValidator(rules);
      validator.validate({ name: val }, (errors, fields) => {
        if (errors) {
          this.validateState = VALIDATE_STATE.Error;
          this.validateMessage = errors[0].message;
          return;
        }
        this.validateState = VALIDATE_STATE.Success;
        this.validateMessage = "";
      });
    }
  }
};
</script>
