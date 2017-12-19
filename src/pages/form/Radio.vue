<template>
  <Container>
    <h2>Radio单选框</h2>

    <p>在一组备选项中进行单选</p>

    <h3>基础用法</h3>

    <ContainerContent>
      <div class="stand_radio">
        <div class="exsample">
          <Radio v-model="model1" value="123">可以</Radio>
          <Radio v-model="model1" value="1223">不可以</Radio>
          {{model1}}
        </div>
        <ElCollapseTransition>
          <div class="meta" v-show="hover1">
            <CodeSnippet :code="`
      <div class='exsample'>
        <Radio v-model='model1' value='123'>可以</Radio>
        <Radio v-model='model1' value='1223'>不可以</Radio>
        {{model1}}
      </div>`"></CodeSnippet>
          </div>
        </ElCollapseTransition>
        <div class="control" @click.stop="hover1=!hover1">
          <span>显示代码</span>
        </div>
      </div>
    </ContainerContent>

    <ContainerContent>

      <div class="stand_radio">
        <div class="exsample">
          <Radio v-model="model2" :value="true">可以</Radio>
            <Radio v-model="model2" :value="false">不可以</Radio>
            {{model2}}
        </div>
        <ElCollapseTransition>
          <div class="meta" v-show="hover2">
            <CodeSnippet :code='`
      <div class="exsample">
        <Radio v-model="model2" :value="true">可以</Radio>
        <Radio v-model="model2" :value="false">不可以</Radio>
        {{model2}}
      </div>`'></CodeSnippet>
          </div>
        </ElCollapseTransition>
        <div class="control" @click.stop="hover2=!hover2">
          <span>显示代码</span>
        </div>
      </div>
    </ContainerContent>

    <h3>禁用状态</h3>

    <ContainerContent>
      <div class="stand_radio">
        <div class="exsample">
          <Radio v-model="model3" :value="'123'" disabled>可以</Radio>
          <Radio v-model="model3" :value="'1223'" disabled>不可以</Radio>
          {{model3}}
        </div>
        <ElCollapseTransition>
          <div class="meta" v-show="hover3">
            <CodeSnippet :code='`
      <div class="exsample">
        <Radio v-model="model3" value="123" disabled>可以</Radio>
        <Radio v-model="model3" value="1223" disabled>不可以</Radio>
        {{model3}}
      </div>`'></CodeSnippet>
          </div>
        </ElCollapseTransition>
        <div class="control" @click.stop="hover3=!hover3">
          <span>显示代码</span>
        </div>
      </div>
    </ContainerContent>

    <h3>分组</h3>

    <ContainerContent>
        <div class="stand_radio">
          <div class="exsample">
            <RadioGroup  v-model="model4">
              <Radio value="123">可以</Radio>
              <Radio value="1223">不可以</Radio>
            </RadioGroup>
            {{model4}}
          </div>
          <ElCollapseTransition>
            <div class="meta" v-show="hover4">
              <CodeSnippet :code='`
        <div class="exsample">
          <RadioGroup  v-model="model4">
            <Radio value="123">可以</Radio>
            <Radio value="1223">不可以</Radio>
          </RadioGroup>
          {{model4}}
        </div>`'></CodeSnippet>
            </div>
          </ElCollapseTransition>
          <div class="control" @click.stop="hover4=!hover4">
            <span>显示代码</span>
          </div>
        </div>
    </ContainerContent>
  </Container>
</template>

<script>
import Radio from "@/components/Form/Radio/Radio";
import RadioGroup from "@/components/Form/Radio/RadioGroup";
import ElCollapseTransition from "@/mixins/transitions/collapse-transition";
import CodeSnippet from '@/components/Other/CodeSnippet'
import Container from '@/components/Grid/Container'
import ContainerContent from '@/components/Grid/ContainerContent'


export default {
  data() {
    return {
      model1: null,
      model2: null,
      model3: null,
      model4: null,
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false
    };
  },
  components: {
    Radio,
    RadioGroup,
    CodeSnippet,
    Container,
    ContainerContent,
    ElCollapseTransition
  }
};
</script>

<style lang="less" scoped>
.stand_radio {
  border: 1px solid #eee;
  border-radius: 3px;
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
    0 2px 4px 0 rgba(232, 237, 250, 0.5);
  .exsample {
    padding: 25px 10px;
    border-bottom: 1px solid #eee;
  }
  .meta {
    background-color: #fafafa;
  }
  .control {
    border-top: 1px solid #eee;
    line-height: 50px;
    text-align: center;
    min-height: 50px;
    span {
      opacity: 0;
      transition: all 0.2s;
      margin-left: 50px;
    }
    &:hover {
      cursor: pointer;
      color: lighten(blue, 10%);
      span {
        margin: 0;
        opacity: 1;
      }
    }
  }
}
</style>
