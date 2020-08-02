<template>    
    <div>
        <b-col align-h="center" style="backgroundColor:#fafafa; paddingBottom:10px">
            <b-row align-h="start">
                <font color="#111111" style="paddingLeft:20px;paddingTop:20px">Simple Metronome by JoGa</font>
            </b-row>
            <b-row align-h="center" style="marginTop:50px">
                <h2><font color="#232020">Simple, Yet Powerful</font></h2>
            </b-row>
            <b-row align-h="center" style="marginTop:10px">
                <font color="#111111">Simple Metronome is an easy to use free metronome app minus the clutter.</font>
            </b-row>
            <b-row align-h="center" style="marginTop:20px">
                <b-img
                    block 
                    fluid
                    style="max-width:330px; max-height:300px; width: auto; height: auto;"
                    :src="sm1"
                />
            </b-row>
            <b-row align-h="center" style="marginTop:20px;">
                <b-container>
                    <img
                        class="zoomButton"
                        style="max-width:130px; max-height:100px; width: auto; height: auto; cursor: pointer;"
                        :src="onAppStoreImg"
                        @click="onAppStoreClicked"
                    />
                </b-container>
            </b-row>                        
        </b-col>

        <b-col align-h="center" style="backgroundColor:#fafafa;marginTop:20px;paddingTop:10px;paddingBottom:10px">
            <b-row align-h="center">
                <h3><font color="#232020">Powerful Features</font></h3>
            </b-row>
            <b-row align-h="center">
                <font color="#111111">Simple Metronome Provides professional level features packed in an easy to use user interface.</font>
            </b-row>
            <b-row align-h="center" align-v="center" style="paddingTop:10px">
                <b-col align-v="center">
                    <b-row align-h="end">
                        <b-img
                            block 
                            fluid
                            style="max-width:330px; max-height:300px; width: auto; height: auto;"
                            :src="sm2"
                        />
                    </b-row>
                </b-col>
                <b-col align-v="center">
                    <b-row align-h="start">
                        <ul style="paddingTop:10px; color:black;textAlign:left">
                            <li><font color="#111111">Time Signature and Subdivision adjustments</font></li>
                            <li><font color="#111111">Sound Selection</font></li>
                            <li><font color="#111111">Tap for tempo</font></li>
                            <li><font color="#111111">Beat Accentor and Visualizer</font></li>
                            <li><font color="#111111">and more...</font></li>
                        </ul>
                    </b-row>
                </b-col>
            </b-row>
            <b-row align-h="center" style="paddingTop:10px">
                <el-button @click="onAppStoreClicked">Download Now</el-button>
            </b-row>
        </b-col>

        <b-col align-h="center" style="backgroundColor:#fafafa;marginTop:20px;">
            <b-row align-h="center">
                <font color="#111111" size="7">Screenshots</font>
            </b-row>
            <b-row align-h="center">
                <el-carousel trigger="click" style="width:70%; paddingTop:3%;backgroundColor:rgba(0,0,0,0)" type="card">
                    <el-carousel-item v-for="(item, key) in items" :key="key" style=" backgroundColor:rgba(0,0,0,0)">
                        <el-image
                            style="width: 100%; height: 100%;backgroundColor:rgba(0,0,0,0)"
                            :src="item.img"
                            fit="contain"
                        />
                    </el-carousel-item>
                </el-carousel>
            </b-row>
        </b-col>
    </div>    
</template>

<script>
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

</style>