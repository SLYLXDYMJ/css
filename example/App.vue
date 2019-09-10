<template>
  <div class="container">
    <div class="row space-20">
      <div class="col-sm-6 col-xs-12 col-md-push-6 col-sm-push-4">
        <h1 class="fs-3 lh-1 mt-5 pt-5">123</h1>
      </div>
      <div class="col-sm-6 col-xs-12 col-md-pull-6 col-sm-pull-4">
        <h1 class="fs-4 item lh-9 m-10 p-10 text-align-md-center text-sm-bold">123</h1>
      </div>
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
    display: block;
    margin: 20px;
  }
</style>