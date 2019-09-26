<template>
  <div class="container">
    <div class="row space-2">
      <div class="col-6"><b style="height: 40px; display: block; background-color: red;"></b></div>
      <div class="col-6"><b style="height: 40px; display: block; background-color: pink;"></b></div>
      <div class="col-6"><b style="height: 40px; display: block; background-color: green;"></b></div>
      <div class="col-6"><b style="height: 40px; display: block; background-color: yellow;"></b></div>
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