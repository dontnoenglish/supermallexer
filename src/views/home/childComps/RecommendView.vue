<template>
    <div class="recommend">
        <div v-for="item in recommends">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name:'RecommendView',
  data(){
   return {

   }
  },
  props:{
      recommends:{
          type:Array,
          default(){
              return []
          }
      }
  }

}
</script>

<style scoped>
.recommend {
    display: flex;
     width: 100%;
     padding: 10px 0 20px;
     text-align: center;
    border-bottom: 8px solid #eee;
}
.recommend>div {
    flex: 1;
}
.recommend>div a {
  text-decoration:none;
    color:#333;
   list-style:none;
}

.recommend>div img {
    width: 65px;
    height: 65px;
}
</style>
