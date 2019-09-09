<template>
  <div class="scroll-x">
    <div class="scroll-x-wrapper">
      <div class="scroll-x-item" v-for="i in 200">
        <a class="item" href="#">{{ i }}</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss" scoped>
  @import "./styles/utils";
  .item {
    display: block;
    margin: 20px;
  }
</style>