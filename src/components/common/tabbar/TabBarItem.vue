<template>
     <div class="tab_bar_item">
             <div @click="itemClick">
                <div v-if="!isActive"><slot name="item_icon"></slot></div>
                <div v-else><slot name='item_icon_active'></slot></div>
                <div :style='activeStyle'><slot name="item_text"></slot></div>
             </div>
     </div>
</template>

<script>



export default {
  name: 'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
   .tab_bar_item {
    flex: 1;
    text-align: center;
    height: 49px;
    margin-top: 3px;
  }
  .tab_bar_item img {
    height: 24px;
    width: 24px;
  }

</style>