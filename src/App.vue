<template>
  <div id="app">
    <b-navbar id="navBar" class="bd-navbar flex-column flex-md-row navbar-dark navbar-expand" type="dark" variant="dark" :sticky="true">
      <b-navbar-brand to="/" class="mr-0 mr-md-2"><font face="Aladin-Regular">JoGaSoftware</font></b-navbar-brand>
      
        <b-navbar-nav is-nav class="bd-navbar-nav flex-row">
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item-dropdown text="Products">
              <b-dropdown-item to="/simpleMetronome">Simple Metronome</b-dropdown-item>
              <b-dropdown-item to="/linkMultiplier">Link Multiplier</b-dropdown-item>
              <b-dropdown-item to="/tofuFighter">Tofu Fighter</b-dropdown-item>
              <b-dropdown-item to="/tetris">Tetris</b-dropdown-item>
            </b-nav-item-dropdown>

            <!-- <b-nav-item to="/resume">Resume</b-nav-item> -->
            <b-nav-item to="/contact">Contact Us</b-nav-item>
        </b-navbar-nav>
      
    </b-navbar>
      <router-view/>
      <div class="fluid-container footer">
        <joga-footer/>
      </div>
  </div>
</template>

<script>

import router from './router/router'
import jogaFooter from './components/jogaFooter'

export default {
  name: 'app',
  components: {
    "joga-footer": jogaFooter
  },
}
</script>

<style>

  @font-face {
    font-family: "Aladin-Regular";
    src: url("./assets/fonts/Aladin-Regular.ttf");
    font-size: 12
  }

  @font-face {
    font-family: "futur";
    src: url("./assets/fonts/futur.ttf");
    font-size: 12
  }

  @font-face {
    font-family: "FontAwesome5Brands";
    src: url("./assets/fonts/FontAwesome5Brands.otf");
    font-size: 12
  }

  @font-face {
    font-family: "FontAwesomeSolid";
    src: url("./assets/fonts/FontAwesomeSolid.otf");
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000;
    font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  #navBar {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

</style>
