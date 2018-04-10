<template>
  <div>
    <div class="carousel-wrapper">
      <el-carousel height="567px" trigger="click"  arrow="always">
        <el-carousel-item v-for="(item,index) in carouselList" :key="index">
          <div class="carousel-item" :style="{backgroundImage: 'url(' +item.src+ ')'}"></div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="home-product-wrapper">
      <div class="block">
            <div class="title">
                <h3>产品展示</h3>
                <span>Product display</span>
            </div>
            <div class="product-img clear">
              <div class="product-img1 fl">
                <homeProduct :homeProduct="productBig[0]"></homeProduct>
              </div>
              <div class="product-img2 fr">
                <homeProduct v-for="item in productSmall[0]" :homeProduct="item"></homeProduct>
              </div>
            </div>
            <div class="product-img clear">
              <div class="product-img2 fl">
                <homeProduct v-for="item in productSmall[1]" :homeProduct="item"></homeProduct>
              </div>
              <div class="product-img1 fr">
                <homeProduct :homeProduct="productBig[1]"></homeProduct>
              </div>
            </div>
        </div>
    </div>
    <div class="strength">
        <div class="block">
            <div class="title">
                <h3>优众实力</h3>
                <span>U·ZHONG POWER</span>
            </div>
            <ul id="hexGrid">
                <li v-for="item in powers" class="hex">
                    <div class="hexIn">
                        <img :src="item.src" alt="">
                        <div class="xiaHua">
                          <span :class="{big:item.isHasBig}"> {{item.name}}</span>
                          <br>
                          <br>
                          <span> {{item.desc}}</span>
                        </div>
                    </div>
                </li>  
               
            </ul>
        </div>
        <div class="aptitude">
            <div class="block">
                <div style="width:110%;">
                    <div class="aptitude-list" v-for="item in aptitudeList">
                        <img :src="item.src" alt="">
                        <p>{{item.name}}</p>
                        <p>{{item.english}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 新闻资讯 -->
    <div class="news-hot block">
      <div class="title">
          <h3>新闻资讯</h3>
          <span>News and information</span>
      </div>
      <div class="news-hos-list">
          <router-link  :to="'/news/newsDetail/'+ item.id" class="news-li" tag="div"  v-for="item in news">
              <div class="news-li-time"><span class="time1">{{itemDay(item.createDay)}}</span><span class="time2">{{itemYear(item.createDay)}}</span></div>
              <div class="news-li-img"><img :src="item.src" alt=""></div>
              <div class="news-li-content">
                  <h3>{{item.title}}
                    <!-- <router-link :to="'/news/newsDetail/'+ item.id">{{item.title}}</router-link> -->
                  </h3>
                  <p>{{filters_content(item.content)}}</p>
              </div>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import { cutString } from "@js/common";
import homeProduct from "@components/homeProduct";
export default {
  components: {
    homeProduct
  },
  mounted() {
    // console.log(cutString)
  },
  data() {
    return {
      // 轮播图
      carouselList: [
        {
          src: ""
        },
        {
          src: ""
        },
        {
          src: ""
        },
        {
          src: ""
        }
      ],

      // 产品展示
      // 大图
      productBig: [
        {
          src: require("../../assets/images/temp/1.jpg"),
          title: "光波康复理疗仪",
          desc: ["电、光、磁、热、药", "五大功能，效应叠加四路输出", "适合各类人群使用"],
          href: "#"
        },
        {
          src: require("../../assets/images/temp/1.jpg"),
          title: "光波康复理疗仪",
          desc: ["电、光、磁、热、药", "五大功能，效应叠加四路输出", "适合各类人群使用"],
          href: "#"
        }
      ],

      // 小图
      productSmall: [
        [
          {
            src: require("../../assets/images/temp/2.png"),
            title: "自定义广告名称",
            desc: ["广告描述"],
            href: "#"
          },
          {
            src: require("../../assets/images/temp/2.png"),
            title: "自定义广告名称",
            desc: ["广告描述"],
            href: "#"
          },
          {
            src: require("../../assets/images/temp/2.png"),
            title: "自定义广告名称",
            desc: ["广告描述"],
            href: "#"
          },
          {
            src: require("../../assets/images/temp/2.png"),
            title: "自定义广告名称",
            desc: ["广告描述"],
            href: "#"
          }
        ],
        [
          {
            src: require("../../assets/images/temp/2.png"),
            title: "自定义广告名称",
            desc: ["广告描述"],
            href: "#"
          },
          {
            src: require("../../assets/images/temp/2.png"),
            title: "自定义广告名称",
            desc: ["广告描述"],
            href: "#"
          },
          {
            src: require("../../assets/images/temp/2.png"),
            title: "自定义广告名称",
            desc: ["广告描述"],
            href: "#"
          },
          {
            src: require("../../assets/images/temp/2.png"),
            title: "自定义广告名称",
            desc: ["广告描述"],
            href: "#"
          }
        ]
      ],

      // 优众实力
      powers: [
        {
          src: require("../../assets/images/icon6.png"),
          name: "强大的企业实力",
          desc: "专业的科研团队",
          isHasBig: false
        },
        {
          src: require("../../assets/images/icon7.png"),
          name: "四大优势",
          desc: "Four big advantage",
          isHasBig: true
        },
        {
          src: require("../../assets/images/icon8.png"),
          name: "专业务实的战略",
          desc: "和运营管理团队",
          isHasBig: false
        },
        {
          src: require("../../assets/images/icon9.png"),
          name: "先进、健康、环保的产品",
          desc: "",
          isHasBig: false
        },
        {
          src: require("../../assets/images/icon10.png"),
          name: "完善的服务机构",
          desc: "",
          isHasBig: false
        }
      ],

      // 优众优势
      aptitudeList: [
        {
          src: require("../../assets/images/tb4.png"),
          name: "广阔的市场和平台",
          english: "Broad markets and platforms"
        },
        {
          src: require("../../assets/images/tb3.png"),
          name: "优质系统的管理",
          english: "Management of quality systems"
        },
        {
          src: require("../../assets/images/tb2.png"),
          name: "实力强大的运营团队",
          english: "A strong operating team"
        },
        {
          src: require("../../assets/images/tb1.png"),
          name: "高效率、高品质的服务",
          english: "High efficiency and high quality service"
        }
      ],

      // 新闻列表
      news: [
        {
          title: "【优众文化】优众之师齐汇郑州创未来优众之师齐汇郑州创未来",
          content:
            "一个企业人才队伍建设一般有两种：一种是引进，二是企业内部培养。在现在这样一个知识经济的时代，人才的竞争和人才的流动空前加....",
          src: require("../../assets/images/temp/1.png"),
          createDay: "2017-05-06",
          href: "/home"
        },
        {
          title: "【优众文化】优众之师齐汇郑州创未来优众之师齐汇郑州创未来",
          content:
            "一个企业人才队伍建设一般有两种：一种是引进，二是企业内部培养。在现在这样一个知识经济的时代，人才的竞争和人才的流动空前加....",
          src: require("../../assets/images/temp/1.png"),
          createDay: "2017-05-06",
          href: "/home"
        },
        {
          title: "【优众文化】优众之师齐汇郑州创未来优众之师齐汇郑州创未来",
          content:
            "一个企业人才队伍建设一般有两种：一种是引进，二是企业内部培养。在现在这样一个知识经济的时代，人才的竞争和人才的流动空前加....",
          src: require("../../assets/images/temp/1.png"),
          createDay: "2017-05-06",
          href: "/home"
        }
      ]
    };
  },
  computed: {},
  created() {
    // 轮播图
    this.axios.get("mock/getCarousel").then(res => {
      let data = res.data;
      this.carouselList = data.carouselList;
    });

    // 获取产品大图
    this.axios.get("mock/getProductBig").then(res => {
      let data = res.data;
      this.productBig = data.productBigList;
    });

    // 获取产品小图
    this.axios.get("mock/getProductSmall").then(res => {
      let data = res.data;
      this.productSmall = data.productSmallList;
    });

    // 获取最热新闻
    this.axios.get("mock/getNewsHotList").then(res => {
      let data = res.data;
      this.news = data.newsHotListObject;
    });
  },
  methods: {
    cutString(str, len) {
      //length属性读出来的汉字长度为1
      if (str.length * 2 <= len) {
        return str;
      }
      var strlen = 0;
      var s = "";
      for (var i = 0; i < str.length; i++) {
        s = s + str.charAt(i);
        if (str.charCodeAt(i) > 128) {
          strlen = strlen + 2;
          if (strlen >= len) {
            return s.substring(0, s.length - 1) + "...";
          }
        } else {
          strlen = strlen + 1;
          if (strlen >= len) {
            return s.substring(0, s.length - 2) + "...";
          }
        }
      }
      return s;
    },
    filters_content(content) {
      return this.cutString(content, 180);
    },
    itemDay(createDay) {
      return createDay.split("-")[1] + "/" + createDay.split("-")[2];
    },
    itemYear(createDay) {
      return createDay.split("-")[0];
    }
  },
  filters: {
    filterTime(time) {
      let str = `<span class="time1">${time}</span><span class="time2">2017</span>`;
      return str;
    }
  }
};
</script>
<style scoped>
.carousel-item {
  height: 567px;
  background: url(../../assets/images/1.jpg) no-repeat center;
  background-size: 1920px 567px;
}

.title {
  margin-bottom: 45px;
}
.title h3 {
  font-size: 48px;
  color: #333;
}
.title span {
  color: #999;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
}

.news-hos-list {
  padding-bottom: 50px;
}
.news-hot .news-li {
  height: 150px;
  position: relative;
  margin-bottom: 20px;
}

.news-li-time {
  width: 150px;
  height: 150px;
  background: #17d292;
  position: absolute;
}
.news-hot .news-li:hover .news-li-time {
  background: #096344;
}
.news-li-time span {
  cursor: pointer;
  text-align: center;
  color: #fff;
  display: block;
}
.news-li-time .time1 {
  font-size: 32px;
  padding-top: 37px;
}
.news-li-time .time2 {
  font-size: 24px;
}
.news-li-img {
  position: absolute;
  right: 0;
  top: 0;
}
.news-li-img img {
  cursor: pointer;
  width: 480px;
  height: 150px;
}
.news-li-content {
  cursor: pointer;
  margin: 0 500px 0 0;
  padding-left: 172px;
  background: #f5f5f5;
  height: 150px;
  padding-right: 20px;
}
.news-li-content h3{
  color: #333;
  font-size: 24px;
  padding: 30px 0 10px 0;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.news-li-content p {
  color: #999;
  font-size: 16px;
  text-align: justify;
  line-height: 24px;
}

/*优众实力开始*/
#hexGrid {
  overflow: hidden;
  margin: 0 auto;
  padding: 0.866% 0;
  font-family: "Raleway", sans-serif;
  font-size: 15px;
}
#hexGrid:after {
  content: "";
  display: block;
  clear: both;
}
.hex {
  position: relative;
  list-style-type: none;
  float: left;
  overflow: hidden;
  visibility: hidden;
  outline: 1px solid transparent;

  -webkit-transform: rotate(-60deg) skewY(30deg) translatez(-1px);
  -ms-transform: rotate(-60deg) skewY(30deg) translatez(-1px);
  transform: rotate(-60deg) skewY(30deg) translatez(-1px);
}
.hex * {
  position: absolute;
  visibility: visible;
  outline: 1px solid transparent;
}
.hexIn {
  cursor: pointer;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #fff;
  overflow: hidden;
  -webkit-transform: skewY(-30deg) rotate(60deg);
  -ms-transform: skewY(-30deg) rotate(60deg);
  transform: skewY(-30deg) rotate(60deg);
}

