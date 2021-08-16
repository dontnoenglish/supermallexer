<template>
    <div class="tab_control">
        <div v-for="(item,index) in titles" 
        class="tab_control_item" 
        :class="{active:index===current}"
        @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name:'TabControl',
  data(){
   return {
       current:0
   }
  },
  props:{
      titles:{
          type:Array,
          default(){
              return []
          }
      }
  },
  methods:{
      itemClick(index){
          this.current = index
      }
  }
}
</script>

<style scoped>
.tab_control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
}
.tab_control_item {
    flex: 1;
}
.active {
    color: pink;
}
.active span{
    border-bottom: 1px solid pink;
    padding: 5px;
}
</style>
