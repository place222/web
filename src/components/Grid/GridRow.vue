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
    return h(
      this.tag,
      { class: ["layout"]},
      this.$slots.default
    );
  }
};
</script>


<style lang="less" scoped>
.layout {
  display: flex;
}
</style>
