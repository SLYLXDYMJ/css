<template>
  <div class="container">
    <div class="row space-2">
      <div class="col-6">
        <div class="item">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
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
  @import "./styles/util";

  .item {
    position: relative;
    display: block;
    height: 100px;
    width: 100px;
    margin: 200px;
    i {
      position: absolute;
      background-color: red;
    }
    i:nth-child(1) {
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      @include px1('x', 'top');
    }
    i:nth-child(2) {
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      @include px1('x', 'bottom');
    }
    i:nth-child(3) {
      left: 0;
      top: 0;
      height: 100%;
      width: 1px;
      @include px1('y', 'left');
    }
    i:nth-child(4) {
      right: 0;
      top: 0;
      height: 100%;
      width: 1px;
      @include px1('y', 'right');
    }
  }
</style>