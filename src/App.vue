<template>
  <div>
    <HeaderComponent></HeaderComponent> 
			<keep-alive>
			  <router-view class="content"></router-view>
			</keep-alive>
    <FooterComponent></FooterComponent>  
  </div>
</template>

<script>
import HeaderComponent from "./components/header.vue";
import FooterComponent from "./components/footer.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
};
</script>
<style>
.content {
  padding-top: 194px;
}
</style>

