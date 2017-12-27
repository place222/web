<template>
  <Container>
    <h1>Radio单选框</h1>
    <p>在一组备选项中进行单选</p>

    <h4>基础用法</h4>
    <Row>
      <Col :span='12'>
        <Content>
          <CodeCollapse :code="`
    <div class='exsample'>
      <Radio v-model='model1' value='123'>可以</Radio>
      <Radio v-model='model1' value='1223'>不可以</Radio>
      {{model1}}
    </div>`">
              <Radio v-model="model1" value="123">可以</Radio>
              <Radio v-model="model1" value="1223">不可以</Radio>
              {{model1}}
          </CodeCollapse>
      </Content>
      </Col>
      <Col :span='12'>
        <Content>
          <CodeCollapse :code='`
    <div class="exsample">
      <Radio v-model="model2" :value="true">可以</Radio>
      <Radio v-model="model2" :value="false">不可以</Radio>
      {{model2}}
    </div>`'>
              <Radio v-model="model2" :value="true">可以</Radio>
                <Radio v-model="model2" :value="false">不可以</Radio>
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
    <div class="exsample">
      <Radio v-model="model3" value="123" disabled>可以</Radio>
      <Radio v-model="model3" value="1223" disabled>不可以</Radio>
      {{model3}}
    </div>`'>
              <Radio v-model="model3" :value="'123'" disabled>可以</Radio>
              <Radio v-model="model3" :value="'1223'" disabled>不可以</Radio>
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
    <div class="exsample">
      <RadioGroup  v-model="model4">
        <Radio value="123">可以</Radio>
        <Radio value="1223">不可以</Radio>
      </RadioGroup>
      {{model4}}
    </div>`'>
              <RadioGroup v-model="model4">
                <Radio value="123">可以</Radio>
                <Radio value="1223">不可以</Radio>
              </RadioGroup>
              {{model4}}
          </CodeCollapse>
      </Content>
      </Col>
    </Row>


    <h4>button组</h4>
    <Row>
      <Col>
        <Content>
          <CodeCollapse :code='`
    <div class="exsample">
      <RadioGroup  v-model="model5" type="button">
        <Radio value="123">可以</Radio>
        <Radio value="1223">不可以</Radio>
        <Radio value="1423">不可以</Radio>
      </RadioGroup>
      {{model5}}
    </div>`'>
              <RadioGroup v-model="model5" type="button">
                <Radio value="123">可以</Radio>
                <Radio value="1223">不可以</Radio>
                <Radio value="1423">不可以</Radio>
              </RadioGroup>
              {{model5}}
          </CodeCollapse>
      </Content>
      </Col>
    </Row>
  </Container>
</template>

<script>
import Radio from "@/components/Form/Radio/Radio";
import RadioGroup from "@/components/Form/Radio/RadioGroup";
import CodeCollapse from "@/components/Other/CodeCollapse";
import Row from "@/components/Grid/Row";
import Col from "@/components/Grid/Col";
import Container from "@/components/Grid/Container";
import Content from "@/components/Other/Content";

export default {
  data() {
    return {
      model1: null,
      model2: null,
      model3: null,
      model4: null,
      model5: null
    };
  },
  components: {
    Radio,
    RadioGroup,
    CodeCollapse,
    Container,
    Content,
    Row,
    Col
  }
};
</script>

