<template>
    <b-container style="alignContent:center; justifyContent:center; marginTop:40px">
        <b-row>
            <b-col>
                <h1>Home</h1>    
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <el-carousel trigger="click" height="250px">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3 class="small">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { scrypt } from 'crypto';
export default {
    name: "Home"
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 250px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>