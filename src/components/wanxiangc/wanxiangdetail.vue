<template>
  <div>
    <div>
      <div class="course_detail">
        <div class="top">
          <span>{{wanxiangdetailmessage.name}}</span>
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU2LjMgKDgxNzE2KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT5pY29uL2hlYWRlci/ov5Tlm54v5rex6buRPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IuS4gOW4reenu+WKqOiuvuiuoSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuinhOiMgy/liIflm77nlLvmnb8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03MS4wMDAwMDAsIC00NTMuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJpY29uL2hlYWRlci/ov5Tlm54v5rex6buRIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MS4wMDAwMDAsIDQ1My4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLov5Tlm54iPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIGZpbGw9IiNGRkZGRkYiIG9wYWNpdHk9IjAiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNS4wODc1LDIuMTg2Mzc5OTMgTDcuMzg3NSwxMC4wNzE2ODQ2IEwxNS4wODc1LDE3Ljk1Njk4OTIgQzE1LjUsMTguMzg3MDk2OCAxNS41LDE5LjI0NzMxMTggMTUuMDg3NSwxOS42Nzc0MTk0IEMxNC42NzUsMjAuMTA3NTI2OSAxMy44NSwyMC4xMDc1MjY5IDEzLjQzNzUsMTkuNjc3NDE5NCBMNS4wNSwxMS4wNzUyNjg4IEM1LjA1LDExLjA3NTI2ODggNC45MTI1LDExLjA3NTI2ODggNC45MTI1LDEwLjkzMTg5OTYgQzQuNjM3NSwxMC43ODg1MzA1IDQuNSwxMC4zNTg0MjI5IDQuNSwxMC4wNzE2ODQ2IEM0LjUsOS43ODQ5NDYyNCA0LjYzNzUsOS4zNTQ4Mzg3MSA0LjkxMjUsOS4yMTE0Njk1MyBDNC45MTI1LDkuMjExNDY5NTMgNS4wNSw5LjIxMTQ2OTUzIDUuMDUsOS4wNjgxMDAzNiBMMTMuNDM3NSwwLjMyMjU4MDY0NSBDMTMuODUsLTAuMTA3NTI2ODgyIDE0LjY3NSwtMC4xMDc1MjY4ODIgMTUuMDg3NSwwLjMyMjU4MDY0NSBDMTUuNjM3NSwwLjg5NjA1NzM0OCAxNS42Mzc1LDEuNjEyOTAzMjMgMTUuMDg3NSwyLjE4NjM3OTkzIFoiIGlkPSJQYXRoIiBmaWxsPSIjMzMzMzMzIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
            alt
            class="go_back"
            @click= "handleback"
          />
          <span alt class="right">[赠送]</span>
        </div>
        <div class="course_cont">
          <div class="content">
            <div class="video">
              <img
                :src= wanxiangdetailmessage.cover
                alt
                v-show="wanxiangdetailshow"
              />
              <img
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDRweCIgaGVpZ2h0PSI0NHB4IiB2aWV3Qm94PSIwIDAgNDQgNDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU4ICg4NDY2MykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+aWNvbi/miJHnmoQv5pqC5YGcL+W4uOinhOWkjeWItjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSLkuIDluK3np7vliqjorr7orqEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLop4TojIMv5YiH5Zu+55S75p2/IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIuMDAwMDAwLCAtMzkzLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iaWNvbi9NZWRpYS/mkq3mlL4v5bi46KeELTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjAwMDAwMCwgMzkxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuaSreaUviI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIblvaIiIGZpbGw9IiMwMDAwMDAiIGN4PSIyNCIgY3k9IjI0IiByPSIyMS42Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzAuNTc0MzcyNCwyMi43MjQyNDE5IEMyNy42MzQ3MjEsMjAuNDYwMDI2NCAyNC42OTQ5MjIsMTguMTk2MDU5MyAyMS43NTUzNjkxLDE1LjkzMjE5MTYgQzIwLjcwODYzMjksMTUuMTI1Nzg1MiAxOS4yLDE1Ljg3OTE0OTYgMTkuMiwxNy4yMDc5Mjk3IEwxOS4yLDMwLjc5MjAzMDQgQzE5LjIsMzIuMTIwODEwNSAyMC43MDg2MzI5LDMyLjg3NDIyNDUgMjEuNzU1MzY5MSwzMi4wNjc4MTgyIEMyNC42OTQ5MjIsMjkuODAzOTUwNCAyNy42MzQ3MjEsMjcuNTM5OTgzMyAzMC41NzQzNzI0LDI1LjI3NTc2NzkgQzMxLjQwODU0MjUsMjQuNjMzNTAzNSAzMS40MDg1NDI1LDIzLjM2NjUwNjMgMzAuNTc0MzcyNCwyMi43MjQyNDE5IFoiIGlkPSLot6/lvoQiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
                class="play"
                v-show="wanxiangdetailshow"
                @click="wanxiangdetailplay"
              />
              <video
                :src= wanxiangdetailmessage.video
                preload="auto"
                x5-playsinline
                playsinline="true"
                webkit-playsinline="true"
                controls="controls"
                x-webkit-airplay="allow"
                x5-video-player-fullscreen="true"
                class="myvideo"
                autoplay='autoplay'
                style="object-fit: contain; display : none;"
                v-show="!wanxiangdetailshow"
              ></video>
            </div>
            <div class="nav">
              <div class="nav_item active">
                <router-link to="/wanxiangdetailjianjie" tag='span' >简介</router-link>
              </div>
              <div class="nav_item">
                <router-link to="/wanxiangdetailmulu" tag='span' >目录</router-link>
              </div>
            </div>
            <div class="swiper-container swiper-container-horizontal">
              <div class="swiper-wrapper">

               <keep-alive>
                  <router-view
                  v-bind:id="id"
                ></router-view>
               </keep-alive>

              </div>
            </div>
          </div>
        </div>
        <div class="join">获得课程</div>
        <!---->
        <!---->
        <!-- <div class="vip_content">
          <div class="box">
            <div class="title">
              <div>加入一席会员</div>
              <div>288 元/年</div>
            </div>
            <div class="box_content">加入一席会员即可获得持续更新的万象课程，目前已上线 10 门课程，同时还将获得一席红本 02纪念笔记本。</div>
            <div class="botton">加入会员</div>
          </div>
          <div class="split_line"></div>
          <div class="box active">
            <div class="title">
              <div>单课购买</div>
              <div>
                <div class="grey">158 元</div>88 元
              </div>
            </div>
            <div class="box_content">选择该项付费后，你将拥有此单门课程。（该课程包含实物工具包）</div>
            <div class="botton">单课购买</div>
          </div>
        </div>-->
        <div class="bg"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue"
import axios from "axios"

export default {
    data(){
        return{
          id:this.$route.params.id,
          wanxiangdetailmessage : '',
          wanxiangdetailshow : true
        }
    },
    mounted(){
       axios({
        url: `api/h5/wanxiang/speak/${this.id}`
      })
      .then((result) => {
        this.wanxiangdetailmessage  = result.data.data.wanxiang_speaker.wanxiang
        console.log(this.wanxiangdetailmessage.cover)
    })
      this.$router.push('/wanxiangdetailjianjie')
    },
    methods :{
      handleback(){
      this.$router.push('/wanxiang')
      },
      wanxiangdetailplay(){
        this.wanxiangdetailshow = false;
      }
    },
    components:{
        
    }
};
</script>

<style lang="stylus" scoped></style>