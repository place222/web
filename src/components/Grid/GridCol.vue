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



<style lang="less" scoped>
.col-24 {
  width: 100%;
}
.col-12 {
  width: 50%;
}
.col-8 {
  width: 33.3%;
}
.col-6 {
  width: 25%;
}
.col-3 {
  width: 12.5%;
}
.col-1 {
  width: 4.166666%;
}
.col-offset-12 {
  margin-left: 50%;
}
</style>
