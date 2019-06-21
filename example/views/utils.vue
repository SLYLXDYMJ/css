<template>
  <readme class="markdown-body"/>
</template>

<script>
  import Readme from '../../src/utils/README.md';

  export default {
    name: 'page-utils',
    components: {
      Readme
    }
  };
</script>

<style lang="scss" scoped>
  @import "../assets/style/utils";
</style>