<template>
  <div class="container">
    <div class="row">
      <div v-for="$i in 20" style="width: 20%">
        {{ $i }}
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

</style>