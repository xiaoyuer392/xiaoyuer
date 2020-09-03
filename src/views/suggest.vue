<template>
    <div>
        <van-nav-bar
            title="反馈建议"
            left-arrow
            @click-left="onClickLeft"
            fixed
        />
        <div class="footer">
            <div class="input_div active">
                <input  type="text" placeholder="填写反馈">
            </div>
            <span  class="submit">发送</span> 
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { NavBar } from 'vant';
    import { Cell } from 'vant';
    import Slogan from '../components/mine/slogan';
    Vue.use(Cell);
    Vue.use(NavBar);
    export default {
        methods: {
            onClickLeft() {
                this.$router.push('/mine')
            }
        },
        components: {
            Slogan
        }
    }
</script>
<style lang='stylus' scoped>
    .footer
        z-index 3
        height 10rem
        padding 1.8rem 4rem
        width 100%
        position fixed
        bottom 0
        left 0
        background #fff
        -webkit-box-shadow 0 0 1rem rgba(0,0,0,.2)
        box-shadow 0 0 1rem rgba(0,0,0,.2)
        display -webkit-box
        display -ms-flexbox
        display flex
        -webkit-box-pack justify
        -ms-flex-pack justify
        justify-content space-between
        -webkit-box-align center
        -ms-flex-align center
        align-items center
        .input_div
            width 100%
            height 6.4rem
            background-color #f7f7f7
            border-radius 3.2rem
            display -webkit-box
            display -ms-flexbox
            display flex
            -webkit-box-pack justify
            -ms-flex-pack justify
            justify-content space-between
            -webkit-transition all .2s ease
            transition all .2s ease
            -webkit-box-align center
            -ms-flex-align center
            align-items center
            input
                width 100%
                height 6.4rem
                outline none
                border none
                background-color transparent
                font-size 2.4rem
                color #919191
                padding-left 3rem
        .submit
            color #bdbdbd
            font-size 2.8rem
            font-weight 400
            width 10rem
            height 100%
            padding 0 1rem
            display -webkit-box
            display -ms-flexbox
            display flex
            -webkit-box-align center
            -ms-flex-align center
            align-items center

</style>