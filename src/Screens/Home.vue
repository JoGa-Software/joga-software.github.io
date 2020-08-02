<template>
    <div>
        <b-col style="marginBottom: 250px">
            <b-row align-h="center" style="marginTop:0px;">
                <b-carousel
                    id="carousel-1"
                    :interval="4000"
                    controls
                    indicators
                    background="#ababab"
                    style="width:100%;height:auto;text-shadow: 1px 1px 2px #333;"
                >
                    <b-carousel-slide v-for="(item, key) in items" :key="key"
                        :caption="item.caption ? item.caption : null"
                        :text="item.text ? item.text : null"
                    >
                        <b-img
                            slot="img"
                            fluid
                            :src="item.img"
                            alt="image slot"
                            @click="couraselItemClicked(item)"
                        />
                    </b-carousel-slide>

                </b-carousel>
            </b-row>
        </b-col>
    </div>
</template>

<script>
import router from '../router/router'

export default {
    name: "Home",
    data() {
        return {
            items: [
                // { img: require('../assets/1.png'), route:"iosGame", caption: "2D Platformer", text: "- currently in development -" },
                { img: require('../assets/2.jpg'), route:"simpleMetronome" },
                { img: require('../assets/5.jpg'), route:"linkMultiplier" },
                // { img: require('../assets/3.png'), route:"tofuFighter", caption: "Tofu Fighter", text: "Join the fight to decide who will be the last Tofu standing" },
                // { img: require('../assets/4.png'), route:"tetris", caption: "A Simple Tetris Clone", text: "Built using the JavaGameEngine by JoGa" },
            ]
        }
    },
    methods: {
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

</style>