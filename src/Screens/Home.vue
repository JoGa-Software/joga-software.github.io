<template>
    <div id="homeContainer">
        <div style="display:flex; flexDirection:column; width:100%; height: auto; justifyContent:center; alignItems:center; padding:2%;">
            <b-carousel
                id="carousel-1"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                style="width:80%;height:auto;text-shadow: 1px 1px 2px #333;"
            >
                <b-carousel-slide v-for="(item, key) in items" :key="key"
                    :caption="item.caption ? item.caption : null"
                    :text="item.text ? item.text : null"
                >
                    <img
                        slot="img"
                        class="d-block img-fluid w-100"
                        width="1024"
                        height="480"
                        :src="item.img"
                        alt="image slot"
                        @click="couraselItemClicked(item)"
                    >
                </b-carousel-slide>

            </b-carousel>
        </div>
        <div style="display:flex;width:100%; height: auto; backgroundColor:#f4f4f4; justifyContent:center; alignItems:center; padding:1%;">
            Follow JoGa Software
            <div class="zoomButton" style="cursor: pointer; padding:10px" @click="youtubeClicked">
                <font face="FontAwesome5Brands" color="#ff0000" size="7"></font>
            </div>
            <div class="zoomButton" style="cursor: pointer; padding:10px" @click="instagramClicked">
                <font face="FontAwesome5Brands" color="#c40180" size="7"></font>
            </div>
        </div>
    </div>
</template>

<script>
import { scrypt } from 'crypto';
import router from '../router/router'

export default {
    name: "Home",
    data() {
        return {
            items: [
                { img: require('../assets/1.png'), route:"iosGame", caption: "2D Platformer", text: "- currently in development -" },
                { img: require('../assets/2.png'), route:"simpleMetronome" },
                { img: require('../assets/3.png'), route:"tofuFighter", caption: "Tofu Fighter", text: "Join the fight to decide who will be the last Tofu standing" },
                { img: require('../assets/4.png'), route:"tetris", caption: "A Simple Tetris Clone", text: "Built using the JavaGameEngine by JoGa" },
            ]
        }
    },
    methods: {
        youtubeClicked() {
            window.location.href = "https://www.youtube.com/channel/UCJqyZqIfKjZ9GG69zIwUKvw"
        },
        instagramClicked() {
            window.location.href = "https://www.instagram.com/jogasoftware/"
        },
        couraselItemClicked(item) {
            if (item.route) {
                router.push(item.route)
            }
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
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center; 
    padding-top: 10px
  }
</style>