<template>
     <div>
         <tab-bar>
             <tab-bar-item path='/home'>
                      <div  slot="item_icon"><img src="../../.././assets/img/tabbar/home.svg" alt=""></div>
                      <div  slot="item_icon_active"><img src="../../.././assets/img/tabbar/home_active.svg" alt=""></div>
                      <div slot="item_text">首页</div>
             </tab-bar-item>
             <tab-bar-item path='/cartgory'>
                     <div  slot="item_icon"><img src="../../.././assets/img/tabbar/category.svg" alt=""></div>
                     <div  slot="item_icon_active"><img src="../../.././assets/img/tabbar/category_active.svg" alt=""></div>
                     <div slot="item_text">分类</div>
            </tab-bar-item>  
             <tab-bar-item path='/shopcart'>
                    <div slot="item_icon"><img src="../../.././assets/img/tabbar/shopcart.svg" alt=""></div>
                    <div  slot="item_icon_active"><img src="../../.././assets/img/tabbar/shopcart_active.svg" alt=""></div>
                    <div slot="item_text">购物车</div>
            </tab-bar-item>  
             <tab-bar-item path='/profile'>
                    <div slot="item_icon"><img src="../../.././assets/img/tabbar/profile.svg" alt=""></div>
                    <div slot="item_icon_active"><img src="../../.././assets/img/tabbar/profile_active.svg" alt=""></div>
                    <div slot="item_text">我的</div>
            </tab-bar-item>                 
         </tab-bar>
     </div>
</template>

<script>

import TabBar from '../../common/tabbar/TabBar.vue'
import TabBarItem from '../../common/tabbar/TabBarItem.vue'

export default {
  name: 'MainTabBar',
  components:{
      TabBar,
      TabBarItem
  },
  data(){
      return{
        //   isActive:true
      }
  }
}
</script>

<style>

</style>