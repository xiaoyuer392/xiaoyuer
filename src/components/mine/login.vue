<template>
  <div id="app">
    <div class="user">
        <div class="user_img">
            <img src="../../assets/logo.png" alt="">
        </div>
        <div class="user_name">
            <div><span>未登录</span></div>
        </div>
    </div>
  </div>
</template>

<script>
  // import Vue from 'vue';
</script>

<style lang="stylus">
    .user
      width 100%
      height 16rem
      padding 3rem 4rem 3rem 8rem
      display -webkit-box
      display -ms-flexbox
      display flex
      -webkit-box-pack justify
      -ms-flex-pack justify
      background-color #fff
      position relative
      .user_img
        width 10rem
        height 10rem
        position relative
        img
          width 100%
          height 100%
          border-radius 50%
      .user_name
        display -webkit-box
        display -ms-flexbox
        display flex
        align-content center
        -webkit-box-align center
        align-items center
        div
          width 20rem
          height 5.8rem
          margin-left 4rem
          margin-bottom 1rem
          -webkit-box-pack justify
          -ms-flex-pack justify
          justify-content space-between
          -ms-flex-line-pack center
          -ms-flex-align center
          span 
            width 70%
            color #000
            line-height 5.8rem
            font-size 3.6rem
            font-weight 550
            overflow hidden
            white-space nowrap
            display inline-block
            text-overflow ellipsis



</style>

