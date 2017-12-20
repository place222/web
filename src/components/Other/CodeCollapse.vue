<template>
  <div class="stand_radio">
    <div class="exsample">
      <slot></slot>
    </div>
    <ElCollapseTransition>
      <div class="meta" v-show="show">
        <CodeSnippet :code='code'></CodeSnippet>
      </div>
    </ElCollapseTransition>
    <div class="control" @click.stop="show=!show">
      <span>显示代码</span>
    </div>
  </div>
</template>


<script>
import ElCollapseTransition from "@/mixins/transitions/collapse-transition";
import CodeSnippet from "@/components/Other/CodeSnippet";

export default {
  components:{
    ElCollapseTransition,
    CodeSnippet
  },
  props: {
    code: String
  },
  data() {
    return {
      show: false
    };
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
