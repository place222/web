<template>
  <Container>
    <h4>基础栅格</h4>
    <p>水平排列,Grid-Row GridCol既可以构建一个栅格系统</p>
    <GridRow class="row-margin">
      <GridCol :span="12">
        <div class="content">col-12</div>
      </GridCol>
    </GridRow>
    <GridRow class="row-margin">
      <GridCol :span="6">
        <div class="content">col-6</div>
      </GridCol>
      <GridCol :span="6">
        <div class="content">col-6</div>
      </GridCol>
    </GridRow>
    <GridRow class="row-margin">
      <GridCol :span="3">
        <div class="content">col-3</div>
      </GridCol>
      <GridCol :span="3">
        <div class="content">col-3</div>
      </GridCol>
      <GridCol :span="3">
        <div class="content">col-3</div>
      </GridCol>
      <GridCol :span="3">
        <div class="content">col-3</div>
      </GridCol>
    </GridRow>
    <h2>区块间隔</h2>
    <GridRow>
      <GridCol :span="4">
        <div class="content">gutter-10</div>
      </GridCol>
      <GridCol :span="4">
        <div class="content">gutter-10</div>
      </GridCol>
      <GridCol :span="4">
        <div class="content">gutter-10</div>
      </GridCol>
    </GridRow>
    <h2>左右偏移</h2>
     <GridRow >
      <GridCol :span="12" :offset="12">
        <div class="content">col-offset-12</div>
      </GridCol>
    </GridRow>
    <h2>栅格排序</h2>
    <h2>Flex布局</h2>
  </Container>
</template>

<script>
import GridRow from "@/components/Grid/GridRow";
import GridCol from "@/components/Grid/GridCol";
import Container from "@/components/Grid/Container";

export default {
  components: {
    GridRow,
    GridCol,
    Container
  }
};
</script>


<style lang="less" scoped>
.row-margin{
  margin-top: 10px;
}
.content {
  background-color: rgba(0, 160, 233, 0.7);
  line-height: 30px;
  min-height: 30px;
  text-align: center;
  color: #fff;
}
</style>

