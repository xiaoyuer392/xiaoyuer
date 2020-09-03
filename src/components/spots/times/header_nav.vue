<template>
    <div class="nav">
        <div class="return_last" @click="ReturnToSpot">
          <van-icon name="arrow-left" size="5rem"/>
        </div>
        <div class="tabbar">
          <ul>
            <router-link to="/times/2020" tag="li" active-class="active"><span>2020</span></router-link>
            <router-link to="/times/2019" tag="li" active-class="active"><span>2019</span></router-link>
            <router-link to="/times/2018" tag="li" active-class="active"><span>2018</span></router-link>
            <router-link to="/times/2017" tag="li" active-class="active"><span>2017</span></router-link>
            <router-link to="/times/2016" tag="li" active-class="active"><span>2016</span></router-link>
            <router-link to="/times/2015" tag="li" active-class="active"><span>2015</span></router-link>
            <router-link to="/times/2014" tag="li" active-class="active"><span>2014</span></router-link>
            <router-link to="/times/2013" tag="li" active-class="active"><span>2013</span></router-link>
            <router-link to="/times/2012" tag="li" active-class="active"><span>2012</span></router-link>
            
          </ul>
        </div>
        <router-link to="/search" class="search">[搜索]</router-link>
        <!-- <div class="search">[搜索]</div> -->
      </div>
</template>
<script>
    import Vue from 'vue';
    import { Icon } from 'vant';

    Vue.use(Icon);

    export default{
      methods: {
        ReturnToSpot(){
          this.$router.push('/spot/speek')
          
        }
      }
    }
</script>
<style lang="stylus" scoped>
.nav
      height 12rem
      display flex
      border-bottom 1px #ddd solid
      position relative
      .return_last
        display flex
        width 10.4rem
        justify-content center
        align-items center
         
      .tabbar
        flex 1
        /* overflow scroll */
        overflow hidden
        height 100%
        ul
          height 100%
          width 100%
          display flex
          overflow scroll
          li
            height 100%
            flex 1
            margin  auto 2rem
            text-align center 
            line-height 4.4rem
            font-size 4.4rem
            span
              height 100%
              display block
              
              line-height 12rem
          .active
            
            color black !important
            font-weight 800
      .search
        width 12rem
        display flex
        font-size 2.4rem
        justify-content center
        align-items center
        font-family SourceHanSerifSC
        
</style>