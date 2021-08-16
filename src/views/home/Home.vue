<template>
  <div  id="home">
    <nav-bar class="home_nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends='recommends'></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab_Control" :titles="['流行','新款','精选']"></tab-control>
    <goods-list :goods="goods['pop'].list"></goods-list>
  </div>
</template>

<script>

import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'


import NavBar from '../../components/common/navbar/NavBar.vue'
import TabControl from '../../components/context/tabControl/TabControl.vue'
import GoodsList from '../../components/context/goods/GoodsList.vue'


import {getHomeMultiData,getHomeGoods} from '../.././network/home.js'

export default {
  name: "Home",
  data(){
     return {
       banners:[],
       recommends:[],
       goods:{
         'pop':{page:0,list:[]},
         'new':{page:0,list:[]},
         'sell':{page:0,list:[]}
       },

     }
  },
  components:{
    HomeSwiper,
    RecommendView,
    FeatureView,
    
    NavBar,
    TabControl,
    GoodsList
  },
  // 生命周期函数，等DOM元素创建完之后发送网络请求
  created(){
     //请求多个数据
       GetHomeMultiData();
       //进来的话直接请求三个数据
       GetHomeGoods('pop');
       GetHomeGoods('new');
       GetHomeGoods('sell')
  },
  methods:{
    GetHomeMultiData() {
      getHomeMultiData().then(res => {
       //这里在data定义数据接受是因为，函数中的变量是会被回收的。要让他保留下来，就用函数里面的变量赋给data里面的值就行
       this.banners = res.data.banner.list;
       this.recommends = res.data.recommend.list
     })
    },
    GetHomeGoods(type){
      //这里的思想就是，每次请求的页码在原先基础加一，可以有效解决缓存问题
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
       //保存res数据，不让他被销毁. 把res.data.list里面的数据加到goods里面
       this.goods[type].list.push(...res.data.list)
       //这里新加了一个数组，给数组加一
       this.goods[type].page += 1
      })
    }
  }
  
};
</script>

<style>
#home {
  height: 1000px;
}
.home_nav {
  background-color: #fb7299;
  color: #fff;
}
/* 当还没到他的高度44px时，他就是简单的浮动效果。到了之后它就变成固定定位了 */
.tab_Control {
  position: sticky;
  top: 44px;
  z-index: 5;
}
</style>


