<template>
           <router-view></router-view>
</template>

<script>
//生命周期的测试
import Life from "@/components/Life";
export default {
  name: "mainContent",
  components: {
    Life
  },
  methods: {}
};
</script>

