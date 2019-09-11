<template>
  <div class="container">
    <h1 class="flex align-items-center-xs-only">asd</h1>
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
    @include res(font-size, 50px, (
      md: 40px,
      sm: 30px,
      xs: 20px
    ))
  }
</style>