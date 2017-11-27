<template>
  <div>
    <!-- Main Header -->
    <main-header></main-header>

    <main-sidebar></main-sidebar>

    <main-content class="container"></main-content>

  </div>
</template>

<script>
import mainHeader from "@/pages/header/mainHeader";
import mainSidebar from "@/pages/sidebar/mainSidebar";
import mainContent from "@/pages/content/mainContent";
import mainFooter from "@/pages/footer/mainFooter";

export default {
  components: {
    mainHeader,
    mainSidebar,
    mainContent,
    mainFooter
  }
};
</script>

<style lang="less" scoped>
.container{
  margin-left: 230px;
}
</style>
