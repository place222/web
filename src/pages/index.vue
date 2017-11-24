<template>
  <div class="wrapper">
    <!-- Main Header -->
    <main-header></main-header>
    <!-- Left side column. contains the logo and sidebar -->
    <main-sidebar></main-sidebar>

    <!-- Content Wrapper. Contains page content -->
    <main-content></main-content>
    <!-- /.content-wrapper -->

    <!-- Main Footer -->
    <main-footer></main-footer>

    <!-- Control Sidebar -->
    <control-sidebar></control-sidebar>
    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
    immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
  </div>
</template>

<script>
import mainHeader from "@/pages/header/mainHeader";
import mainSidebar from "@/pages/sidebar/mainSidebar";
import mainContent from "@/pages/content/mainContent";
import mainFooter from "@/pages/footer/mainFooter";
import controlSidebar from "@/pages/sidebar/controlSidebar";

export default {
  components: {
    mainHeader,
    mainSidebar,
    mainContent,
    mainFooter,
    controlSidebar
  }
};
</script>
