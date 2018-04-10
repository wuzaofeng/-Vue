<template>
  <div>
    <imageHeader :image="imageHeaderSrc"></imageHeader>
    <div class="main block" style="margin-bottom:30px;">
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
                        <router-link to="/product">产品展示</router-link>  &gt;
                        <a class="on">产品详情</a>   
                    </div>
                </div>
                <!-- 产品展示详情模块 -->
                <div class="product-detail-wrapper">
                    <div class="product-detail clear">
                        <div class="img-wrapper">  
                            <div id="MagnifierWrap2">
                                <div class="MagnifierMain">
                                    <img class="MagTargetImg" src="../../../assets/images/temp/p1.jpg">
                                </div>
                                <div class="spec-items">
                                    <ul style="left: 0px;">
                                        <li class=""><img src="../../../assets/images/temp/p1.jpg"></li>
                                        <li class="on"><img src="../../../assets/images/temp/p1.jpg"></li>
                                        <li class=""><img src="../../../assets/images/temp/p1.jpg"></li>
                                        <li class=""><img src="../../../assets/images/temp/p1.jpg"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="detail-wrapper">
                            <h3 class="detail-tit">
                                {{productTitle}}
                            </h3>
                            <ul class="description">
                                <li v-for="item in productDesc">【{{item.name}}】{{item.desc}}</li>
                            </ul>
                        </div>
                    </div>
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
    <div class="block" style="margin-bottom:60px;">
      <!-- 产品详情 -->
      <div class="main-header clear" style="border-bottom:1px solid #666; margin-bottom: 35px;">
          <div class="main-header-title">
              <span class="name">产品详情</span>
              <span class="english-name">Products particulars</span>
          </div>
      </div>
      <div class="prodcut-detail-desc">
          <img src="../../../assets/images/temp/d1.jpg" width="1200px" alt="">
      </div>
  </div>
</div>
</template>
<script>
import imageHeader from "../../../components/imageHeader";
import "./../../../assets/js/g.min";
export default {
  components: {
    imageHeader
  },
  data() {
    return {
      imageHeaderSrc: {
        src: require("../../../assets/images/t1.png") //头部图片
      },
      // 左边侧边烂
      sideNav: [
        {
          href: "/product",
          name: "产品展示",
          active: true
        }
      ],
      productTitle: "光波康复理疗仪光波康复理疗仪光波康复理疗仪光波康复理疗仪光波康复理疗仪",
      productDesc: [
        {
          name: "型 号",
          desc: "GH-6000C型"
        },
        {
          name: "使用电源",
          desc: "~220V 50Hz"
        },
        {
          name: "激光波长",
          desc: "波长为650nm±50nm"
        },
        {
          name: "激光最大输出功率",
          desc: "3mW±1mW"
        },
        {
          name: "工作载波频率",
          desc: "1.2kHz±10%"
        },
        {
          name: "屏幕指示",
          desc: "彩色液晶LCD指示，加带背光"
        },
        {
          name: "安全防护",
          desc: "||类BF型应用部分"
        }
      ],
      productDetail: ""
    };
  },
  mounted() {
    // 放大镜
    MagnifierF("MagnifierWrap2");

    console.log(this.$route.params.id);
  }
};
</script>
<style >
/* 产品展示详情模块 */
.product-detail-wrapper {
  margin-top: 30px;
}
.product-detail-wrapper .product-detail .img-wrapper {
  float: left;
  width: 453px;
}
.product-detail-wrapper .product-detail .detail-wrapper {
  float: left;
  width: 422px;
  margin-left: 40px;
}

.detail-wrapper .detail-tit {
  margin: 60px 0 30px;
  font-size: 18px;
  color: #666;
}
.detail-wrapper .description {
  font-size: 16px;
  color: #666;
}
.detail-wrapper .description li {
  margin-bottom: 20px;
}

.prodcut-detail-desc {
  max-height: 100%;
}

/* 放大镜 */
#MagnifierWrap2 {
  position: relative;
  width: 453px;
}

.MagnifierMain {
  position: relative;
  width: 453px;
  height: 370px;
  margin-bottom: 20px;
}

.MagnifierMain img {
  width: 451px;
  height: 368px;
  border: 1px solid #666;
}

.MagnifierDrag {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ccc;
  opacity: 0.4;
  filter: alpha(opacity=40);
  cursor: move;
}

.MagnifierPop {
  position: absolute;
  top: 0;
  overflow: hidden;
}

.MagnifierImg {
  position: absolute;
  top: 0;
  left: 0;
}

.spec-items {
  position: relative;
  width: 453px;
  height: 87px;
  overflow: hidden;
  margin: 0 auto;
}

.spec-items ul {
  width: 500%;
  position: absolute;
  top: 0;
  left: 0;
}

.spec-items ul * {
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

.spec-items li {
  width: 105px;
  height: 85px;
  float: left;
  overflow: hidden;
  margin-right: 8px;
  border: 1px solid #666;
  cursor: pointer;
}

.spec-items li img {
  width: 105px;
  height: 85px;
  -webkit-transform: scale(1, 1);
  -ms-transform: scale(1, 1);
  -o-transform: scale(1, 1);
  transform: scale(1, 1);
}

.spec-items li.on img {
  -webkit-transform: scale(1.2, 1.2);
  -ms-transform: scale(1.2, 1.2);
  -o-transform: scale(1.2, 1.2);
  transform: scale(1.2, 1.2);
}

span.spe_leftBtn,
span.spe_rightBtn {
  position: absolute;
  bottom: 0px;
  display: block;
  width: 20px;
  height: 69px;
  line-height: 69px;
  font-family: "黑体";
  text-align: center;
  font-size: 30px;
  color: #ddd;
  cursor: default;
  background-color: #f9f9f9;
}

span.on {
  background-color: #ccc;
  color: #999;
  cursor: pointer;
}

span.spe_leftBtn {
  left: 0;
}

span.spe_rightBtn {
  right: 0;
}
</style>
