<template>
<div class="container">
    <ul>
        <li><h2>flex用在容器上的</h2></li>
        <li>flex-direction: row | row-reverse | column | column-reverse; 排列方向</li>
        <li>flex-wrap: nowrap | wrap | wrap-reverse;换行</li>
        <li>flex-flow: flex-direction || flex-wrap;</li>
        <li>justify-content: flex-start | flex-end | center | space-between | space-around;</li>
        <li>align-items: flex-start | flex-end | center | baseline | stretch;</li>
        <li> align-content: flex-start | flex-end | center | space-between | space-around | stretch;</li>
        <li><h2>用在项目上的</h2></li>
        <li>order: integer;排序 越小越靠前</li>
        <li>flex-grow: number;每行的大小等比例分配大小</li>
        <li>flex-shrink: number; 每行的大小等比缩小 0时不够的时候不会缩小 其他1的会缩小</li>
        <li>flex-basis: length | auto; 定义当前项占据的主轴空间设定一个大小</li>
        <li>flex: none | [ 'flex-grow' 'flex-shrink'? || 'flex-basis' ]</li>
        <li>align-self: auto | flex-start | flex-end | center | baseline | stretch;这个属性会单独设置当前项的对齐方式 覆盖父级的align-items</li>
    </ul>
    <h2>一般布局</h2>
    <layout-container>
      <layout-header class="header">header</layout-header>
      <layout-main class="main">main</layout-main>
      <layout-footer class="footer">footer</layout-footer>
    </layout-container>
    <h2>带边栏</h2>
    <layout-container :has-sidebar="true">
      <layout-sidebar class="sidebar">sidebar</layout-sidebar>
      <layout-container>
        <layout-header class="header">header</layout-header>
        <layout-main class="main">main</layout-main>
        <layout-footer class="footer">footer</layout-footer>
      </layout-container>
    </layout-container>
    <br/>
    <layout-container>
      <layout-header class="header">header</layout-header>
      <layout-container :has-sidebar="true">
        <layout-sidebar class="sidebar">sidebar</layout-sidebar>
        <layout-main class="main">main</layout-main>
      </layout-container>
      <layout-footer class="footer">footer</layout-footer>
    </layout-container>
</div>
</template>

<script>
import LayoutContainer from "@/components/Layout/LayoutContainer";
import LayoutFooter from "@/components/Layout/LayoutFooter";
import LayoutHeader from "@/components/Layout/LayoutHeader";
import LayoutMain from "@/components/Layout/LayoutMain";
import LayoutSidebar from "@/components/Layout/LayoutSidebar";

export default {
  components: {
    LayoutContainer,
    LayoutFooter,
    LayoutHeader,
    LayoutMain,
    LayoutSidebar
  }
};
</script>


<style lang="less" scoped>
.container {
  padding: 10px;
}
.header,
.main,
.footer,
.sidebar {
  color: #fff;
  text-align: center;
}
.header,
.footer {
  background-color: #7dbcea;
}
.sidebar{
  background-color: #3ba0e9;
}
.main {
  background-color: rgba(16, 142, 233, 1);
  height: 200px;
}
</style>

