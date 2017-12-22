<script>
export default {
  props: {
    test: "123"
  },
  render(h) {
    let vnode = h(
      "div",
      {
        props: {
          test: "div test"
        },
        scopedSlots: {
          default: prop => h("button", prop.test)
        }
      },
      [
        this.$slots.default,
        this.$scopedSlots.default({ text: "sfsdfsdfsdfsdfsdf" })
      ]
    );
    return vnode;
  }
};
</script>
