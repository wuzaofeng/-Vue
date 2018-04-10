<template>
  <div>
    <imageHeader :image="imageHeaderSrc"></imageHeader>
    <div class="main block">
        <div class="main-wrapper clear">
            <div class="main-right">
                <div class="main-content">
                    <!-- 公用标题模块 -->
                    <div class="main-header clear">
                        <div class="main-header-title">
                            <span class="name">产品展示</span>
                            <span class="english-name">Product display</span>
                        </div>
                        <div class="path">
                            当前位置：
                          <router-link to="/home">首页</router-link>  &gt;
                          <a class="on">产品展示</a>
                        </div>
                    </div>
                    <!-- 产品展示详情模块 -->
                    <div class="product-list-wrapper">
                        <ul class="product-list clear">
                            <li v-for="item in productList">
                              <router-link :to="'/product/productDetail/'+item.id">
                                <div class="img-wrapper">
                                    <img :src="item.imageSrc" alt="光波康复理疗仪">
                                </div>
                                <h3 class="product-tit">光波康复理疗仪</h3>
                              </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="main-side">
                <div class="main-menu-title">
                    <div class="english-name">Product display</div>
                    <div class="name">产品展示</div>
                </div>
                <ul class="list">
                    <router-link tag="li" class="list-item" to="/product"><a>产品展示</a></router-link>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import imageHeader from "../../components/imageHeader";
export default {
  components: {
    imageHeader
  },
  data() {
    return {
      imageHeaderSrc: {
        src: require("../../assets/images/t1.png") //头部图片
      },

      // 商品列表
      productList: [
        {
          id: "1",
          imageSrc: require("../../assets/images/temp/p1.jpg"),
          title: "光波康复理疗仪"
        },
        {
          id: "2",
          imageSrc: require("../../assets/images/temp/p1.jpg"),
          title: "光波康复理疗仪"
        },
        {
          id: "3",
          imageSrc: require("../../assets/images/temp/p1.jpg"),
          title: "光波康复理疗仪"
        },
        {
          id: "4",
          imageSrc: require("../../assets/images/temp/p1.jpg"),
          title: "光波康复理疗仪"
        },
        {
          id: "5",
          imageSrc: require("../../assets/images/temp/p1.jpg"),
          title: "光波康复理疗仪"
        },
        {
          id: "6",
          imageSrc: require("../../assets/images/temp/p1.jpg"),
          title: "光波康复理疗仪"
        }
      ],

      // 左边侧边烂
      sideNav: [
        {
          href: "/product",
          name: "产品展示",
          active: true
        }
      ]
    };
  }
};
</script>
<style scoped>
/* 产品列表模块 */
.product-list-wrapper {
  min-height: 366px;
}

.product-list-wrapper .product-list li {
  float: left;
  width: 275px;
  padding: 15px;
}

.product-list .img-wrapper img {
  width: 275px;
  height: 232px;
}

.product-list .product-tit {
  padding: 5px 10px;
  text-align: center;
  font-size: 22px;
  color: #666;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.product-list li a:hover .product-tit {
  color: #17d292;
}
</style>
