<template>
    <!-- 上新 -->
    <div class="have-new">
        <div class="title">
          上新
        </div>
        <div class="item"
         v-for="item2 in datalist" 
        :key="item2.id"
        @click="chId(item2,name)"
        >
          <div class="img-div">
            <img :src="item2.video_cover" alt="">
            <div class="img-title">
              {{item2.title}}
            </div>
          </div>
          <div class="item-content">
            <div class="content-title">
              {{item2.speaker_name}}-{{item2.speaker_intro}}
            </div>
            <div class="content">
              {{item2.titlelanguage}}
            </div>
            <div class="share">
              <span class="cl">
                #演讲
              </span>
              <span class="cr">
                {{item2.created}}
              </span>
            </div>
          </div>
        </div>

    </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios'
  import { mapActions } from 'vuex'

export default {
  data() {
    return {
      datalist: [],
      name:'/speech'
    }
  },
  methods:{
    chId(item,name){
      console.log(item,name);
      this.$store.dispatch('changId',{item,name});
      this.$router.push('/detail');
    }
  },
  created() {
    axios({
      url: '/datalist'
    })
    .then((result) => {
      this.datalist = result.data.data.shangxin;
      //console.log(this.datalist)
    })
  },
}

</script>

<style lang="stylus">

//上新
  .have-new
    background #fff
    width 100%
    padding 3rem 4rem .01rem
    border-bottom 2rem solid #f5f7fa
    .title
      font-size 4.2rem
      font-family SourceHanSerifSC
      margin-bottom 3rem
      -webkit-font-smoothing antialiased
      -moz-osx-font-smoothing grayscale
      color #000
    .item
      width 67rem
      height auto
      border-radius 1rem
      overflow hidde
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
          display inline-block
          width 100%
          height 43rem
        .img-title
          width 100%
          font-size 4rem
          font-family SourceHanSerifSC
          position absolute
          display -webkit-box
          display -ms-flexbox
          display flex
          -webkit-box-pack start
          -ms-flex-pack start
          justify-content flex-start
          -webkit-box-align center
          -ms-flex-align center
          align-items center
          padding 0 4rem
          height 11.6rem
          bottom 2rem
          color #fff
      .item-content
        width 100%
        height auto
        padding 4rem
        background-color #fff
        border 1px solid rgba(194,201,215,.4)
        border-radius 0 0 1rem 1rem
        .content-title
          width 100%
          display -webkit-box
          overflow hidden
          text-overflow ellipsis
          -webkit-line-clamp 4
          -webkit-box-orient vertical
          font-size 2.4rem
          font-family PingFangSC
          font-weight 500
          color #000
          margin-bottom 2rem
          line-height 3.4rem
          text-align justify
        .content
          width 100%
          display -webkit-box
          overflow hidden
          text-overflow ellipsis
          -webkit-line-clamp 4
          -webkit-box-orient vertical
          font-size: 2.4rem;
          font-family PingFangSC
          font-weight 500
          color #000
          margin-bottom 2rem
          line-height 3.4rem
          text-align justify
        .share
          display -webkit-box
          display -ms-flexbox
          display flex
          -webkit-box-pack justify
          -ms-flex-pack justify
          justify-content space-between
          -webkit-box-align center
          -ms-flex-align center
          align-items center
          -ms-flex-line-pack center
          align-content center
          .cl
            font-size 2rem
            font-family PingFangSC
            font-weight 500
            color #4a4a4a
          .cr
            font-size 2rem
            font-family PingFangSC
            font-weight 500
            color #4a4a4a

</style>