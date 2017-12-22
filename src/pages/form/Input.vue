<template>
  <Container>
    <h4>输入框</h4>
    <GridRow>
      <GridCol>
        <ContainerContent>
          <CodeCollapse>
            <Input placeholder="这个是占位符" v-model="value1"></Input>
            <span class="">{{value1}}</span>
          </CodeCollapse>
        </ContainerContent>
      </GridCol>
    </GridRow>
    <h4>禁用状态</h4>
    <GridRow>
      <GridCol>
        <ContainerContent>
          <CodeCollapse>
            <Input placeholder="这个是占位符" v-model="value2" disabled></Input>
            <span class="">{{value2}}</span>
          </CodeCollapse>
        </ContainerContent>
      </GridCol>
    </GridRow>
    <h4>带Icon</h4>
    <h4>文本域(多行)</h4>
    <h4>复合型输入框</h4>
  </Container>
</template>

<script>
import Input from "@/components/Form/Input/Input";
import CodeCollapse from "@/components/Other/CodeCollapse";
import GridRow from "@/components/Grid/GridRow";
import GridCol from "@/components/Grid/GridCol";
import Container from "@/components/Grid/Container";
import ContainerContent from "@/components/Grid/ContainerContent";

export default {
  components: {
    Input,
    CodeCollapse,
    Container,
    ContainerContent,
    GridRow,
    GridCol
  },
  data() {
    return {
      value1: "",
      value2: ""
    };
  }
};
</script>

