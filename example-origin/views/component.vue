<template>
  <readme class="markdown-body"/>
</template>

<script>
  import Readme from '../../src/lib/components/README.md';

  export default {
    name: 'page-component',
    components: {
      Readme
    }
  };
</script>

<style lang="scss" scoped>
  @import "../assets/style/utils";
</style>