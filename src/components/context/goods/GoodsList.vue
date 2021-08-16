<template>
       <div class="goods">
            <goods-list-item v-for="item in goods" :goods-item="item"></goods-list-item>
       </div>
</template>

<script>
import GoodsListItem from './GoodListItem.vue'
export default {
  name:'GoodsList',
  data(){
   return {

   }
  },
  components:{
       GoodsListItem
  },
  props:{
      goods:{
          type:Array,
          defalut(){
              return []
          }
      }
  }
}
</script>

<style scoped>

</style>
