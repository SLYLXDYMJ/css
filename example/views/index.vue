<template>
  <div class="container">
    <div class="row space-3">
      <div class="col-lg-4 col-xs-auto" v-for="$i in 10">
        <div style="background: red">
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
  @import "../../src/lib/utils";

</style>