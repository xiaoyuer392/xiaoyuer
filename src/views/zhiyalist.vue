<template>
    <div>
        <div class="top">
            <van-nav-bar title="枝桠"   @click-left="onClickLeft" left-arrow class="navtop">
                <template #right>
                    <van-icon name="search" size="22" />
                </template>
            </van-nav-bar>
        </div>
        <div class="content-zhi">
            <div class="title">
                <div class="pai">排序：</div>
                <div class="time active">更新时间<span>↓</span></div>
                <div class="num">播放量</div>
            </div>
            <Zhiitem></Zhiitem>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { NavBar } from 'vant';
    import { Toast } from 'vant';
    import Zhiitem from '../components/list/zhiitem'

    Vue.use(NavBar);

    export default {
    methods: {
        onClickLeft() {
            this.$router.push('/')
        },
        onClickRight() {
        Toast('按钮');
        },
    },
    components:{
        Zhiitem
    }
    };
</script>

<style lang="stylus">
    .top 
        position fixed
        width 100%
        z-index 999
    .van-nav-bar
        margin-bottom .2rem
        -webkit-box-shadow 0 0 1rem rgba(0,0,0,.1)
        box-shadow 0 0 1rem rgba(0,0,0,.1)
    .van-nav-bar__title
        color #000
        font-size 3.6rem
    .van-nav-bar .van-icon
        color #000
        font-size 3.6rem
    .content-zhi
        position fixed
        height 100%
        padding-top 10rem
        overflow hidden
        .title
            background #fff
            width 100%
            height 8rem
            font-size 2.4rem
            margin-bottom 2px
            display -webkit-box
            display -ms-flexbox
            display flex
            padding-left 4rem
            -ms-flex-line-pack center
            align-content center
            -webkit-box-align center
            -ms-flex-align center
            align-items center
            color #4a4a4a
            .pai
                font-weight 400
                font-family PingFangSC
                margin-right 4rem
                color #a2a2a2
            .time
                font-family PingFangSC
                margin-right 4rem
                font-weight 700
                color #a2a2a2
            .num
                font-family PingFangSC
                margin-right 4rem
                font-weight 700
                color #a2a2a2
            .active
                color #000
        
</style>