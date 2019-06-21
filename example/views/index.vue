<template>
  <readme class="markdown-body"/>
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
</style>