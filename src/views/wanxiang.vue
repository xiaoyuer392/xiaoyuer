<template>
   <div id="app">
   <div id="home">
      <div class="vip">
        <div class="top" style="transition-duration: 600ms;">
          <div class="card">
              <img src="https://cdn.yixi.tv/almond/almond_1593449694.jpg" alt="" @click = "handleClick" >
          </div>
          <div class="card card_rote">
            <img src="https://cdn.yixi.tv/almond/almond_1593449694.jpg" alt="">
          </div>
        </div>
        <div class="vip_cont">
          <div class="content">
            <div class="nav">
              <div class="nav_item ">
                <router-link to="itemlist" tag="span" active-class="active">万象课程</router-link>
              </div>
              <div class="nav_item">
                <router-link to="yixihongben" tag="span" active-class="active">一席红本</router-link>
              </div>
            </div>
            <div class="swiper-container swiper-container-horizontal" style="pointer-events :auto">
              <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
                  <!-- <itemlist></itemlist> -->
                  <router-view> </router-view>
                  <!-- <yixihongben></yixihongben> -->
               
              </div>
            </div>
          </div>
        </div>
        <div class="vip_content" v-bind:class="{'activee':indexActive}">
          <div class="rich">
            <br>
            <br>
            <p>
              <img alt="" src="https://cdn.yixi.tv/almond/ckeditor_1576752035.jpg?imageslim">
              <img alt="" src="https://cdn.yixi.tv/almond/ckeditor_1565680487.jpg?imageslim">
              <img alt="" src="https://cdn.yixi.tv/almond/ckeditor_1565680500.jpg?imageslim">
            </p>
            <br>
            <br>
          </div>
          <div class="bottom">
            <div class="return" @click= "retuclick">返回</div>
            <div class="buy">
              <div>点击购买</div>
            </div>
          </div>
          </div>
      </div>
   </div>
 </div>

</template>

<script>
import axios from "axios"
import Vue from "vue"


export default {
  data() {
    return {
      indexActive : false,
      daohang: false
    }
  },
  components: {
    
  },
  methods:{
    handleClick() {
      this.indexActive = true
      this.$emit('children-data',this.daohang = true)
    },
    retuclick(){
      this.indexActive = false
      this.$emit('children-data',this.daohang = false)
    }
  }
}
</script>

<style lang="stylus">
#app
  overflow scroll
</style>