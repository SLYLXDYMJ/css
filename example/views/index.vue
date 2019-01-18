<template>
  <div class="chunk">
    <readme class="markdown-body"/>
  </div>
</template>

<script>
  import Readme from '../../README.md';

  export default {
    name: 'page-index',
    components: {
      Readme
    }
  };
</script>

<style lang="scss" scoped>
  @import "../assets/style/utils";

  .chunk {
    @include res(color, red, (
      md: green,
      sm: pink,
      xs: black,
    ));
  }
</style>