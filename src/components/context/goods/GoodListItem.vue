<template>
     <div class="goods_item">
         <img :src="goodsItem.show.img" alt="">
         <div class="goods_info">
             <p>{{goodsItem.title}}</p>
             <span>{{goodsItem.price}}</span>
             <span>{{goodsItem.cfav}}</span>
         </div>
     </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  data(){
   return {

   }
  },
  props:{
      goodsItem:{
          type:Object,
          default(){
              return {}
          }
      }
  }
}
</script>

<style scoped>

</style>
