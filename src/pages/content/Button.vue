<template>
<Container>
  <h4>按钮组</h4>
  <Row>
      <Col>
        <Content>
           <CodeCollapse :code='``'>
              <ButtonGroup>
                <Button icon="book"></Button>
                <Button icon="book"></Button>
                <Button icon="book"></Button>
                <Button icon="book"></Button>
                <Button icon="book"></Button>
              </ButtonGroup>
           </CodeCollapse>
        </Content>
      </Col>
  </Row>
  <h4>按钮类型</h4>
  <Row>
      <Col>
        <Content>
           <CodeCollapse :code='`
  <Button>默认按钮</Button>
  <Button type="primary">主按钮</Button>
  <Button type="success">成功按钮</Button>
  <Button type="info">信息按钮</Button>
  <Button type="warning">警告按钮</Button>
  <Button type="danger">错误按钮</Button>`'>
              <Button>默认按钮</Button>
              <Button type="primary">主按钮</Button>
              <Button type="success">成功按钮</Button>
              <Button type="info">信息按钮</Button>
              <Button type="warning">警告按钮</Button>
              <Button type="danger">错误按钮</Button>
           </CodeCollapse>
        </Content>
      </Col>
  </Row>

  <h4>图标按钮</h4>
  <Row>
      <Col>
        <Content>
           <CodeCollapse :code='`
  <Button icon="address-book"></Button>
  <Button icon="address-card"></Button>
  <Button icon="anchor"></Button>
  <Button icon="book"></Button>
  <Button icon="adjust">带文字哦</Button>`'>
              <Button icon="address-book"></Button>
              <Button icon="address-card"></Button>
              <Button icon="anchor"></Button>
              <Button icon="book"></Button>
              <Button icon="adjust">带文字哦</Button>
           </CodeCollapse>
        </Content>
      </Col>
  </Row>
  <h4>按钮尺寸</h4>
  <Row>
      <Col>
        <Content>
           <CodeCollapse :code='`
  <Button size="small">默认按钮</Button>
  <Button size="large" type="primary">主按钮</Button>
  <Button size="small" type="success">成功按钮</Button>
  <Button type="info">信息按钮</Button>
  <Button type="warning">警告按钮</Button>
  <Button type="danger">错误按钮</Button>`'>
              <Button size="small">默认按钮</Button>
              <Button size="large" type="primary">主按钮</Button>
              <Button size="small" type="success">成功按钮</Button>
              <Button type="info">信息按钮</Button>
              <Button type="warning">警告按钮</Button>
              <Button type="danger">错误按钮</Button>
           </CodeCollapse>
        </Content>
      </Col>
  </Row>
  <h4>不可用状态</h4>
    <Row>
      <Col>
        <Content>
           <CodeCollapse :code='`
  <Button disabled>默认按钮</Button>
  <Button type="primary" disabled>主按钮</Button>
  <Button type="success" disabled>成功按钮</Button>
  <Button type="info" disabled>信息按钮</Button>
  <Button type="warning" disabled>警告按钮</Button>
  <Button type="danger" disabled>错误按钮</Button>`'>
              <Button disabled>默认按钮</Button>
              <Button type="primary" disabled>主按钮</Button>
              <Button type="success" disabled>成功按钮</Button>
              <Button type="info" disabled>信息按钮</Button>
              <Button type="warning" disabled>警告按钮</Button>
              <Button type="danger" disabled>错误按钮</Button>
           </CodeCollapse>
        </Content>
      </Col>
  </Row>


</Container>
</template>

