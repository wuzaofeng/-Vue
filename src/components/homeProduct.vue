<template>
    <div class="homeProduct">
        <router-link :to="'/product/productDetail/'+homeProduct.id">
        <img :src="homeProduct.src" alt="">
            <div class="text">
                <h3>{{homeProduct.title}}</h3>
                <p v-for="item in homeProduct.desc">{{item}}</p>
            </div>
        </router-link> 
    </div>
</template>

<script>
export default {
  props: {
      homeProduct:{
          type:Object,
          default:function(){
              return{
                  src: require("@images/temp/1.jpg"),
                  title: "光波康复理疗仪",
                  desc:["电、光、磁、热、药","五大功能，效应叠加四路输出","适合各类人群使用"],
                  id:"#"
              }
          }
      }
  }
};
</script>

<style>

</style>
