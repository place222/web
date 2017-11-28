<template>
  <div class="container">
    <Menu>
      <MenuItem>1</MenuItem>
      <MenuItem>2</MenuItem>
      <MenuItem>3</MenuItem>
      <MenuItem>4</MenuItem>
      <SubMenu >
        <template slot="title">
          5
        </template>
        <MenuItemGroup :title="'呵呵'">
          <MenuItem>sub1 group1 1</MenuItem>
          <MenuItem>sub1 group1 2</MenuItem>
        </MenuItemGroup>
        <MenuItem>sub1 2</MenuItem>
      </SubMenu>
    </Menu>
  </div>
</template>

<script>
import Menu from '@/components/Menu/Menu'
import MenuItem from '@/components/Menu/MenuItem'
import SubMenu from '@/components/Menu/SubMenu'
import MenuItemGroup from '@/components/Menu/MenuItemGroup'

export default {
  components:{
    Menu,
    MenuItem,
    SubMenu,
    MenuItemGroup
  }
}
</script>


<style lang="less">
.container{
  padding: 10px;
}
</style>

