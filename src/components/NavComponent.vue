<template>
    <ul class="nav">
        <router-link class="nav__item" to="/home">Home</router-link>
        <router-link class="nav__item" to="/blog">Blog</router-link>
        <router-link class="nav__item" to="/project">Project</router-link>
    </ul>
</template>
  
  <script>
  export default {
    name: 'NavComponent',
    props: {
 
    },
    data(){
        return {
        
        }
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.nav{
    @extend %flex-center-y;

    &__item{
        margin-left: 30px;
        color: $color-title;
        text-align: center;
        font-family: Jost;
        font-size: 20px;
        line-height: 125%;
    }
}

.nav.footer-nav{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    }
    .nav.footer-nav>a{
        color: $color-text;
            font-family: Jost;
            font-size: 22px;
            line-height: 300%; /* 66px */
            letter-spacing: 0.22px; 
            margin-left: 0;
    }
</style>
