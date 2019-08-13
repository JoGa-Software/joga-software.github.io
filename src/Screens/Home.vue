<template>
    <div id="homeContainer">
        <h1>Home</h1>    
        <b-row style="justifyContent:center; alignItems:center; width: 100%;">
            <el-carousel trigger="click" @click="clicked" style="width:70%">
                <el-carousel-item v-for="(item, key, index) in items" :key="key">
                    <el-image
                        style="width: 100%; height: 100%"
                        :src="item.img"
                        fit="contain"
                    />
                </el-carousel-item>
            </el-carousel>
        </b-row>
    </div>
</template>

<script>
import { scrypt } from 'crypto';
export default {
    name: "Home",
    data() {
        return {
            items: [
                { img: require('../assets/1.png') },
                { img: require('../assets/2.png') },
            ]
        }
    },
    methods: {
        clicked() {
            console.log("got clicked")
        }
    }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    margin: 0;
  }


  #homeContainer {
    height: 100%;
    align-items: center;
    justify-content: center; 
    padding-top: 10px
  }
</style>