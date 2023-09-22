<template>
  <div>
    <header class="header center">
        <a href="./index.html" class="header__logo">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z" fill="#CDA274"/>
            </svg>               
            <h4 class="header__heading">Interno</h4>
        </a>
        <div class="header__right">
            <nav class="header__nav">
<!-- Nav -->
                <NavComponent />
<!--  -->
            </nav>
        </div>
    </header>
  </div>
</template>

<script>
import NavComponent from '@/components/NavComponent.vue';


export default {
  name: 'HeaderComponent',
  components: {
    NavComponent
  },
  props: {
   
  },
    data(){
        return {
            navItems: [
                '/home', '/blog', '/project', 
           ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.header{
    padding-top: 53px;
    padding-bottom: 57px;
    display: flex;
    justify-content: space-between;

    &__logo{
        @extend %flex-center-y;
    }

    &__right{
        @extend %flex-center-y;
    }

    &__heading{
        color: #292F36;;
        font-family: DM Serif Display;
        font-size: 40px;
        line-height: 125%;
        margin-left: 10px;
    }


}


</style>
