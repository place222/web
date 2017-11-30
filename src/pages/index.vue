<template>
  <div>
    <!-- Main Header -->
    <MainHeader></MainHeader>

    <MainSidebar></MainSidebar>

    <MainContent class="container"></MainContent>

  </div>
</template>

<script>
import MainHeader from "@/pages/base/MainHeader";
import MainSidebar from "@/pages/base/MainSidebar";
import MainContent from "@/pages/base/MainContent";
import MainFooter from "@/pages/base/mainFooter";

export default {
  components: {
    MainHeader,
    MainSidebar,
    MainContent,
    MainFooter
  }
};
</script>

<style lang="less" scoped>
.container{
  margin-left: 230px;
}
</style>
