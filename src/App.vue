<template>
  <div id="app">
    <Main></Main>
  </div>
</template>

<script>
import Main from '@/pages/Main.vue';
export default {
  components: {
    Main,
  },
};
</script>

<style lang="scss">
#app {
  margin: 0 auto;
  max-width: 1620px;
  padding: 0 40px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  font-weight: 400;
  box-sizing: border-box;

  @media (max-width: 750px) {
    padding: 0 10px;
  }
}
</style>
