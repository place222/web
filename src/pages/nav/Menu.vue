<template>
  <div class="container">
    <Menu>
      <MenuItem :title="`菜单1`"></MenuItem>
      <MenuItem :title="`菜单2`"></MenuItem>
      <MenuItem :title="`菜单3`"></MenuItem>
      <MenuItem :title="`菜单4`"></MenuItem>
      <SubMenu :icon="'archive'">
        <template slot="title">菜单5</template>
          <MenuItem :title="'子菜单1'"></MenuItem>
          <MenuItem :title="'子菜单2'"></MenuItem>
          <MenuItem :title="'子菜单3'"></MenuItem>
          <SubMenu :icon="'address-book'">
            <template slot="title">子菜单4</template>
              <MenuItem :title="`子子菜单`"></MenuItem>
              <MenuItem :title="`子子菜单2`"></MenuItem>
              <MenuItem :title="`子子菜单3`"></MenuItem>
          </SubMenu>
      </SubMenu>
      <MenuItem :title="`菜单6`"></MenuItem>
    </Menu>
  </div>
</template>

<script>
import Menu from "@/components/Menu/Menu";
import MenuItem from "@/components/Menu/MenuItem";
import SubMenu from "@/components/Menu/SubMenu";
import MenuItemGroup from "@/components/Menu/MenuItemGroup";

export default {
  props: {
    icon: {
      type: String,
      default: "address-book"
    }
  },
  components: {
    Menu,
    MenuItem,
    SubMenu,
    MenuItemGroup
  }
};
</script>


<style lang="less" scoped>
.container {
  width: 300px;
  padding: 10px;
}
.pull-right {
  float: right;
  margin-right: 10px;
}
</style>

