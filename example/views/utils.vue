<template>
  <div>
    <readme class="markdown-body"/>
    <div class="border"></div>
  </div>
</template>

<script>
  import Readme from '../../src/lib/README.md';

  export default {
    name: 'page-utils',
    components: {
      Readme
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../src/lib/utils";

  .border {
    @include one-px('x', center bottom);
    height: 1px;
    width: 100%;
    background-color: red;
  }
</style>