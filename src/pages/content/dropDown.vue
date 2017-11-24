<template>
      <dropdown @command="dropDownCommand">
        <dropdown-toggle slot="toggle">下拉菜单</dropdown-toggle>
        <dropdown-menu slot="menu">
          <dropdown-menu-item :is-title="true">1</dropdown-menu-item>
          <dropdown-menu-item :is-separator="true">2</dropdown-menu-item>
          <dropdown-menu-item :disabled="true"><a href="#">3</a></dropdown-menu-item>
          <dropdown-menu-item command="haha"><a href="#">1</a></dropdown-menu-item>
          <dropdown-menu-item><a href="#">1</a></dropdown-menu-item>
        </dropdown-menu>
      </dropdown>
</template>

<script>
import Dropdown from "@/components/dropdown/Dropdown";
import DropdownToggle from "@/components/dropdown/DropdownToggle";
import DropdownMenu from "@/components/dropdown/DropdownMenu";
import DropdownMenuItem from "@/components/dropdown/DropdownMenuItem";

//生命周期的测试
import Life from "@/components/Life";
export default {
  name: "mainContent",
  components: {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownMenuItem,
    Life
  },
  methods: {
    dropDownCommand: function(command) {
      console.log(command);
    }
  }
};
</script>

