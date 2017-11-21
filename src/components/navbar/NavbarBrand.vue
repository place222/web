<template>
   <a class="navbar-brand" href="#">
        <slot></slot>
    </a>
</template>

<script>
/**
 * 导航条的图标
 */
export default {
  
}
</script>



<style lang="less">
@import "../../less/common.less";
// Brand/project name
.navbar-brand {
  float: left;
  padding: @navbar-padding-vertical @navbar-padding-horizontal;
  font-size: @font-size-large;
  line-height: @line-height-computed;
  height: @navbar-height;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  > img {
    display: block;
  }

  @media (min-width: @grid-float-breakpoint) {
    .navbar > .container &,
    .navbar > .container-fluid & {
      margin-left: -@navbar-padding-horizontal;
    }
  }
}
</style>
