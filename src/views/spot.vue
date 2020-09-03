<template >
  <div class="spot">
    
    <ul class="header">
        <router-link  to="/spot/speek" tag="li" class="speek" active-class="active">演讲</router-link>
        <router-link  to="/spot/countyard" tag="li" class="countyard" active-class="active">大院</router-link>
        <router-link  to="/times/2020" tag="li" class="times" >[时间线]</router-link>
        <!-- <li class="times">[时间线]</li> -->
    </ul>
    <div class="spot_wrap">
        <!-- <transition 
            :enter-active-class="`animate__animated animate__${dir_enter}`"
            :leave-active-class="`animate__animated animate__${dir_leave}`"
        > -->
            <router-view></router-view>
        <!-- </transition> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import speek from 'spots/speek'

export default {
    // data(){
    //     return{
    //         dir_enter : '',
    //         dir_leave : ''
    //     }
    // },
    // watch:{
    //     $route(to,from){
    //         if(to.meta.dir > from.meta.dir){
    //             this.dir_enter = 'slideInRight'
    //             this.dir_leave = 'slideOutLeft'
    //         }else{
    //             this.dir_enter = 'slideInLeft'
    //             this.dir_leave = 'slideOutRight'
    //         }
    //     }
    // }
};
</script>

<style lang="stylus" scoped>
.spot 
    display flex
    flex-direction column
    
    .header 
        border-bottom 1px solid #ddd
        width 100%
        height: 12rem
        display flex 
        position: fixed;
        z-index 10
        font-size 4.4rem
        background white
        color #a2a2a2
        .speek
            flex 2
            line-height 12rem
            text-align center
            
        .countyard
            flex 2
            line-height 12rem
            text-align center
        .times 
            font-size 2.4rem
            font-weight: 400
            line-height 12rem
            text-align center
            flex 1
        .active 
            font-size 4.4rem
            color #000
    .spot_wrap
        margin-top 12rem
        
</style>
