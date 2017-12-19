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
  mounted: function() {
    this.$http.get("http://localhost:3003/menu").then((res)=>{
      this.items = res.data;
    }).catch((res)=>{
      console.log(res);
    });
  },
  data() {
    return {
      selected: 0,
      list:[],
      items: []
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
  height: 100%; //看住这个搞出来个滚动条
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

