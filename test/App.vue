<template>
  <div class="container">
    <div class="row space-2">
      <div class="col-6">123123</div>
      <div class="col-6">123123</div>
    </div>
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