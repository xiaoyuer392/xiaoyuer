<template>
    <div>
        <van-nav-bar
            title="评论"
            left-arrow
            @click-left="onClickLeft"
            fixed
        />
        <div id="no_collect">   
            <img src="../assets/logo.png" alt="">
            <div>还未评论任何视频</div>
        </div>
        <Slogan></Slogan>
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
    #no_collect
        height 100rem
        display flex
        align-items center
        justify-content center
        flex-flow: column
        img
            margin-top: 20rem;
            width 11.6rem
            height 8.8rem
            display flex
            align-items center
            justify-content center
        div
            margin-top 6.4rem
            width 100%
            text-align center
            font-size 2.8rem
            font-weight 600
            color #bdbdbd

</style>