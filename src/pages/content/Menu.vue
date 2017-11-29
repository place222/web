<template>
  <div class="container">
    <Menu>
      <MenuItem>菜单1</MenuItem>
      <MenuItem>菜单2</MenuItem>
      <MenuItem>菜单3</MenuItem>
      <MenuItem>菜单4</MenuItem>
      <SubMenu>
        <template slot="title">菜单5</template>
          <MenuItem>子菜单</MenuItem>
          <MenuItem>子菜单2</MenuItem>
          <MenuItem>子菜单3</MenuItem>
          <SubMenu>
            <template slot="title">子菜单4</template>
              <MenuItem>子子菜单</MenuItem>
              <MenuItem>子子菜单2</MenuItem>
              <MenuItem>子子菜单3</MenuItem>
          </SubMenu>
      </SubMenu>
      <MenuItem>菜单6</MenuItem>
    </Menu>
  </div>
</template>

<script>
import Menu from "@/components/Menu/Menu";
import MenuItem from "@/components/Menu/MenuItem";
import SubMenu from "@/components/Menu/SubMenu";
import MenuItemGroup from "@/components/Menu/MenuItemGroup";

export default {
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

