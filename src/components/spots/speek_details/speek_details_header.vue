<template>
    <div>
        <div class="top_img">
            <img :src="activity.new_cover" alt="">
        </div>
        
        <div class="about">
            <div class="title">{{activity.title}}</div>
            <div class="number">一席现场 第 {{activity.periods}} 期</div>
            <div class="time">
                <div>时间：</div> 
                <div>
                    <span>{{activity.time}}</span> 
                </div>
            </div>
            <div class="address">
                <div>
                    <span>地点：</span> 
                    <span>{{activity.address}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    props:['activity']
}
</script>
<style lang="stylus" scoped>
.top_img
        width 100%
        height 42rem
        position relative
        z-index 2
        img
            width 100%
    .about 
        margin-bottom 2rem
        width 100%
        height auto
        background-color #fff
        padding 3rem 0 5.4rem 6rem
        .title 
            color #000
            width 100%
            font-size 4rem
            font-family SourceHanSerifSC
            padding-right 4rem
            margin-bottom 1.2rem
            text-align justify
        .number
            font-size 2.4rem
            font-family PingFangSC-Semibold
            font-weight 600
            color #6f6f6f
            padding-bottom 2.6rem
            border-bottom .1rem solid #bdbdbd
        .time 
            margin-top 2.6rem
            font-size 2.4rem
            color #000
            font-family PingFangSC-Semibold
            font-weight 600
            display flex
            -webkit-box-pack start
            justify-content flex-start
            line-height 4rem
        .address
            font-weight 600
            font-size 2.4rem
            margin-top 2.6rem
            padding-right 6rem
            display -webkit-box
            display flex
            -webkit-box-pack justify
            justify-content space-between
            align-content center
</style>