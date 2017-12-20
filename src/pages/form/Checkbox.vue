<template>
  <Container>
    <h2>checkbox复选框</h2>

    <GridRow>
      <GridCol :span='12'>
        <ContainerContent>
        <p>在一组备选项中进行复选(这个是value有值的情况下)</p>
           <CodeCollapse :code='`
    <CheckBox v-model="model1" value="first">1</CheckBox>
    <CheckBox v-model="model1" value="second">2</CheckBox>
    <CheckBox v-model="model1" value="third">3</CheckBox>
    {{model1}}`'>
              <CheckBox v-model="model1" value="first">1</CheckBox>
              <CheckBox v-model="model1" value="second">2</CheckBox>
              <CheckBox v-model="model1" value="third">3</CheckBox>
              {{model1}}
           </CodeCollapse>
        </ContainerContent>
      </GridCol>
      <GridCol :span='12'>
        <ContainerContent>
    <p>在一组备选项中进行复选(这个是没有value的情况下,只能作为单选true false存在)</p>
           <CodeCollapse :code='`
    <CheckBox v-model="model2" true-value="123" false-value="456">1</CheckBox>
    {{model2}}`'>
               <CheckBox v-model="model2" true-value="123" false-value="456">1</CheckBox>
               {{model2}}
           </CodeCollapse>
        </ContainerContent>
      </GridCol>
  </GridRow>
    <h4>禁用状态</h4>
    <GridRow>
      <GridCol>
        <ContainerContent>
           <CodeCollapse :code='`
    <CheckBox v-model="model3" value="first" disabled>1</CheckBox>
    <CheckBox v-model="model3" value="second" disabled>2</CheckBox>
    <CheckBox v-model="model3" value="third" disabled>3</CheckBox>
    {{model3}}`'>
              <CheckBox v-model="model3" value="first" disabled>1</CheckBox>
              <CheckBox v-model="model3" value="second" disabled>2</CheckBox>
              <CheckBox v-model="model3" value="third" disabled>3</CheckBox>
              {{model3}}
           </CodeCollapse>
        </ContainerContent>
      </GridCol>
  </GridRow>
    <h4>分组</h4>
    <GridRow>
      <GridCol>
        <ContainerContent>
           <CodeCollapse :code='`
    <CheckBoxGroup v-model="model4">
      <CheckBox value="first">1</CheckBox>
      <CheckBox value="second">2</CheckBox>
      <CheckBox value="third">3</CheckBox>
    </CheckBoxGroup>
    {{model4}}`'>
              <CheckBoxGroup v-model="model4">
                <CheckBox value="first">1</CheckBox>
                <CheckBox value="second">2</CheckBox>
                <CheckBox value="third">3</CheckBox>
              </CheckBoxGroup>
              {{model4}}
           </CodeCollapse>
        </ContainerContent>
      </GridCol>
  </GridRow>

  </Container>
</template>
<script>
import CheckBox from "@/components/Form/CheckBox/CheckBox";
import CheckBoxGroup from "@/components/Form/CheckBox/CheckBoxGroup";
import GridRow from "@/components/Grid/GridRow";
import GridCol from "@/components/Grid/GridCol";
import Container from "@/components/Grid/Container";
import ContainerContent from "@/components/Grid/ContainerContent";
import CodeCollapse from "@/components/Other/CodeCollapse";

export default {
  components: {
    CheckBox,
    CheckBoxGroup,
    CodeCollapse,
    GridRow,
    GridCol,
    Container,
    ContainerContent
  },
  data() {
    return {
      model1: [],
      model2: [],
      model3: [],
      model4: [],
      model5: []
    };
  }
};
</script>

