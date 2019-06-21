<template>
  <readme class="markdown-body"/>
</template>

<script>
  import Readme from '../../src/layout/README.md';

  export default {
    name: 'page-layout',
    components: {
      Readme
    }
  };
</script>

<style lang="scss" scoped>
  @import "../assets/style/utils";
</style>