<template>
    <ul class="breadcrumbs">
        <li class="breadcrumbs__li" 
            v-for="(item, index) in breadcrumbs" 
            :key="index"
            >
            {{ item }}
        </li>
    </ul>
  </template>
  
  <script>
  
  export default {
    name: 'BreadcrumbsComp',
    props: {
        breadcrumbs: {
            type: Array,
            required: true
        } 
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$widthSite: 1200px;
$color-title: #292F36;
$color-text: #4D5053;

.breadcrumbs{
    display: flex;
    cursor: pointer;

    &__li{
        color: $color-text;
        font-family: Jost;
        line-height: 150%; /* 24px */
    }

    &__li:not(:last-child)::after{
        padding: 3px;
        color: $color-text;
        content: "\002F";
        padding-left: 8px;
        padding-right: 8px;
    }
}
  </style>