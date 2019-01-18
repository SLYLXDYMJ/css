<template>
  <main id="app">
    <!-- header -->
    <header class="header">
      <div class="container">
        <nav class="nav flex align-items-center justify-content-center">
          <router-link
            class="nav-item"
            v-for="name in navArr"
            :key="name"
            :to="{ name }">
            {{ name }}
          </router-link>
        </nav>
      </div>
    </header>
    <!-- body -->
    <section class="body">
      <div class="container">
        <div class="content">
          <router-view/>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        navArr: [
          'page-index',
          'page-reset',
          'page-utils',
          'page-layout',
          'page-component'
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
  }
  .nav {
    height: 60px;
    background-color: #fff;
    &-item {
      padding: 10px;
      font-size: 20px;
      border-bottom: 1px solid rgba(#000, .2);
    }
  }
  .body {
    padding-top: 60px;
  }
  .content {
    padding: 15px;
  }

</style>