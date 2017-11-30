<template>
    <aside class="main-sidebar">
      <Menu>
        <template v-for="item in items" >
            <MenuItem v-if="!item.children" :key="item.id">
              <router-link :to="item.path">
                <i class="fa" :class="icon?`fa-${icon}`:''"></i>
                <span>{{item.name}}</span>
              </router-link>
            </MenuItem>
            <SubMenu :icon="'archive'" v-else :key="item.id">
              <template slot="title">{{item.name}}</template>
              <MenuItem v-for="subItem in item.children" :key="subItem.id">
                <router-link :to="subItem.path" :key="subItem.id">
                  <i class="fa" :class="icon?`fa-${icon}`:''"></i>
                  <span>{{subItem.name}}</span>
                </router-link>
              </MenuItem>
            </SubMenu>
        </template>
      </Menu>
  </aside>
</template>

<script>
import Menu from "@/components/Menu/Menu";
import MenuItem from "@/components/Menu/MenuItem";
import SubMenu from "@/components/Menu/SubMenu";

export default {
  name: "MainSidebar",
  components: {
    Menu,
    MenuItem,
    SubMenu
  },
  props: {
    icon: {
      type: String,
      default: "address-book"
    }
  },
  data() {
    return {
      selected: 0,
      items: [
        { id: 0, path: "/layout", name: "布局" ,
          children: [{ id: 14, path: "/layout/grid", name: "基础栅格系统" }]
        },
        { id: 1, path: "/container", name: "容器",
          children: [{ id: 14, path: "/container/container", name: "容器" }]
        },
        { id: 2, path: "/content/button", name: "按钮" },
        { id: 3, path: "/form", name: "表单",
          children:[
            { id: 3, path: "/form/radio", name: "Radio单选按钮" },
            { id: 4, path: "/form/checkbox", name: "Checkbox多选框" },
            { id: 5, path: "/form/input", name: "Input输入框" },
            { id: 6, path: "/form/select", name: "select选择器" },
            { id: 7, path: "/form/switch", name: "Switch开关" },
            { id: 7, path: "/form/form", name: "表单" },
          ]
        },
        { id: 4, path: "/datepicker", name: "日期选择",
          children:[
            { id: 8, path: "/datepicker/datepicker", name: "TimePicker时间选择器" },
            { id: 9, path: "/datepicker/datetimepicker", name: "DatePicker日期选择器" },
            { id: 10,path: "/datepicker/timepicker",name: "DateTimePicker日期时间选择器"},
          ]
        },
        { id: 11,path: "/nav",name: "导航",
          children: [
            { id: 13, path: "/nav/dropdown", name: "竖向菜单" },
            { id: 2, path: "/nav/menu", name: "下拉菜单" }
          ]
        },
        { id: 11,path: "/notice",name: "通知",
          children: [
            { id: 1, path: "/notice/alert", name: "弹出框" },
            { id: 3, path: "/notice/message", name: "消息框" },
          ]
        },{
          id: 11,path: "/other",name: "其他",
        }
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
  & a {
    padding: 10px 12px;
    display: block;
    color: #eee;
  }
  & a:hover {
    background-color: lighten(#222d32, 10%);
  }
  & i + span {
    margin-left: 5px;
  }
}
</style>

