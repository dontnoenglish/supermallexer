<template>
    <div class="tab_bar">
        <slot></slot>
    </div>
</template>

<script>



export default {
  name: 'TabBar'
}
</script>

<style>
  .tab_bar {
         display: flex;
         background-color: #f6f6f6;
         position:fixed;
         bottom: 0;
         left: 0;
         right: 0;
         height: 49px;
         text-align: center;
         /* vertical-align: middle; */
  }
</style>