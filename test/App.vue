<template>
  <div class="container">
    <h1 class="flex align-items-center-xs-only">asd</h1>
    <h3 class="item">123</h3>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss" scoped>
  @import "./styles/util";
  .item {
    @extend %hidden-md-only;
    display: block;
    margin: 20px;
  }
</style>