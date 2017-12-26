<script>
export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    span: {
      type: Number,
      default: 12
    },
    offset: Number
  },
  computed: {
    gutter() {
      return this.$parent.gutter;
    }
  },
  render(h) {
    var options = {
      class: [`col-${this.span}`],
      style: { padding: `0 ${this.gutter / 2}px` }
    };
    if (this.offset > 0) options.class.push(`col-offset-${this.offset}`);
    return h(this.tag, options, this.$slots.default);
  }
};
</script>

