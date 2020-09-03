<template>
    <div>
        <van-nav-bar
            title="收藏"
            left-arrow
            @click-left="onClickLeft"
            fixed
        >
            <template #right>
                <van-icon name="delete" size="18" color="grey" @click="deleteCollect" />
            </template>
        </van-nav-bar>
        <div class="no_collect_bk">
            <div id="no_collect">   
                <img src="../assets/logo.png" alt="">
                <div>还未收藏任何视频</div>
            </div>
            <Slogan></Slogan>
        </div>
        
        <div class="my_collect">
            <div class="collect_item" v-for="item in mycollect_arr" :key="item.id">
                <img  :src="item.video_cover" alt="" class="speak_img">
                <div class="detail">
                    <span class="detail_title">{{item.title}}</span> 
                    <span class="speaker">{{item.speaker.name}}&nbsp;&nbsp;-&nbsp;&nbsp;{{item.speaker.intro}}</span> 
                    <span class="play_count">演讲</span>
                </div> 
                <div class="change_radio" v-show="isshow">
                    <van-button icon="delete" size="mini" color="#ddd" type="primary" @click="dataDelete(item.id)"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { NavBar } from 'vant';
    import { Cell } from 'vant';
    import {mapState} from 'vuex';
    import axios from 'axios';
    import Slogan from '../components/mine/slogan';
    import {get} from '../utils/http'
    import { RadioGroup, Radio } from 'vant';
    import { Icon } from 'vant';
    import { Button } from 'vant';

    Vue.use(Button);

    Vue.use(Icon);
    Vue.use(Radio);
    Vue.use(RadioGroup);
    Vue.use(Cell);
    Vue.use(NavBar);
    export default {
        data(){
             return {
                mycollect: [],
                alldata:[],
                mycollect_arr:[],
                radio: '1',
                isshow:false
            }
        },
        methods: {
            onClickLeft() {
                this.$router.push('/mine')
            },
            deleteCollect(){
                if(this.isshow){
                    this.isshow = false
                }else{
                    this.isshow = true
                }
               
            },
            dataDelete(id){
                console.log(this.mycollect_arr)
                //
                let index = this.mycollect_arr.findIndex(value => {
                return value.id === id 
            })
                this.mycollect_arr.splice(index, 1)
            }
            
        },
        computed: {
            ...mapState({'dataId':state => state.mine.dataId})
        },
        mounted(){
            this.mycollect = this.dataId
            console.log(this.mycollect)
            axios({
                url:'/datalist/detail'
                })
                .then((result) => {
                    // 请求到所有数据
                    this.alldata = result.data.data.items_speech;
                    //console.log(this.alldata)
                    //console.log(this.mycollect.length)
                    let arr=[]
                    //通过比较取出需要渲染的数据进行渲染
                    for(let i=0;i<this.mycollect.length;i++){
                        arr = this.alldata.filter((item)=>{
                            return item.id===this.mycollect[i]
                        })
                        this.mycollect_arr=this.mycollect_arr.concat(arr)
                        
                    }
                    //进行数组去重
                    this.mycollect_arr = Array.from(new Set(this.mycollect_arr))
                    console.log(this.mycollect_arr)
                });
        },
        components: {
            Slogan
        }
    }
</script>
<style lang='stylus' scoped>
    .no_collect_bk
        display none
    #no_collect
        height 100rem
        display flex
        align-items center
        justify-content center
        flex-flow: column
        img
            margin-top 20rem
            width 11.6rem
            height 8.8rem
            display flex
            align-items center
            justify-content center
        div
            margin-top 6.4rem
            width 100%
            text-align center
            font-size 2.8rem
            font-weight 600
            color #bdbdbd
    .my_collect
        margin-top 46px
        padding 4.6rem 2rem 4.6rem 4rem
        background-color #fff
        position relative
        height auto
        max-height calc(100% - 9.2rem)
        overflow scroll
        z-index 1
        .collect_item
            width 100%
            height 16rem
            display -webkit-box
            display -ms-flexbox
            display flex
            -webkit-box-pack justify
            -ms-flex-pack justify
            justify-content space-between
            position relative
            margin-bottom 3rem
            .speak_img
                width 28rem
                height 16rem
                -webkit-box-shadow 0 0 1rem rgba(0,0,0,.1)
                box-shadow 0 0 1rem rgba(0,0,0,.1)
            .detail
                width 31.2rem
                margin-right 5.4rem
                position relative
                .detail_title
                    width 100%
                    overflow hidden
                    text-overflow ellipsis
                    font-size 2.8rem
                    font-family PingFangSC-Medium
                    font-weight 500
                    color #000
                    display -webkit-box
                    -webkit-line-clamp 2
                    -webkit-box-orient vertical
                .speaker
                    display block
                    width 100%
                    font-size 2rem
                    font-family PingFangSC-Regular
                    font-weight 400
                    color #6f6f6f
                    white-space nowrap
                    text-overflow ellipsis
                    overflow hidden
                .play_count
                    position absolute
                    left 0
                    bottom 0
                    font-size 2rem
                    font-family PingFangSC-Regular
                    font-weight 400
                    line-height 2rem
                    color #6f6f6f
            .change_radio
                width 2.5rem
                height 2.5rem
                z-index 999
                position absolute
                right 0
                top calc(50% - 1.25rem)
                

</style>