.hex img {
  left: -100%;
  right: -100%;
  width: auto;
  height: 100%;
  margin: 0 auto;
}
.hex .xiaHua {
  width: 102%;
  height: 110%;
  left: -1%;
  padding: 5%;
  background-color: rgba(0, 0, 0, 0.5);
  font-weight: 300;
  -webkit-transition: -webkit-transform 0.2s ease-out, opacity 0.3s ease-out;
  transition: transform 0.2s ease-out, opacity 0.3s ease-out;
}
.hex .xiaHua {
  bottom: 50%;
  padding-top: 50%;
  z-index: 1;
  -webkit-transform: translateY(-100%) translatez(-1px);
  -ms-transform: translateY(-100%) translatez(-1px);
  transform: translateY(-100%) translatez(-1px);
}
.hex .xiaHua:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 45%;
  width: 10%;
  text-align: center;
}

.hexIn:hover .xiaHua,
.hexIn:focus .xiaHua {
  -webkit-transform: translate(-5%, 65%);
  -ms-transform: translate(-5%, 65%);
  transform: translate(-5%, 65%);
}
.xiaHua {
  color: #fff;
  font-size: 20px;
}
.xiaHua span {
  display: inline-block;
  width: 100%;
  position: absolute;
  left: -0px;
  text-align: center;
}
.xiaHua span.big {
  font-size: 45px;
  top: 170px;
}
@media (min-width: 1201px) {
  /* <- 5-4  hexagons per row */

  .hex {
    width: 32.666%;
    /* = (100-2) / 3 */

    padding-bottom: 37.72%;
    /* =  width / sin(60) */
  }
  .hex:nth-child(5n + 4),
  .hex:nth-child(5n + 5) {
    margin-top: -8.564%;
    margin-bottom: -8.564%;
    -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);
    -ms-transform: translateX(50%) rotate(-60deg) skewY(30deg);
    transform: translateX(50%) rotate(-60deg) skewY(30deg);
  }
  .hex:nth-child(5n + 4):last-child,
  .hex:nth-child(5n + 5):last-child {
    margin-bottom: 0;
  }
  .hex:nth-child(5n + 4) {
    margin-right: 1%;
    margin-left: 0.5%;
  }
  .hex:nth-child(5n + 2) {
    margin-left: 1%;
    margin-right: 1%;
  }
  .hex:nth-child(5n + 6) {
    clear: left;
  }
}
@media (max-width: 1200px) and (min-width: 901px) {
  /* <- 4-3  hexagons per row */

  .hex {
    width: 32.666%;
    /* = (100-2) / 3 */

    padding-bottom: 37.72%;
    /* =  width / sin(60) */
  }
  .hex:nth-child(5n + 4),
  .hex:nth-child(5n + 5) {
    margin-top: -8.564%;
    margin-bottom: -8.564%;
    -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);
    -ms-transform: translateX(50%) rotate(-60deg) skewY(30deg);
    transform: translateX(50%) rotate(-60deg) skewY(30deg);
  }
  .hex:nth-child(5n + 4):last-child,
  .hex:nth-child(5n + 5):last-child {
    margin-bottom: 0;
  }
  .hex:nth-child(5n + 4) {
    margin-right: 1%;
    margin-left: 0.5%;
  }
  .hex:nth-child(5n + 2) {
    margin-left: 1%;
    margin-right: 1%;
  }
  .hex:nth-child(5n + 6) {
    clear: left;
  }
}
@media (max-width: 900px) and (min-width: 601px) {
  /* <- 3-2  hexagons per row */

  .hex {
    width: 32.666%;
    /* = (100-2) / 3 */

    padding-bottom: 37.72%;
    /* =  width / sin(60) */
  }
  .hex:nth-child(5n + 4),
  .hex:nth-child(5n + 5) {
    margin-top: -8.564%;
    margin-bottom: -8.564%;
    -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);
    -ms-transform: translateX(50%) rotate(-60deg) skewY(30deg);
    transform: translateX(50%) rotate(-60deg) skewY(30deg);
  }
  .hex:nth-child(5n + 4):last-child,
  .hex:nth-child(5n + 5):last-child {
    margin-bottom: 0;
  }
  .hex:nth-child(5n + 4) {
    margin-right: 1%;
    margin-left: 0.5%;
  }
  .hex:nth-child(5n + 2) {
    margin-left: 1%;
    margin-right: 1%;
  }
  .hex:nth-child(5n + 6) {
    clear: left;
  }
}
@media (max-width: 600px) {
  /* <- 2-1  hexagons per row */

  .hex {
    width: 32.666%;
    /* = (100-2) / 3 */

    padding-bottom: 37.72%;
    /* =  width / sin(60) */
  }
  .hex:nth-child(5n + 4),
  .hex:nth-child(5n + 5) {
    margin-top: -8.564%;
    margin-bottom: -8.564%;
    -webkit-transform: translateX(50%) rotate(-60deg) skewY(30deg);
    -ms-transform: translateX(50%) rotate(-60deg) skewY(30deg);
    transform: translateX(50%) rotate(-60deg) skewY(30deg);
  }
  .hex:nth-child(5n + 4):last-child,
  .hex:nth-child(5n + 5):last-child {
    margin-bottom: 0;
  }
  .hex:nth-child(5n + 4) {
    margin-right: 1%;
    margin-left: 0.5%;
  }
  .hex:nth-child(5n + 2) {
    margin-left: 1%;
    margin-right: 1%;
  }
  .hex:nth-child(5n + 6) {
    clear: left;
  }
}
@media (max-width: 500px) {
  #hexGrid,
  #header > .tob {
    font-size: 10px;
  }
}

