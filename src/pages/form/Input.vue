<template>
  <Container>
    <h4>输入框</h4>
    <Row>
      <Col>
        <Content>
          <CodeCollapse>
            <Input placeholder="这个是占位符" v-model="value1"></Input>
            <span class="">{{value1}}</span>
          </CodeCollapse>
        </Content>
      </Col>
    </Row>
    <h4>禁用状态</h4>
    <Row>
      <Col>
        <Content>
          <CodeCollapse>
            <Input placeholder="这个是占位符" v-model="value2" disabled></Input>
            <span class="">{{value2}}</span>
          </CodeCollapse>
        </Content>
      </Col>
    </Row>
    <h4>带Icon</h4>
    <h4>文本域(多行)</h4>
    <h4>复合型输入框</h4>
  </Container>
</template>

<script>

export default {
  data() {
    return {
      value1: "",
      value2: ""
    };
  }
};
</script>

