<template>
  <div>
    <van-nav-bar title="个人资料设置" left-arrow @click-left="onClickLeft" fixed>
      <template #right>
        <van-icon name="setting-o" size="18" />
      </template>
    </van-nav-bar>
    <div class="user_message_content">
      <div class="user_img">
        <div>头像：</div>
        <img src="https://cdn.yixi.tv/almond/15656000811307.jpeg" alt />
        <input type="file" accept="image/*" class="file" />
      </div>
      <label for="name" class="name">
        <div>昵称：</div>
      </label>
      <div class="item">
        <div>已绑定手机号：</div>
        <div>
          155****9931
        </div>
      </div>
      <div class="mes">收货人信息</div>
      <div id="peolist">
        <label id="mei" for="mail_name" class="name realname" >
            <div>姓名：</div>
            <input id="mail_name" />
        </label>
        <label id="mei" for="mail_phone" class="name">
            <div>手机号：</div>
            <input id="mail_phone" />
        </label>
        <label  for class="popup">
            <van-cell is-link @click="showPopup">地区：{{addrinfo}}</van-cell>
            <van-popup v-model="show" round  position="bottom" :style="{ height: '30%' }" >
                <van-area 
                  title="" 
                  :area-list="areaList"
                  :columns-num="3" 
                  @confirm="onAddConfirm"
                  @cancel="onAddCancel"/>
            </van-popup>
        </label>
        <label id="mei" for="mail_address" class="name">
            <div>详细地址：</div>
            <input id="mail_address" />
        </label>
      </div>
      <div class="save">保存</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar } from "vant";
import { Cell } from "vant";
import Slogan from "../components/mine/slogan";
import { Field } from "vant";
import { Popup } from 'vant';
import { Area } from 'vant';
import axios from 'axios'

Vue.use(Area);
Vue.use(Popup);
Vue.use(Field);
Vue.use(Cell);
Vue.use(NavBar);
export default {
    data() {
      return {
          show : false,
          areaList : {},
          addrinfo : '',
      };
    },
    created() {
        axios({
        url: '/datalist/areadata'
        })
        .then((result) => {
            this.areaList = result.data
            console.log(result)
        })
    },
    methods: {
      onClickLeft() {
        this.$router.push("/mine");
      },
      showPopup(){
        this.show = true;
      },
      onAddConfirm(event){
        this.show = false;
        this.addrinfo = ''+event[0].name+' - '+event[1].name+' - '+event[2].name;
        console.log(this.addrinfo);
      },
      onAddCancel(){
        this.show = false;
      }
    },
    components: {
        Slogan
    } 
};
</script>
<style lang='stylus' scoped>
    #peolist
        display flex
        flex-direction column
    #mei
        display flex
        justify-content space-between
        white-space nowrap
    .user_message_content 
        height calc(100% - 10rem)
        overflow scroll
        padding-top 10rem
        .user_img 
            width 100%
            height 16rem
            padding 3.2rem 6rem 2.8rem
            display -webkit-box
            display -ms-flexbox
            display flex
            -webkit-box-pack justify
            -ms-flex-pack justify
            justify-content space-between
            background-color #fff
            -webkit-box-align center
            -ms-flex-align center
            align-items center
            margin-bottom 2px
            div 
                display -webkit-box
                display -ms-flexbox
                display flex
                -ms-flex-line-pack center
                align-content: center
                -webkit-box-align: center
                -ms-flex-align: center
                align-items: center
                font-size 2.8rem
                font-weight 400
                color #2c3e50
                white-space nowrap
            img 
                width 10rem
                height 10rem
                border-radius 50%
            input 
                font-size 2.8rem
                text-align right
                display none
                max-width 50%
        .name 
            height 10rem
            div
                padding-left 6rem
                display -webkit-box
                display -ms-flexbox
                display flex
                -ms-flex-line-pack center
                align-content center
                -webkit-box-align center
                -ms-flex-align center
                align-items center
                font-size 2.8rem
                font-weight 400
                color #2c3e50
                white-space nowrap
            input 
                display inline-block
                outline none
                border none
            span 
                font-size 2.8rem
                font-weight 400
            #localtion
                height 16rem
                padding 3.2rem 6rem 2.8rem
        .item
            width 100%
            height 16rem
            padding 3.2rem 6rem 2.8rem
            display -webkit-box
            display -ms-flexbox
            display flex
            -webkit-box-pack justify
            -ms-flex-pack justify
            justify-content space-between
            background-color #fff
            -webkit-box-align center
            -ms-flex-align center
            align-items center
            font-size 2.8rem
            font-weight 400
        .item:nth-of-type(3)
            height 0
            div 
                display -webkit-box
                display -ms-flexbox
                display flex
                -ms-flex-line-pack center
                align-content center
                -webkit-box-align center
                -ms-flex-align center
                align-items center
                font-size 2.8rem
                font-weight 400
                color #2c3e50
                white-space nowrap
        .mes 
            width 100%
            height 8.8rem
            font-size 1rem
            padding-left 6rem
            line-height 10rem
            color #6f6f6f
            font-weight 500
            background-color #fafbfc
        .save 
            position relative
            width 30rem
            height 8rem
            border-radius: 4rem
            border .2rem solid #c2c9d7
            font-size 3.6rem
            color #d0d0d0
            font-family PingFangSC-Semibold
            font-weight 600
            text-align center
            line-height 8rem
            margin-top 10rem
            left calc(50% - 15rem)
            letter-spacing 1rem    
        .popup
            margin-left: 3rem;

</style>