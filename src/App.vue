<template>
  <div id="app">
    <HeaderComponent/>
    <!-- <Home/> -->
    <!-- <BlogComp/> -->
    <BlogDetails/>
    <FooterComponent/>
  </div>
</template>

<script>

import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
// import Home from './pages/Home.vue';
// import BlogComp from './pages/Blog.vue';
import BlogDetails from './pages/BlogDetails.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    // Home,
    // BlogComp,
    BlogDetails,
    FooterComponent
  }
}
</script>

<style lang="scss">

/* Reset and base styles  */
* {
  padding: 0px;
  margin: 0px;
  border: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Links */
a, a:link, a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

/* Common */
aside, nav, footer, header, section, main {
  display: block;
}

h1, h2, h3, h4, h5, h6, p {
  font-size: inherit;
  font-weight: inherit;
}

ul, ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

img, svg {
  max-width: 100%;
  height: auto;
}

address {
  font-style: normal;
}

/* Form */
input, textarea, button, select {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background-color: transparent;
}

input::-ms-clear {
  display: none;
}

button, input[type=submit] {
  display: inline-block;
  box-shadow: none;
  background-color: transparent;
  background: none;
  cursor: pointer;
}

input:focus, input:active,
button:focus, button:active {
  outline: none;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

label {
  cursor: pointer;
}

legend {
  display: block;
}/*# sourceMappingURL=reset.css.map */


#app {
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


  font-family: 'DM Serif Display', serif;
  font-family: 'Jost', sans-serif;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
  }
}
</style>
