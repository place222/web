<template>
  <Container>

    <Affix></Affix>
    <Row>
      <Col>
      <h4>select</h4>
        <Content>
          <Select v-model="selectValue">
            <Option value="1">呵呵1</Option>
            <Option value="2">呵呵2</Option>
            <Option value="3">呵呵3</Option>
            <Option value="4">呵呵3</Option>
            <Option value="5">呵呵3</Option>
            <Option value="6">呵呵3</Option>
            <Option value="7">呵呵3</Option>
            <Option value="8">呵呵3</Option>
            <Option value="9">呵呵3</Option>
            <Option value="0">呵呵3</Option>
            <Option value="10">呵呵3</Option>
            <Option value="11">呵呵3</Option>
            <Option value="12">呵呵3</Option>
            <Option value="13">呵呵3</Option>
          </Select>
        <p>{{selectValue}}</p>
        </Content>
      </Col>
    </Row>
    <h4>说明</h4>
    <Row>
      <Col>
        <Content>
          <Table :list="list">
            <TableCol name="参数" property="param"></TableCol>
            <TableCol name="说明" property="desc"></TableCol>
            <TableCol name="类型" property="type"></TableCol>
            <TableCol name="可选值" property="options"></TableCol>
            <TableCol name="默认值" property="default"></TableCol>
          </Table>
        </Content>
      </Col>
    </Row>
    <h4>说明</h4>
    <Row>
      <Col>
        <Content>
          <Table :list="list">
            <TableCol name="参数" property="param"></TableCol>
            <TableCol name="说明" property="desc"></TableCol>
            <TableCol name="类型" property="type"></TableCol>
            <TableCol name="可选值" property="options"></TableCol>
            <TableCol name="默认值" property="default"></TableCol>
          </Table>
        </Content>
      </Col>
    </Row>
    <h4>说明</h4>
    <Row>
      <Col>
        <Content>
          <Table :list="list">
            <TableCol name="参数" property="param"></TableCol>
            <TableCol name="说明" property="desc"></TableCol>
            <TableCol name="类型" property="type"></TableCol>
            <TableCol name="可选值" property="options"></TableCol>
            <TableCol name="默认值" property="default"></TableCol>
          </Table>
        </Content>
      </Col>
    </Row>
    <h4>说明</h4>
    <Row>
      <Col>
        <Content>
          <Table :list="list">
            <TableCol name="参数" property="param"></TableCol>
            <TableCol name="说明" property="desc"></TableCol>
            <TableCol name="类型" property="type"></TableCol>
            <TableCol name="可选值" property="options"></TableCol>
            <TableCol name="默认值" property="default"></TableCol>
          </Table>
        </Content>
      </Col>
    </Row>
    <h4>说明</h4>
    <Row>
      <Col>
        <Content>
          <Table :list="list">
            <TableCol name="参数" property="param"></TableCol>
            <TableCol name="说明" property="desc"></TableCol>
            <TableCol name="类型" property="type"></TableCol>
            <TableCol name="可选值" property="options"></TableCol>
            <TableCol name="默认值" property="default"></TableCol>
          </Table>
        </Content>
      </Col>
    </Row>
  </Container>

</template>


<script>

export default {
  data() {
    return {
      selectValue: "",
      list:[
        {param:'',desc:'',type:'',options:'',default:''}
      ]
    };
  }
};
</script>
