<template>
  <Container>
    <h2>checkbox复选框</h2>

    <Row>
      <Col :span='12'>
        <Content>
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
        </Content>
      </Col>
      <Col :span='12'>
        <Content>
    <p>在一组备选项中进行复选(这个是没有value的情况下,只能作为单选true false存在)</p>
           <CodeCollapse :code='`
    <CheckBox v-model="model2" true-value="123" false-value="456">1</CheckBox>
    {{model2}}`'>
               <CheckBox v-model="model2" true-value="123" false-value="456">1</CheckBox>
               {{model2}}
           </CodeCollapse>
        </Content>
      </Col>
  </Row>
    <h4>禁用状态</h4>
    <Row>
      <Col>
        <Content>
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
        </Content>
      </Col>
  </Row>
    <h4>分组</h4>
    <Row>
      <Col>
        <Content>
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
        </Content>
      </Col>
  </Row>

  </Container>
</template>
<script>
import CheckBox from "@/components/Form/CheckBox/CheckBox";
import CheckBoxGroup from "@/components/Form/CheckBox/CheckBoxGroup";
import Row from "@/components/Grid/Row";
import Col from "@/components/Grid/Col";
import Container from "@/components/Grid/Container";
import Content from "@/components/Other/Content";
import CodeCollapse from "@/components/Other/CodeCollapse";

export default {
  components: {
    CheckBox,
    CheckBoxGroup,
    CodeCollapse,
    Row,
    Col,
    Container,
    Content
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

