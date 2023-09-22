<template>
  <div id="app">
    <HeaderComponent/>
    <router-view></router-view>
    <FooterComponent/>
  </div>
</template>

<script>

import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import { mapActions } from 'vuex';


export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
  methods: {
    ...mapActions(['feachProducts', 'CHANGR_PRODUCT_LIST']),
  },
  created(){
    this.feachProducts(this.products);
    this.$router.push({name: 'Home'});
  }
}
</script>

<style lang="scss">

#app { 

  font-family: 'DM Serif Display', serif;
  font-family: 'Jost', sans-serif;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
