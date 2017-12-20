<template>
<Container>
  <h4>按钮类型</h4>
  <GridRow>
      <GridCol>
        <ContainerContent>
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
        </ContainerContent>
      </GridCol>
  </GridRow>

  <h4>图标按钮</h4>
  <h4>按钮尺寸</h4>
  <h4>不可用状态</h4>
    <GridRow>
      <GridCol>
        <ContainerContent>
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
        </ContainerContent>
      </GridCol>
  </GridRow>

  <h4>按钮组</h4>
</Container>
</template>

<script>
import GridRow from "@/components/Grid/GridRow";
import GridCol from "@/components/Grid/GridCol";
import Container from "@/components/Grid/Container";
import ContainerContent from "@/components/Grid/ContainerContent";
import CodeCollapse from "@/components/Other/CodeCollapse";
import Button from "@/components/Button/Button";


export default {
  components: {
    GridRow,
    GridCol,
    Button,
    Container,
    ContainerContent,
    CodeCollapse
  }
};
</script>
