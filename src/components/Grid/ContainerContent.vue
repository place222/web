<template>
  <div class="container">
      <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.container {
  margin: 5px;
  padding: 20px;
  border-radius: 5px;
  background: #fff;
  &:hover {
    box-shadow: 0 0 5px 2px #ccc;
  }
}
</style>
