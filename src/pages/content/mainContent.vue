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
        <router-view></router-view>

    </section>
  </div>
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

