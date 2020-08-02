<template>
    <div>
        <b-col align-h="center" style="backgroundColor:#eaeaea;marginTop:20px;paddingTop:10px;paddingBottom:10px">
            <b-row align-h="center">
                Join Us On Social Media!
            </b-row>
            <b-row align-h="center" align-v="center">
                <div class="zoomButton" style="cursor: pointer; padding:10px" @click="youtubeClicked">
                    <font face="FontAwesome5Brands" color="#ff0000" size="7"></font>
                </div>
                <div class="zoomButton" style="cursor: pointer; padding:10px" @click="instagramClicked">
                    <font face="FontAwesome5Brands" color="#c40180" size="7"></font>
                </div>
            </b-row>
            <b-row align-h="start" align-v="end">
                <h5 style="paddingLeft:1%; fontSize:10px; color:#7d8a96">JoGa Software © 2019</h5>
            </b-row>
        </b-col>
    </div>
</template>

<script>
export default {
    methods: {
        youtubeClicked() {
            window.location.href = "https://www.youtube.com/channel/UCJqyZqIfKjZ9GG69zIwUKvw"
        },
        instagramClicked() {
            window.location.href = "https://www.instagram.com/jogasoftware/"
        },
    }
}
</script>