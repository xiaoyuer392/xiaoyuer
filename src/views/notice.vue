<template>
    <div>
        <van-nav-bar
            title="通知"
            left-arrow
            @click-left="onClickLeft"
            fixed
        />
        
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
    
</style>