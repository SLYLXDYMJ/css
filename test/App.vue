<template>
  <div class="container">
    <div class="row space-2">
      <div class="col-6">
        <div class="item"></div>
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
    @extend %hidden-md-only;
    display: block;
    height: vw(50px);
  }
</style>