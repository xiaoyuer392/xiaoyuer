<template>
    <div>
        <van-nav-bar
            title="邀请与兑换"
            left-arrow
            @click-left="onClickLeft"
            fixed
        />
        <div class="tabbar">
        <ul>
            <router-link
                to="/invite/invitecode"
                tag="li"
                active-class="active"
            >
                <span>邀请码</span>
            </router-link>
            <router-link
                to="/invite/exchangecode"
                tag="li"
                active-class="active"
            >
                <span>兑换码</span>
            </router-link>
            
        </ul>
            <router-view></router-view>
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
        }, 
    }
</script>
<style lang='stylus' scoped>
    @import '~assets/border.styl'
    .tabbar
        padding-top 9rem
        ul
            height 11rem
            $border( 0 0 1px 0)
            span 
                float left
                font-size 2.8rem
                margin 4rem 4rem 6rem 6rem
                color  grey
                color black
            li.active span
                color black
                font-weight 600

</style>