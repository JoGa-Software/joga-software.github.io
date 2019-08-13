<template>
  <div id="app">
    <h1 style="paddingTop:40px; marginBottom:0px; color:#acf2e4; backgroundColor:#2a2a30">JoGa Software</h1>
    <el-menu 
      :default-active="activeIndex" 
      class="el-menu-demo" 
      mode='horizontal' 
      @select="handleSelect"
      background-color="#2a2a30"
      text-color="#ff7ab2"
      active-text-color="#68dafa"
      style="borderColor:black; borderWidth:2px"
      router
    >
      <el-menu-item 
        index='1' 
        :route="{ path: '/' }"
        
      >
        <i class="el-icon-s-home" style="color:#ff7ab2"></i>
        <span>Home</span>
      </el-menu-item>

      <el-submenu 
        index='2' 
        :route="{ path: '/projects' }"
      >
        <template slot="title">
          <i class="el-icon-cpu" style="color:#ff7ab2"></i>
          <span>Projects</span>
        </template>
        <el-menu-item index="2-1" :route="{ path: '/iosGame' }">
          IOS Game
        </el-menu-item>
        <el-menu-item index="2-1" :route="{ path: '/simpleMetronome' }">
          Simple Metronome
        </el-menu-item>
      </el-submenu>

      <el-menu-item index='3' :route="{ path: '/resume' }">
        <i class="el-icon-s-promotion" style="color:#ff7ab2"></i>
        <span>Resume</span>
      </el-menu-item>
      <el-menu-item index='4' :route="{ path: '/contact' }">
        <i class="el-icon-s-promotion" style="color:#ff7ab2"></i>
        <span>Contact</span>
      </el-menu-item>
    </el-menu>
    <div id="contentContainer">
      <router-view/>
    </div>
    <h5 style="position: fixed; width:100%; bottom: 0px; fontSize:10px; color:#7d8a96">JoGa Software © 2019</h5>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keypath) {
      console.log(key, keypath)
    }
  }
}
</script>

<style>

  @font-face {
    font-family: "Minercraftory";
    src: url("./assets/Minercraftory.ttf");
    font-size: 12
  }

  #app {
    font-family: 'Minercraftory';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #e27466;
    height: '100%';
  }

  #contentContainer {
    width: 100%;
    height: 100%;
    background-color: transparent
  }

</style>
