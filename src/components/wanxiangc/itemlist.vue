<template>
    <div>
        <div class="swiper-slide more_dom swiper-slide-active">
            <div class="content1" >
                <div class="des" style="pointer-events: auto;"> 
                    <div class="h1"></div>
                    <div class="h2">
                        <p>万象是一席推出的系列精品课程，涵盖人文和科技等不同领域，建筑、艺术、考古、物理、植物、脑科学、音乐、文学、历史、哲学、心理、博物、医学、手工等主题课程会陆续制作播出。</p>
                        <p>&nbsp</p>
                        <p>一席会员在会员有效期内免费观看所有已上线的万象课程。</p>
                    </div>
                    <div class="video">
                    <img src="https://cdn.yixi.tv/almond/15621425209673.png?imageView2/1/w/628/h/354" alt="" v-show= "showplay"> 
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDRweCIgaGVpZ2h0PSI0NHB4IiB2aWV3Qm94PSIwIDAgNDQgNDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU4ICg4NDY2MykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+aWNvbi/miJHnmoQv5pqC5YGcL+W4uOinhOWkjeWItjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSLkuIDluK3np7vliqjorr7orqEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLop4TojIMv5YiH5Zu+55S75p2/IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIuMDAwMDAwLCAtMzkzLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iaWNvbi9NZWRpYS/mkq3mlL4v5bi46KeELTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjAwMDAwMCwgMzkxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuaSreaUviI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIblvaIiIGZpbGw9IiMwMDAwMDAiIGN4PSIyNCIgY3k9IjI0IiByPSIyMS42Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzAuNTc0MzcyNCwyMi43MjQyNDE5IEMyNy42MzQ3MjEsMjAuNDYwMDI2NCAyNC42OTQ5MjIsMTguMTk2MDU5MyAyMS43NTUzNjkxLDE1LjkzMjE5MTYgQzIwLjcwODYzMjksMTUuMTI1Nzg1MiAxOS4yLDE1Ljg3OTE0OTYgMTkuMiwxNy4yMDc5Mjk3IEwxOS4yLDMwLjc5MjAzMDQgQzE5LjIsMzIuMTIwODEwNSAyMC43MDg2MzI5LDMyLjg3NDIyNDUgMjEuNzU1MzY5MSwzMi4wNjc4MTgyIEMyNC42OTQ5MjIsMjkuODAzOTUwNCAyNy42MzQ3MjEsMjcuNTM5OTgzMyAzMC41NzQzNzI0LDI1LjI3NTc2NzkgQzMxLjQwODU0MjUsMjQuNjMzNTAzNSAzMS40MDg1NDI1LDIzLjM2NjUwNjMgMzAuNTc0MzcyNCwyMi43MjQyNDE5IFoiIGlkPSLot6/lvoQiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" class="play" @click= "handleplay" v-show= "showplay">
                     <video src="http://cdn.yixi.tv/1562142299875-3.mp4" x5-playsinline="" playsinline="true" webkit-playsinline="true" x-webkit-airplay="allow" controls="controls" class="myvideo" style="object-fit: contain; display: none;" v-show="!showplay" autoplay='autoplay' ></video></div>
                </div>
                
                <div class="items" style="pointer-events: auto;" >
                        <div class="item" 
                        v-for="item in wanxiangs"
                        v-bind:key="item.id"
                        v-bind:item ="item"
                        @click="handleClick(item.id)"
                        >
                            <img :src= item.cover alt=""> 
                            <div class="item_content">
                                <div class="item_title">
                                    <span>{{item.name}}</span> 
                                    <div class="item_user">
                                        {{item.speaker_intro}}
                                    </div>
                                </div> 
                                <div class="item_des">{{item.wanxiang_intro}}</div> 
                                        <!----> 
                                <div class="item_buy_boolean" style="display:none">
                                    可单独购买：418 元
                                </div> <!---->
                            </div>
                        </div>
                    
                   
                
                </div>
            </div>
        </div>
        <van-popup v-model="show" position="top" :style="{ height: '100%' }">

        </van-popup>
    </div>

   
</template>

<script>

import Vue from "vue"
import axios from "axios"


export default {
  
  data(){
      return{
          wanxiangs: [],
          showplay: true,
          show: false,
      }
  },
  created(){
    axios({
      url: 'datalist/wanxiangs'
    })
    .then((result) => {
      this.wanxiangs = result.data.data.wanxiangs
      // console.log(this.wanxiangs)
      console.log(this.showplay)
    })
  },
  methods:{
        handleplay(){
            this.showplay = false;
        },
        showPopup() {
        this.show = true;
        },
        handleClick(id){
            this.$router.push(`/wanxiangdetail/${id}`)
        }
  }
  
}


</script>

<style lang='stylus' scoped>

</style>