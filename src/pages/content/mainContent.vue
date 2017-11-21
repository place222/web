<template>
    <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Page Header
        <small>Optional description</small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
        <li class="active">Here</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
        <!--------------------------
        | Your Page Content Here |
        -------------------------->
      <alert dismissable="true" title="传入标题" alerttype="1"></alert>

    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import Alert from "@/components/alert/Alert";
export default {
  name: "mainContent",
  components: {
    Alert
  }
};
</script>

