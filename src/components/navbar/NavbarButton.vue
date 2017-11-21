<template>
  
</template>



<style lang="less">
// Buttons in navbars
//
// Vertically center a button within a navbar (when *not* in a form).

.navbar-btn {
  .navbar-vertical-align(@input-height-base);

  &.btn-sm {
    .navbar-vertical-align(@input-height-small);
  }
  &.btn-xs {
    .navbar-vertical-align(22);
  }
}
</style>
