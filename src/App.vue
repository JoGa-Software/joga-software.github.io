<template>
  <div id="app">
    <div style="width:100%; height:100%; backgroundColor:#2a2a30">
      <font size="7" face="Aladin-Regular" style="paddingTop:1%; paddingBottom:2%; marginBottom:0px; color:#fff;">JoGa Software</font>
    </div>
    <el-menu 
      :default-active="activeLink" 
      class="el-menu-demo" 
      mode='horizontal' 
      background-color="#2a2a30"
      text-color="#fff"
      active-text-color="#acf2e4"
      style="borderColor:black; borderWidth:2px"
      router
    >
      <el-menu-item 
        index='/' 
        :route="{ path: '/' }"
      >
        <i class="el-icon-s-home" style="color:#acf2e4"></i>
        <span>Home</span>
      </el-menu-item>

      <el-submenu 
        index='/projects' 
        :route="{ path: '/projects' }"
      >
        <template slot="title">
          <i class="el-icon-cpu" style="color:#acf2e4"></i>
          <span>Projects</span>
        </template>
        <el-menu-item index="/iosGame" :route="{ path: '/iosGame' }">
          IOS Game
        </el-menu-item>
        <el-menu-item index="/simpleMetronome" :route="{ path: '/simpleMetronome' }">
          Simple Metronome
        </el-menu-item>
        <el-menu-item index="/tofuFighter" :route="{ path: '/tofuFighter' }">
          Tofu Fighter
        </el-menu-item>
        <el-menu-item index="/tetris" :route="{ path: '/tetris' }">
          Tetris
        </el-menu-item>
      </el-submenu>

      <el-menu-item index='/resume' :route="{ path: '/resume' }">
        <i class="el-icon-s-promotion" style="color:#acf2e4"></i>
        <span>Resume</span>
      </el-menu-item>
      <el-menu-item index='/contact' :route="{ path: '/contact' }">
        <i class="el-icon-s-promotion" style="color:#acf2e4"></i>
        <span>Contact</span>
      </el-menu-item>
    </el-menu>
    <div id="contentContainer">
      <router-view/>
    </div>
    <h5 style="position: fixed; paddingLeft:1%; bottom: 0px; fontSize:10px; color:#7d8a96">JoGa Software © 2019</h5>
  </div>
</template>

<script>

import router from './router/router'

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      activeLink: null
    }
  },
  mounted: function(){
    this.activeLink = router.currentRoute.path;
  },
  watch: {
    $route (to, from) {
      this.activeLink = to.path;
    }
  },
  methods: {

  }
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
    font-size: 12
  }

  #app {
    font-family: 'futur';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000;
    height: '100%';
  }

  #contentContainer {
    width: 100%;
    height: 100%;
    background-color: transparent
  }

</style>
