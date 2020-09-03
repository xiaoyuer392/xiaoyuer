<template>
  <div>
    <!-- navbar -->
    <div class="head" >
        <van-nav-bar
            title="关于一席"
            left-arrow
            @click-left="onClickLeft"
            fixed
            z-index=3
        />
    </div>
    
    <div class="wrap">
        <div class="content">
         <!-- 视频 -->
            <div class="video">
                <img src="http://cdn.yixi.tv/almond/15446003596484.png" alt="">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDRweCIgaGVpZ2h0PSI0NHB4IiB2aWV3Qm94PSIwIDAgNDQgNDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU4ICg4NDY2MykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+aWNvbi/miJHnmoQv5pqC5YGcL+W4uOinhOWkjeWItjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSLkuIDluK3np7vliqjorr7orqEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLop4TojIMv5YiH5Zu+55S75p2/IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIuMDAwMDAwLCAtMzkzLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iaWNvbi9NZWRpYS/mkq3mlL4v5bi46KeELTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwLjAwMDAwMCwgMzkxLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IuaSreaUviI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1ydWxlPSJub256ZXJvIiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSLmpK3lnIblvaIiIGZpbGw9IiMwMDAwMDAiIGN4PSIyNCIgY3k9IjI0IiByPSIyMS42Ij48L2NpcmNsZT4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMzAuNTc0MzcyNCwyMi43MjQyNDE5IEMyNy42MzQ3MjEsMjAuNDYwMDI2NCAyNC42OTQ5MjIsMTguMTk2MDU5MyAyMS43NTUzNjkxLDE1LjkzMjE5MTYgQzIwLjcwODYzMjksMTUuMTI1Nzg1MiAxOS4yLDE1Ljg3OTE0OTYgMTkuMiwxNy4yMDc5Mjk3IEwxOS4yLDMwLjc5MjAzMDQgQzE5LjIsMzIuMTIwODEwNSAyMC43MDg2MzI5LDMyLjg3NDIyNDUgMjEuNzU1MzY5MSwzMi4wNjc4MTgyIEMyNC42OTQ5MjIsMjkuODAzOTUwNCAyNy42MzQ3MjEsMjcuNTM5OTgzMyAzMC41NzQzNzI0LDI1LjI3NTc2NzkgQzMxLjQwODU0MjUsMjQuNjMzNTAzNSAzMS40MDg1NDI1LDIzLjM2NjUwNjMgMzAuNTc0MzcyNCwyMi43MjQyNDE5IFoiIGlkPSLot6/lvoQiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" class="play" @click="begin">
                <video src="http://cdn.yixi.tv/aboutYixi-video.mp4" 
                    x5-playsinline="true" 
                    playsinline="true" 
                    webkit-playsinline="true" x-webkit-airplay="allow" 
                    controls="controls"
                    class="myvideo" 
                    style="object-fit: contain; display: none;">
                </video>
            </div>
            <div class="about_content">
                <div class="title">
                    <img src="../assets/logo.png" alt="">
                        Get Inspired
                </div>
                <h1 id="theme">
                    听君一席话，胜读十年书。
                </h1>
                <p id="details"> 
                    一席鼓励分享见解、体验和对未来的想象，做有价值的传播。2012年成立于北京，一席现场演讲，目前在北京、上海、广州、杭州、深圳、武汉、香港、台北等城市举办。
                </p>
                <span id="time">
                    首次现场：2012/08/26
                </span>
            </div>   
        </div>
        <van-cell title="客服微信" value="yixixiaobian" />
        <van-cell title="用户协议与隐私政策" is-link to="./user-private" />
    </div>
    
    <div id="bottom_tip">© 2020 · 一席 · 版权所有</div>
</div>
</template>
<script>
    import Vue from 'vue';
    import { NavBar } from 'vant';
    import { Cell } from 'vant';

    Vue.use(Cell);
    Vue.use(NavBar);

    export default {
    methods: {
        onClickLeft() {
            this.$router.push('/mine')
        },
        begin(){
            document.querySelector('.myvideo').style.display = 'block';
        }
    },
    };

</script>


<style lang="stylus" scoped>
    .head
        height 10rem
    .content
        width 100%
        height auto
        max-height calc(100% - 9.2rem)
        overflow scroll
        position relative
        z-index 1
        .video 
            width 100vw
            height 42.2rem;
            position relative
            img:first-of-type 
                width 100%
                height 100%
            img:nth-of-type(2) 
                width 7rem
                height 7rem
                position absolute
                right 6rem
                bottom 5rem
            video
                -o-object-fit contain
                object-fit contain
                width 100%
                height 100%
        .about_content
            padding 4rem 4rem 6rem 14rem
            background-color #fff
            width 100%
            height auto
            border-bottom 2.4rem solid #fafbfc
            .title
                width 100%
                height 6rem
                font-size 2.4rem
                line-height 6rem
                font-weight 300
                margin-bottom 1.4rem
                img
                    width 6rem
                    height 6rem
                    border-radius 50%
                    margin-left -10rem
                    margin-right 4rem
                    vertical-align top
    #bottom_tip
        position: relative;
        height 3rem
        border-bottom 6rem solid #fafbfc 
        font-size 2rem
        font-weight 400
        color #bdbdbd
        z-index 0
        text-align center
    #theme
        font-size: 4rem
        margin-bottom 2rem
        color #000
        font-weight 600
    #details
        font-size 3.4rem
        font-weight 300
        color #000
        margin-bottom 4rem
    #time
        font-size 3rem
        font-weight 400
        color #6f6f6f
    .wrap
        border-bottom 4rem solid #fafbfc 
    .myvideo
        position: absolute
        top 0
        z-index 999
</style>