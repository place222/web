<template>
  <Container>
    <h1>Radio单选框</h1>
    <p>在一组备选项中进行单选</p>

    <h4>基础用法</h4>
    <GridRow>
      <GridCol :span='12'>
        <ContainerContent>
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
      </ContainerContent>
      </GridCol>
      <GridCol :span='12'>
        <ContainerContent>
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
        </ContainerContent>
      </GridCol>
    </GridRow>
    <h4>禁用状态</h4>
    <GridRow>
      <GridCol>
        <ContainerContent>
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
        </ContainerContent>
      </GridCol>
    </GridRow>

    <h4>分组</h4>
    <GridRow>
      <GridCol>
        <ContainerContent>
          <CodeCollapse :code='`
    <div class="exsample">
      <RadioGroup  v-model="model4">
        <Radio value="123">可以</Radio>
        <Radio value="1223">不可以</Radio>
      </RadioGroup>
      {{model4}}
    </div>`'>
              <RadioGroup  v-model="model4">
                <Radio value="123">可以</Radio>
                <Radio value="1223">不可以</Radio>
              </RadioGroup>
              {{model4}}
          </CodeCollapse>
      </ContainerContent>
      </GridCol>
    </GridRow>
  </Container>
</template>

<script>
import Radio from "@/components/Form/Radio/Radio";
import RadioGroup from "@/components/Form/Radio/RadioGroup";
import CodeCollapse from "@/components/Other/CodeCollapse";
import GridRow from "@/components/Grid/GridRow";
import GridCol from "@/components/Grid/GridCol";
import Container from "@/components/Grid/Container";
import ContainerContent from "@/components/Grid/ContainerContent";

export default {
  data() {
    return {
      model1: null,
      model2: null,
      model3: null,
      model4: null
    };
  },
  components: {
    Radio,
    RadioGroup,
    CodeCollapse,
    Container,
    ContainerContent,
    GridRow,
    GridCol
  }
};
</script>

