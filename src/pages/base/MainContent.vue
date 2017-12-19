<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
//生命周期的测试
import Life from "@/components/Life";
export default {
  name: "MainContent",
  components: {
    Life
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.content{
  min-height: 900px;
  background: #f0f0f0;
}
</style>
