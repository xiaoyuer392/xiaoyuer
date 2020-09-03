<template>
  <div id="home">
    <div id="app">
      
      <router-view @children-data="parentEvent"></router-view>
      <!-- 底部导航 -->
        <van-tabbar v-model="pagespot" z-index="4" active-color="red" inactive-color="#000" v-bind:class="{'daohangisshow':daohangisshow}">
          <van-tabbar-item name="/home" to="/home" icon="home-o">首页</van-tabbar-item>
          <van-tabbar-item name="/spot/speek" to="/spot/speek" icon="location-o">现场</van-tabbar-item>
          <van-tabbar-item name="/wanxiang/itemlist" to="/wanxiang/itemlist" icon="gift-card-o">万象</van-tabbar-item>
          <van-tabbar-item name="/mine" to="/mine" icon="smile-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
        
        
  </div>
</template>

<script>
  import { Button } from 'vant';
  import Vue from 'vue';
  import { Icon } from 'vant';
  import { Tabbar, TabbarItem } from 'vant';

  Vue.use(Tabbar);
  Vue.use(TabbarItem);
  
  Vue.use(Icon);

  export default {
  data() {
    return {
      active: 0,
      pagespot: '/home',
      daohangisshow:false
    }
  },
  methods:{
    parentEvent(data){
      if(data){
        this.daohangisshow = true;
      }else{
        this.daohangisshow = false;
      }
      current: '/home'
    }
  },
  mounted(){
    console.log(this.$route.meta.path)
    this.pagespot = this.$route.meta.path
  }
  
}
</script>

<style lang="stylus">
#app
  /* overflow scroll */
  /* -webkit-overflow-scrolling touch */
  
  overflow scroll
  -webkit-overflow-scrolling touch
  .daohangisshow
   display none !important

</style>
