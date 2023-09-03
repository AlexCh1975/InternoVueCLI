<template>
    <ul class="nav">
        <li class="nav__item" 
            v-for="(navItem, index) in navItems"
            :key="index"
            >
            <a href="#">{{ navItem }}</a>
        </li>
    </ul>
</template>
  
  <script>
  export default {
    name: 'NavComponent',
    props: {
     navItems: {
        type: Array,
        required: true
     }
    },
    data(){
        return {
           
        }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$widthSite: 1200px;
$color-title: #292F36;
$color-text: #4D5053;

.center {
padding-left: calc(50% - 600px);
padding-right: calc(50% - 600px);
}

%flex-center{
    display: flex;
    align-items: center;
    justify-content: center;
}

%flex-center-x{
    display: flex;
    justify-content: center;
}

%flex-center-y{
    display: flex;
    align-items: center;
}  

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
</style>
