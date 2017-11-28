<template>
<div class="container">
  <layout-container>
    <layout-header>
      <h2>按钮类型</h2>
    </layout-header>
    <layout-main>
      <Button>默认按钮</Button>
      <Button type="primary">主按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">错误按钮</Button>
    </layout-main>
  </layout-container>
  <layout-container>
    <layout-header>
      <h2>图标按钮</h2>
    </layout-header>
  </layout-container>
  <layout-container>
    <layout-header>
      <h2>按钮尺寸</h2>
    </layout-header>
  </layout-container>
  <layout-container>
    <layout-header>
      <h2>不可用状态</h2>
    </layout-header>
    <layout-main>
      <Button disabled>默认按钮</Button>
      <Button type="primary" disabled>主按钮</Button>
      <Button type="success" disabled>成功按钮</Button>
      <Button type="info" disabled>信息按钮</Button>
      <Button type="warning" disabled>警告按钮</Button>
      <Button type="danger" disabled>错误按钮</Button>
    </layout-main>
  </layout-container>
  <layout-container>
    <layout-header>
      <h2>按钮组</h2>
    </layout-header>
  </layout-container>
</div>
</template>

<script>
import LayoutContainer from "@/components/Layout/LayoutContainer";
import LayoutMain from "@/components/Layout/LayoutMain";
import LayoutFooter from "@/components/Layout/LayoutFooter";
import LayoutHeader from "@/components/Layout/LayoutHeader";
import GridRow from "@/components/Grid/GridRow";
import GridCol from "@/components/Grid/GridCol";
import Button from "@/components/Button/Button";

export default {
  components: {
    LayoutContainer,
    LayoutHeader,
    LayoutFooter,
    LayoutMain,
    GridRow,
    GridCol,
    Button
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 10px;
}
</style>
