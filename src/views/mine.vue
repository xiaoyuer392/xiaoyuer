<template>
    <div id="app1">

        <!-- head -->
        <van-nav-bar title="我" >
        <template #right>
            <van-icon name="contact" @click="SetClick" color="#000" size="18" />
        </template>
        </van-nav-bar>
        <!-- login -->
        <MainIndex></MainIndex>
        <!-- cell -->
        <van-cell-group>
            <div class="money">
                <div  class="distance">
                    <van-cell title="订单" to="/order"  icon="bill-o"  is-link/>
                </div>
                <div class="distance">
                    <van-cell title="邀请与兑换"  to="/invite" icon="coupon-o"  is-link/>
                </div>
            </div>
            <div class="mine">
                <div class="distance">
                    <van-cell title="收藏" to="/collect" icon="star-o"  is-link/>
                </div>
                <div class="distance">
                    <van-cell title="评论" to="/comment" icon="more-o"  is-link/>
                </div>
            </div>
            <div class="about">
                <div class="distance">
                    <van-cell title="通知" to='/notice' icon="bullhorn-o" is-link/>
                </div>
                <div class="distance">  
                    <van-cell title="反馈建议" to='/suggest'  icon="bulb-o"  is-link/>
                </div>
                <div class="distance" >
                    <van-cell title="关于一席" 
                    to="/about" icon="info-o"  is-link/>
                </div>
            </div>  
        </van-cell-group>
       
    </div>
</template>

<script>
    import Vue from 'vue';
    import { NavBar } from 'vant';
    import { Cell, CellGroup } from 'vant';
    Vue.use(NavBar);
    Vue.use(Cell);
    Vue.use(CellGroup);
    import MainIndex from '../components/mine/login';
    export default {
        data() {
            return {
            active: 0,
            }
        },
        methods:{
            SetClick() {
            this.$router.push('/setting')
        },
        },
        components: {
            MainIndex
        }
    }
</script>

<style lang="stylus" scoped>
    #app1
        background-color #fafbfc
    #app
        position relative
    .money,.mine
        border-bottom 2rem solid #fafbfc
    .about 
        background-color #fafbfc  
    .distance
        padding: 0 3.4rem 0 6rem;
        background-color #fff
</style>

