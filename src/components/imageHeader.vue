<template>
    <div class="image-wrapper">
        <img :src="image.src" alt="">
    </div>
</template>

<script>
export default {
  props:{
      image:{
          default:{
            src: require("../assets/images/t1.png")
          }
      }
  }
}
</script>

<style scoped>
/* 头部图片模块 */
.image-wrapper{
    position: relative;
    height: 220px;
    overflow: hidden;
    margin-bottom: 65px;
}

.image-wrapper img{
    position: absolute;
    left: 50%;
    top: 0;
    margin: 0 0 0 -960px;
}
</style>
