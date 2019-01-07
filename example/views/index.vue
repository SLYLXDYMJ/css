<template>
  <div class="container">
    <div class="row space-3">
      <div class="col-lg-4 col-xs-auto" v-for="$i in 10">
        <div class="chunk">
          {{ $i }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page-index'
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