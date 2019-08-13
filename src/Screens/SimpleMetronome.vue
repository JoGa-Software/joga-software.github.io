<template>    
    <div id="smContentContainer">
        <div style="display: flex; flexDirection: column; alignItems:center; backgroundColor:rgba(0,0,0,0.7); width:100%; height:500px">
            <img
                style="position: absolute; left: 0px; zIndex: -10; width: 100%; height: 500px"
                :src="bgImg"
                fit="cover"
            />
            <div style="width:100%; paddingLeft:2%; marginTop: 1%;">
                <p align="left"><font color="white" size="5">Simple Metronome by JoGa</font></p>
            </div>
            <div style="width:80%; height:75%; display:flex; flexDirection:row; alignItems:center; justifyContent:center;">
                <img 
                    style="width:auto; height:100%; fit:scale-down"
                    :src="sm1"
                />
                <div style="paddingLeft:5%">
                    <font color="white" size="7">Simple, Yet Powerful</font>
                    <br/>
                    <font color="white" size="3">Simple Metronome is an easy to use free metronome app minus the clutter.</font>
                    <br/>
                    <img
                        class="zoomButton"
                        style="width:30%; height:auto; fit:scale-down; cursor: pointer; paddingTop:5%"
                        :src="onAppStoreImg"
                        @click="onAppStoreClicked"
                    />
                </div>
            </div>
        </div>
        <div style="display: flex; flexDirection: column; alignItems:center; justifyContent:center; backgroundColor:white; width:100%; height:700px">
            <div style="width:80%; height:80%; display:flex; flexDirection:row; alignItems:center; justifyContent:center;">
                <img 
                    style="width:auto; height:100%; fit:scale-down"
                    :src="sm2"
                />
                <div style="paddingLeft:10%; width: 50%; textAlign:left;">
                    <font color="black" size="7">Powerful Features</font>
                    <br/>
                    <font color="black" size="3">Simple Metronome Provides professional level features packed in an easy to use user interface.</font>
                    <br/>
                    <ul style="paddingTop:5%; color:black">
                        <li><font color="black" size="3">Time Signature and Subdivision adjustments</font></li>
                        <li><font color="black" size="3">Sound Selection</font></li>
                        <li><font color="black" size="3">Tap for tempo</font></li>
                        <li><font color="black" size="3">Beat Accentor and Visualizer</font></li>
                        <li><font color="black" size="3">and more...</font></li>
                    </ul>
                    <el-button @click="onAppStoreClicked">Download Now</el-button>
                </div>
            </div>
        </div>
        <div style="display: flex; flexDirection: column; alignItems:center;backgroundColor:#f4f4f4; width:100%; height:auto; paddingTop:2%; paddingBottom:2%">
            <font color="black" size="7">Screenshots</font>
            <el-carousel trigger="click" style="width:70%; paddingTop:3%;backgroundColor:rgba(0,0,0,0)" type="card">
                <el-carousel-item v-for="(item, key) in items" :key="key" style=" backgroundColor:rgba(0,0,0,0)">
                    <el-image
                        style="width: 100%; height: 100%;backgroundColor:rgba(0,0,0,0)"
                        :src="item.img"
                        fit="contain"
                    />
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>    
</template>

<script>
import { scrypt } from 'crypto';
export default {
    name: "Projects",
    data() {
        return {
            bgImg: require("../assets/smbg.jpg"),
            sm1: require("../assets/sm1.png"),
            sm2: require("../assets/sm2.png"),
            onAppStoreImg: require("../assets/onAppStore.png"),
            items: [
                { img: require('../assets/smss1.png') },
                { img: require('../assets/smss2.png') },
                { img: require('../assets/smss3.png') },
            ]
        }
    },
    methods: {
        onAppStoreClicked() {
            window.location.href = "https://apps.apple.com/us/app/id1462563980"
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
        font-family: Helvetica
    }

</style>