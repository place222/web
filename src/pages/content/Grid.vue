<template>
  <div class="container">
    <h1>Grid栅格</h1>
    <h2>基础栅格</h2>
    <h4>水平排列,Grid-Row Grid-Col既可以构建一个栅格系统</h4>
    <grid-row>
      <grid-col :span="24">
        <div class="content">col-24</div>
      </grid-col>
    </grid-row>
    <grid-row>
      <grid-col :span="12">
        <div class="content">col-12</div>
      </grid-col>
      <grid-col :span="12">
        <div class="content">col-12</div>
      </grid-col>
    </grid-row>
    <grid-row>
      <grid-col :span="6">
        <div class="content">col-6</div>
      </grid-col>
      <grid-col :span="6">
        <div class="content">col-6</div>
      </grid-col>
      <grid-col :span="6">
        <div class="content">col-6</div>
      </grid-col>
      <grid-col :span="6">
        <div class="content">col-6</div>
      </grid-col>
    </grid-row>
    <h2>区块间隔</h2>
    <grid-row :gutter="10">
      <grid-col :span="8">
        <div class="content">gutter-10</div>
      </grid-col>
      <grid-col :span="8">
        <div class="content">gutter-10</div>
      </grid-col>
      <grid-col :span="8">
        <div class="content">gutter-10</div>
      </grid-col>
    </grid-row>
    <h2>左右偏移</h2>
     <grid-row >
      <grid-col :span="12" :offset="12">
        <div class="content">col-offset-12</div>
      </grid-col>
    </grid-row>
    <h2>栅格排序</h2>
    <h2>Flex布局</h2>
  </div>
</template>

<script>
import GridRow from "@/components/Grid/GridRow";
import GridCol from "@/components/Grid/GridCol";
export default {
  components: {
    GridRow,
    GridCol
  }
};
</script>


<style lang="less" scoped>
.content{
  background-color: rgba(0,160,233,.7);
  line-height: 30px;
  min-height: 30px;
  text-align: center;
  color:#fff;
}
.container {
  padding: 20px;
}

</style>

