<template>
    <div class="content-item">
        <div class="cc-item" v-for="item in datalist" :key="item.id">
            <img :src="item.video_cover" alt="">
            <div class="detail">
                <span class="detail-titl">{{item.title}}</span>
                <span class="speaker">{{item.speaker.name}}  -  {{item.speaker.intro}}</span>
                <div class="paly-count">
                    <span>{{item.created}}</span>
                    <span>{{item.total_play_count}}次观看</span>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
    import axios from 'axios'

    export default {
    data() {
        return {
        datalist: []
        }
    },
    created() {
        axios({
        url: '/datalist/zhiyalist'
        })
        .then((result) => {
            this.datalist = result.data.data.items;
            console.log(result.data.data.items)
        })
    },
    }
</script>

<style lang="stylus">
    .content-item
        padding 2rem 4rem 4rem
        background-color #fff
        position relative
        overflow scroll
        -webkit-overflow-scrolling touch
        height calc(100% - 8rem)
        z-index 1
        .cc-item
            width 100%
            height 16rem
            display -webkit-box
            display -ms-flexbox
            display flex
            -webkit-box-pack justify
            -ms-flex-pack justify
            justify-content space-between
            position relative
            margin-bottom 3rem
            img 
                width 28rem
                height 16rem
                -webkit-box-shadow 0 0 1rem rgba(0,0,0,.1)
                box-shadow 0 0 1rem rgba(0,0,0,.1)
                border-radius .4rem
                margin-right 2rem
            .detail
                width 36.6rem
                position relative
                .detail-titl
                    display inline-block
                    width 100%
                    overflow hidden
                    font-size 2.8rem
                    line-height 3rem
                    font-family PingFangSC-Medium
                    font-weight 500
                    color #000
                .speaker
                    width 100%
                    font-size 2rem
                    font-family PingFangSC-Regular
                    font-weight 400
                    color #6f6f6f
                    overflow hidden
                    text-overflow ellipsis
                    display -webkit-box
                    -webkit-line-clamp 2
                    -webkit-box-orient vertical
                .paly-count
                    width 100%
                    position absolute
                    left 0
                    bottom 0
                    font-size 2rem
                    font-family PingFangSC-Regular
                    font-weight 400
                    line-height 2rem
                    color #6f6f6f
                    display -webkit-box
                    display -ms-flexbox
                    display flex
                    -webkit-box-pack justify
                    -ms-flex-pack justify
                    justify-content space-between
                
</style>