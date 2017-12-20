<template>
  <div class="container">
      <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.container {
  padding: 20px;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #ccc;
  transition: all .1s;
  &:hover {
    box-shadow: 0 0 5px 2px #ccc;
  }
}
</style>
