<template>
  <pre>
    <code v-html="result"></code>
  </pre>
</template>


<script>
import hljs from "highlight.js";
import "../../../node_modules/highlight.js/styles/github.css";
export default {
  props: {
    code: {
      type: String,
      required: true
    },
    lang: {
      type: String,
      default: "html"
    }
  },
  data() {
    return {
      codeLines: []
    };
  },
  computed: {
    result() {
      const highlighted = hljs.highlight(this.lang, this.code.trim());
      return highlighted.value;
    }
  }
};
</script>

<style>

</style>