/* 优众实力 */
.aptitude {
  min-height: 395px;
  background: #f5f5f5;
  margin-bottom: 50px;
  margin-top: 50px;
}
.aptitude-list {
  float: left;
  width: 181px;
  line-height: 26px;
  text-align: center;
  color: #666;
  margin: 118px 147px 0 0;
  font-size: 16px;
}
.aptitude-list img {
  margin-bottom: 10px;
}
</style>

<style>
/* 产品 */
.product-img {
  width: 1220px;
}
.product-img .text {
  display: none;
}
.product-img a:hover .text {
  display: block;
}
.product-img1 {
  margin-right: 10px;
  margin-bottom: 20px;
}
.product-img1 a {
  display: block;
  position: relative;
}
.product-img1 .text {
  position: absolute;
  left: 0;
  top: 0;
  width: 600px;
  height: 400px;
  background: rgba(23, 210, 146, 0.5);
  color: #fff;
  text-align: center;
}
.product-img1 .text h3 {
  font-size: 42px;
  display: inline-block;
  padding: 85px 26px 16px;
  border-bottom: 2px solid #fff;
  margin-bottom: 20px;
}
.product-img1 .text p {
  font-size: 20px;
  width: 488px;
  margin: 0 auto 10px;
  line-height: 40px;
}

.product-img2 {
  width: 600px;
}
.product-img2 a {
  display: block;
  float: left;
  width: 280px;
  height: 190px;
  margin: 0 20px 20px 0;
  position: relative;
}
.product-img2 a img {
  width: 280px;
  height: 190px;
}
.product-img2 .text {
  position: absolute;
  left: 0;
  top: 0;
  width: 280px;
  height: 190px;
  background: rgba(23, 210, 146, 0.5);
  color: #fff;
  text-align: center;
}
.product-img2 .text h3 {
  font-size: 20px;
  display: inline-block;
  padding: 28px 26px 16px;
  border-bottom: 2px solid #fff;
  margin-bottom: 20px;
}
.product-img2 .text p {
  font-size: 16px;
}
</style>
<style>
.el-carousel__arrow {
  z-index: 9;
}
</style>

