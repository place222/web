<template>
  <Container>
    <h4>基础栅格</h4>
    <p>水平排列,Row Col</p>
    <Row class="row-margin">
      <Col :span="12" class="content">
        <div>col-12</div>
      </Col>
    </Row>
    <Row class="row-margin">
      <Col :span="6" class="content">
        <div>col-6</div>
      </Col>
      <Col :span="6" class="content">
        <div>col-6</div>
      </Col>
    </Row>
    <Row class="row-margin">
      <Col :span="3" class="content">
        <div>col-3</div>
      </Col>
      <Col :span="3" class="content">
        <div>col-3</div>
      </Col>
      <Col :span="3" class="content">
        <div>col-3</div>
      </Col>
      <Col :span="3" class="content">
        <div>col-3</div>
      </Col>
    </Row>
    <h2>区块间隔</h2>
    <Row>
      <Col :span="4" class="content">
        <div>gutter-10</div>
      </Col>
      <Col :span="4" class="content">
        <div>gutter-10</div>
      </Col>
      <Col :span="4" class="content">
        <div>gutter-10</div>
      </Col>
    </Row>
    <h2>左右偏移</h2>
     <Row >
      <Col :span="12" :offset="12" class="content">
        <div>col-offset-12</div>
      </Col>
    </Row>
    <h2>栅格排序</h2>
    <h2>Flex布局</h2>
  </Container>
</template>

<script>
import Row from "@/components/Grid/Row";
import Col from "@/components/Grid/Col";
import Container from "@/components/Grid/Container";

export default {
  components: {
    Row,
    Col,
    Container
  }
};
</script>


<style lang="less" scoped>
.row-margin {
  margin-bottom: 10px;
}
.content {
  background-color: rgba(0, 160, 233, 0.7);
  line-height: 30px;
  min-height: 30px;
  text-align: center;
  color: #fff;
}
</style>

