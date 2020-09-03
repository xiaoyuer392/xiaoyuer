import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home'
import Spot from '../views/spot'
import Wanxiang from '../views/wanxiang'
import Mine from '../views/mine'
import HomeContent from '../views/homecontent'
import Yanjianglist from '../views/yanjianglist'
import Zhiyalist from '../views/zhiyalist'
import Recordlist from '../views/recordlist'
import Detail from '../views/detail'
import zhiyaDetail from '../views/zhiyadetail'
import itemlist from '../components/wanxiangc/itemlist.vue'
import yixihongben from '../components/wanxiangc/yixihongben.vue'
import About from '../views/about'
import UserPrivate from '../views/user-private'
import Order from '../views/order'
import Collect from '../views/collect'
import Comment from '../views/comment'
import Notice from '../views/notice'

import Invite from '../views/invite'
import InviteCode from '../views/invitecode'
import ExchangeCode from '../views/exchangecode'
import Suggest from '../views/suggest'
import Setting from '../views/setting'


import wanxiangdetail from '../components/wanxiangc/wanxiangdetail.vue'
import wanxiangdetailjianjie from '../components/wanxiangc/wanxiangdetailjianjie.vue'
import wanxiangdetailmulu from '../components/wanxiangc/wanxiangdetailmulu.vue'

/* 现场部分内容 */
import speek from 'spots/speek'
import countyard from 'spots/countyard'
/* 时间线部分内容 */
import times from 'spots/times/times'
/* 演讲详情内容部分 */
import speek_details from 'spots/speek_details/speek_details'
import countyard_detail from 'spots/speek_details/countyard_detail'


import search from 'spots/search/search'
Vue.use(VueRouter)


const routes = [
  {
    path: "/",
    redirect: "/home",
    component: Home,
    children: [
      {
        path: "/home",
        name: "home",
        component: HomeContent,
        meta: {
          path: "/home",
        },
      },
      {
        path: "spot",
        name: "spot",
        component: Spot,
        meta: {
          path: "/spot/speek",
        },
        redirect: "/spot/speek",
        children: [
          {
            path: "speek",
            component: speek,
            meta: {
              path: "/spot/speek",
              dir: 0,
            },
          },
          {
            path: "countyard",
            component: countyard,
            meta: {
              path: "/spot/speek",
              dir: 1,
            },
          },
        ],
      },
      {
        path: "wanxiang",
        name: "wangxiang",
        component: Wanxiang,
        meta: {
          path: "/wanxiang/itemlist",
        },
        redirect:'/wanxiang/itemlist',
        children:[
          {
            path: 'itemlist',
            name: 'itemlist',
            meta:{
              path:'/wanxiang/itemlist', 
            },
            component: itemlist
          },
          {
            path: 'yixihongben',
            name: 'yixihongben',
            meta:{
              path:'/wanxiang/itemlist'
            },
            component: yixihongben
          }
        ]
      },
      {
        path: "mine",
        name: "mine",
        component: Mine,
        meta: {
          path: "/mine",
        },
      },
    ],
  },
  {
    path: "/times/:id",
    component: times,
    props: true,
  },
  {
    path: "/speek_details/:id",
    name: "speek_details",
    component: speek_details,
    props: true,
  },
  {
    path: "/countyard_detail/:id",
    name: "countyard_detail",
    component: countyard_detail,
    props: true,
  },
  {
    path: "/search",
    name: "search",
    component: search,
    props: true,
  },
  {
    path: "/yanjianglist",
    component: Yanjianglist,
  },
  {
    path:'/detail',
    component:Detail
  },
  {
    path:'/zhiyadetail',
    component:zhiyaDetail
  },
  {
    path:'/about',
    component:About
  },
  {
    path:'/user-private',
    component:UserPrivate
  },
  {
    path:'/order',
    component:Order
  },
  {
    path:'/collect',
    component:Collect
  },
  {
    path:'/comment',
    component:Comment
  },
  {
    path:'/notice',
    component:Notice
  },
  {
    path:'/invite',
    redirect: '/invite/invitecode',
    component:Invite,
    children:[
      {
        path: 'invitecode',
        meta: {
          path: '/invite',
          dir: 0
        },
        component: InviteCode,
        
      },
      {
        path: 'exchangecode',
        meta: {
          path: '/home/movies',
          dir: 1
        },
        component: ExchangeCode,
      }
    ]
  },
  {
    path:'/suggest',
    component:Suggest
  },
  {
    path:'/setting',
    component:Setting
  },
  {
    path: "/recordlist",
    component: Recordlist,
  },
  {
    path: "/zhiyalist",
    component: Zhiyalist,
  },
  {
    path: "/detail",
    component: Detail,
  },
  {
    path:'/wanxiangdetail/:id',
    component: wanxiangdetail,
    // redirect:'/wanxiangdetailjianjie',
    children:[
      {

        path:'/wanxiangdetailjianjie',
        name:'wanxiangdetailjianjie',
        component: wanxiangdetailjianjie
      },
      {
        path:'/wanxiangdetailmulu',
        name:'wanxiangdetailmulu',
        component: wanxiangdetailmulu
      }
    ]
  }]
  


const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router