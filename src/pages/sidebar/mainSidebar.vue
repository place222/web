<template>
    <aside class="main-sidebar">
      <ul>
        <li v-for="item in items" :key="item.id" @click="menuSelected(item.id)" :class="selected==item.id?'active':''">
            <router-link :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
  </aside>
</template>

<script>
export default {
  name: "mainSidebar",
  data() {
    return {
      selected: 0,
      items: [
        { id: 0, path: "/grid/index", name: "布局" },
        { id: 1, path: "/container/index", name: "容器" },
        { id: 2, path: "/button/index", name: "按钮" },

        { id: 3, path: "/radio/index", name: "Radio单选按钮" },
        { id: 4, path: "/checkbox/index", name: "Checkbox多选框" },
        { id: 5, path: "/input/index", name: "Input输入框" },
        { id: 6, path: "/select/index", name: "select选择器" },
        { id: 7, path: "/switch/index", name: "Switch开关" },
        { id: 8, path: "/timepikcer/index", name: "TimePicker时间选择器" },
        { id: 9, path: "/datepicker/index", name: "DatePicker日期选择器" },
        { id: 10, path: "/datetimepicker/index", name: "DateTimePicker日期时间选择器" },
        { id: 11, path: "/menu/index", name: "菜单" },

        { id: 1, path: "/alert/index", name: "弹出框" },
        { id: 2, path: "/dropdown/index", name: "下拉菜单" },
        { id: 3, path: "/message/index", name: "消息框" },
        { id: 4, path: "/form/index", name: "表单" }
      ]
    };
  },
  methods: {
    menuSelected: function(id) {
      this.selected = id;
    }
  }
};
</script>


<style lang="less" scoped>
.main-sidebar {
  width: 230px;
  background-color: rgb(34, 45, 50);
  position: absolute;
  & li {
    line-height: 50px;
    text-align: center;
    &:hover{
      background-color:rgb(30, 40, 44);
      cursor: pointer;
    }
    a {
      display: block;
      color:#eee;
    }
  }
}
</style>

