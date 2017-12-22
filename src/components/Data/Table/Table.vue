<script>
//   caption、col、colgroup、thead、tfoot 以及 tbody 元素。
//   table 标签 display:table border-collapse:separate border-spacing:2px border-color:gray //不沾满但是有换行符
//   thead 标签 display:table-header-group 只有border contentarea 没有padding margin<br/>
//   tr 标签 display:table-row 也是只有border contentarea 没有padding margin<br/>
//   th 标签 font-weigth bold display:table-CodeCollapse 有padding border contentarea 没有margin<br/>
//   tbody 标签 display:table-row-group 只有border contentarea 没有margin padding<br/>
//   td 标签 display:table-cell
export default {
  componentName: "Table",
  props: {
    list: [Array, Object]
  },
  render(h) {
    let tableCols = this.$slots.default.filter(function(v) {
      if (
        v.componentOptions !== undefined &&
        v.componentOptions.tag === "TableCol"
      )
        return v;
    });
    let fields = tableCols.map(v => v.componentOptions.propsData);
    let vnode = h("table", { class: { table: true } }, [
      h("thead", [
        h("tr", [Array.apply(null, fields).map(v => h("th", v.name))])
      ]),
      h("tbody", [
        Array.apply(null, this.list).map(v =>
          h("tr", [
            Array.apply(null, fields).map((c, i) => {
              if (v[c.property] === undefined) {
                //给每一个子节点都把当前行的数据绑定上去
                //tableCols[i].data.scopedSlots.default({row:v}) 这个是作用域插槽默认是函数调用下就可以传数据
                return h("td",[tableCols[i].data.scopedSlots.default({row:v})]);
              } else {
                return h("td", v[c.property]);
              }
            })
          ])
        )
      ])
    ]);
    return vnode;
  }
};
</script>
