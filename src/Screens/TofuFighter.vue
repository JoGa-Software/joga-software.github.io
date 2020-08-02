<template>    
    <div>
        <b-col align-h="center" style="backgroundColor:#fafafa; paddingBottom:10px">
            <b-row align-h="start">
                <font color="#111111" style="paddingLeft:20px;paddingTop:20px">Tofu Fighter</font>
            </b-row>
            <b-row align-h="center" style="marginTop:50px">
                <h2><font color="#232020">A Web Based First Person Shooter</font></h2>
            </b-row>
            <b-row align-h="center">
                <b-img
                    block 
                    fluid
                    style="max-width:230px; max-height:300px; width: auto; height: auto;"
                    :src="sm1"
                />
            </b-row>
            <b-row align-h="center" style="marginTop:20px">
                <b-container>
                    <font color="#232020">Play with friends and find out who is the king of tofu.</font>
                </b-container>
            </b-row>
            <b-row align-h="center" style="marginTop:20px">
                <b-container>
                    <el-button @click="onAppStoreClicked">Play Now</el-button>
                </b-container>
            </b-row>                        
        </b-col>
    </div> 
</template>

<script>
export default {
    name: "TofuFighter",
    data() {
        return {
            bgImg: require("../assets/tfbg.png"),
            sm1: require("../assets/tofu.png"),
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
            window.location.href = "http://tofufighter.herokuapp.com/"
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