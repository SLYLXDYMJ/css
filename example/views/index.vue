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

  .chunk {
    @include res(color, red, (
      (name: lg, val: blue),
      (name: md, val: green),
      (name: sm, val: pink),
      (name: xs, val: black),
    ))
  }
</style>