<template>    
    <div id="smContentContainer">
        <div style="display: flex; flexDirection: column; alignItems:center; backgroundColor:rgba(0,0,0,0.7); width:100%; height:500px">
            <img
                style="position: absolute; left: 0px; zIndex: -10; width: 100%; height: 500px"
                :src="bgImg"
                fit="cover"
            />
            <div style="width:100%; paddingLeft:2%; marginTop: 1%;">
                <p align="left"><font color="white" size="5">Tetris by JoGa</font></p>
            </div>
            <div style="width:80%; height:75%; display:flex; flexDirection:row; alignItems:center; justifyContent:center;">
                <img 
                    style="width:auto; height:100%; fit:scale-down"
                    :src="sm1"
                />
                <div style="paddingLeft:5%">
                    <font color="white" size="7">A Simple Tetris Clone</font>
                    <br/>
                    <font color="white" size="3">a Tetris clone built on the JavaGameEngine by JoGa</font>
                    <br/>
                    <br/>
                    <el-button @click="onAppStoreClicked">Download Now</el-button>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import { scrypt } from 'crypto';
export default {
    name: "Tetris",
    data() {
        return {
            bgImg: require("../assets/tbjbg.jpg"),
            sm1: require("../assets/tbj1.png"),
            sm2: require("../assets/tbj1.png"),
            onAppStoreImg: require("../assets/onAppStore.png"),
        }
    },
    methods: {
        onAppStoreClicked() {
            window.location.href = "https://drive.google.com/uc?export=download&id=1qLLTrWe0WGCW_yd7ywpbXCOyO7q2f8qo"
        },
        ssClicked() {
            console.log("screenshipt clicked")
        }
    }
}
</script>

<style>

    .zoomButton {
        transition: transform .2s; /* Animation */
    }

    .zoomButton:hover {
        transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
    }

    #smContentContainer {
        display: flex;
        flex: 1;
        flex-direction: column;
        width: 100%;
        height: 100%;
        /* font-family: Helvetica */
    }

</style>