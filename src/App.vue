<script >
import Header from './components/Header.vue';
import Main from './components/Main.vue';
export default {
  components: {
    Header,
    Main
  },
  data() {
    return {

    }
  },
}
</script>

<template>
  <div id="container">

    <!-- header con nav bar -->
    <Header/>
    
    <!-- elenco film  -->
    <Main/>
  </div>
</template>

<style lang="scss">
@use './style/general.scss' as *;
@use './style/partials/mixin' as *;
@use './style/partials/variables' as *;

#container {
  height: 100vh;
}
</style>
