<script>
export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    type: String,
    gutter: {
      type: Number
    }
  },
  render(h) {
    return h(this.tag, { class: ["row"] }, this.$slots.default);
  }
};
</script>
