<template>
  <pre>
    <code v-html="result"></code>
  </pre>
</template>


<script>
import hljs from "highlight.js";
import "../../../node_modules/highlight.js/styles/monokai.css";
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
      //<*>需要更改类型检查
      if (this.code) {
        const highlighted = hljs.highlight(this.lang, this.code.trim());
        return highlighted.value;
      } else {
        return "";
      }
    }
  }
};
</script>

<style>
pre {
  margin: 0;
  padding: 10px;
}
</style>
