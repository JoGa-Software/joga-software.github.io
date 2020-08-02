<template>    
    <div>
        <b-col align-h="center" style="backgroundColor:#fafafa;paddingBottom:10px">
            <b-row align-h="start">
                <font color="#111111" style="paddingLeft:20px;paddingTop:20px">Link Multiplier</font>
            </b-row>
            <b-row align-h="center" style="marginTop:50px">
                <h2><font color="#232020">Consolidate all of your links in one place</font></h2>
            </b-row>
            <b-row align-h="center">
                <b-img
                    block 
                    fluid
                    style="max-width:330px; max-height:200px; width: auto; height: auto;"
                    :src="sm1"
                />
            </b-row>
            <b-row align-h="center" style="marginTop:20px">
                <b-container>
                    <font color="#111111">An app designed to get around the one link limit in your Instagram bio</font>
                </b-container>
            </b-row>
            <b-row align-h="center" style="marginTop:20px">
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
    </div>    
</template>

<script>
export default {
    name: "Tetris",
    data() {
        return {
            bgImg: require("../assets/tbjbg.jpg"),
            sm1: require("../assets/lm1.png"),
            sm2: require("../assets/tbj1.png"),
            onAppStoreImg: require("../assets/onAppStore.png"),
        }
    },
    methods: {
        onAppStoreClicked() {
            window.location.href = "https://apps.apple.com/us/app/link-multiplier-for-instagram/id1479232228"
        },
        ssClicked() {
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