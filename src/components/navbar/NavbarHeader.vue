<template>
  <div class="navbar-header">
     
    </div>
</template>



<style lang="less">
@import "../../less/common.less";
// Navbar heading
//
// Groups `.navbar-brand` and `.navbar-toggle` into a single component for easy
// styling of responsive aspects.

.navbar-header {
  &:extend(.clearfix all);

  @media (min-width: @grid-float-breakpoint) {
    float: left;
  }
}
</style>
