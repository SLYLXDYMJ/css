<template>
  <readme class="markdown-body"/>
</template>

<script>
  import Readme from '../../src/lib/reset/README.md';

  export default {
    name: 'page-reset',
    components: {
      Readme
    }
  };
</script>

<style lang="scss" scoped>
  @import "../assets/style/utils";
</style>