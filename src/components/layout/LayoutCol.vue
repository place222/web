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
    }
  },
  render(h) {
    return h(this.tag, { class: [`col-${this.span}`] }, this.$slots.default);
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
.col-6 {
  width: 25%;
}
</style>
