<template>
    <!--  演讲 -->
    <div class="speech">
      <div class="title">
        <div class="left">枝桠</div>
        <div class="right">已生长34枝</div>
      </div>
      <div class="item" v-for="item5 in datalist" :key="item5.id" @click="chId(item5,name)">
        <div class="img-div">
          <img :src="item5.video_cover">
        </div>
        <div class="item-content">
          <div class="speech-title">{{item5.title}}</div>
          <div class="speaker">
            <div class="speaker-name">{{item5.speaker_name}}</div>
            <div calss="speaker-date">{{item5.created}}</div>
          </div>
        </div>
      </div>
      <div class="more">
          <router-link
            to="/zhiyalist"
            tag="div"
          >
            查看全部枝桠
          </router-link>
        </div>
    </div>
</template>


<script>
import Vue from 'vue';
import axios from 'axios';

export default {
    data() {
    return {
      datalist: [],
      name:'/zhiya'
    }
  },
  methods:{
    chId(item,name){
      console.log(item,name);
      this.$store.dispatch('changId',{item,name});
      this.$router.push('/zhiyadetail');
    }
  },
   created() {
    axios({
      url: '/datalist'
    })
    .then((result) => {
      this.datalist = result.data.data.zhiya.items;
      console.log(result.data.data.zhiya)
    })
   },
}
</script>

<style lang="stylus">
    //演讲
  .speech
    width 100%
    display -webkit-box
    display -ms-flexbox
    display flex
    -webkit-box-pack justify
    -ms-flex-pack justify
    justify-content space-between
    background #fff
    padding 3rem 4rem 0
    border-bottom 2rem solid #f5f7fa
    -ms-flex-wrap wrap
    flex-wrap wrap
    .title
      font-size 4.2rem
      font-family SourceHanSerifSC
      margin-bottom 3rem
      -webkit-box-align end
      -ms-flex-align end
      align-items flex-end
      width 100%
      display -webkit-box
      display -ms-flexbox
      display flex
      -webkit-box-pack justify
      -ms-flex-pack justify
      justify-content space-between
      .left
        font-size 4.2rem
        font-family SourceHanSerifSC
        margin-bottom 3rem
        -webkit-box-align end
        -ms-flex-align end
        align-items flex-end
      .right
        font-size 2.4rem
        font-family SourceHanSerifSC
        margin-bottom 3rem
        -webkit-box-align end
        -ms-flex-align end
        align-items flex-end
    .item
      width 31.2rem
      height auto
      display inline-block
      border-radius 1rem
      background-color #fff
      margin-bottom 4rem
      -webkit-box-shadow 0 0 1rem rgba(0,0,0,.05)
      box-shadow 0 0 1rem rgba(0,0,0,.05)
      .img-div
        position relative
        height auto
        font-size 0
        border-radius 1rem 1rem 0 0
        overflow hidden
        img 
          width 100%
          height 20rem
          display inline-block
      .item-content
        width 100%
        height 12rem
        padding 1rem 2rem 4.5rem
        background-color #fff
        display -webkit-box
        display -ms-flexbox
        display flex
        -ms-flex-wrap wrap
        flex-wrap wrap
        -ms-flex-line-pack center
        align-content center
        position relative
        -webkit-box-align center
        -ms-flex-align center
        align-items center
        border 1px solid rgba(194,201,215,.4)
        border-bottom-left-radius 1rem
        border-bottom-right-radius 1rem
        .speech-title
          font-size 2.4rem
          font-family SourceHanSerifSC
          color #4a4a4a
          line-height 3rem
          display -webkit-box
          overflow hidden
          text-overflow ellipsis
          -webkit-line-clamp 2
          -webkit-box-orient vertical
        .speaker
          width calc(100% - 4rem)
          font-size 1.8rem
          font-family PingFangSC
          font-weight 500
          color #4a4a4a
          display -webkit-box
          display -ms-flexbox
          display flex
          position absolute
          bottom 1.5rem
          left 2rem
          -webkit-box-pack justify
          -ms-flex-pack justify
          justify-content space-between
          .speaker-name
            overflow hidden
            white-space nowrap
            max-width 80%
            text-overflow ellipsis
          .speaker-date
            font-size 1.8rem
            font-family PingFangSC
            font-weight 500
            color #4a4a4a
    .more
      width 100%
      display -webkit-box
      display -ms-flexbox
      display flex
      -webkit-box-pack center
      -ms-flex-pack center
      justify-content center
      padding 2rem 0 4rem
      div
        width 23.4rem
        height 6.4rem
        font-size 2.4rem
        font-family SourceHanSerifSC
        color #4a4a4a
        border-radius 3.2rem
        background-color #f5f7fa
        text-align center
        line-height 6.4rem
</style>