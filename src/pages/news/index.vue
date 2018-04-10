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
                                <span class="name">新闻资讯</span>
                                <span class="english-name">News and information</span>
                            </div>
                            <div class="path">
                              当前位置： 
                              <a href="/home">首页</a> &gt;
                              <a href="/news">新闻资讯</a> &gt;
                              <a class="on">优众资讯</a>
                            </div>
                        </div>
                        <div class="news-wrapper">
                         <router-view></router-view>
                        </div>            
                    </div>
                </div>
                <div class="main-side">
                    <div class="main-menu-title">
                        <div class="english-name">News and information</div>
                        <div class="name">新闻资讯</div>
                    </div>
                    <ul class="list">
                      <router-link tag="li" class="list-item" to="/news"><a>优众资讯</a></router-link>
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
        src: require("../../assets/images/t2.png") //头部图片
      },
      // 左边侧边烂
      sideNav: [
        {
          href: "/news",
          name: "优众资讯",
          active: true
        }
      ],
      newsList: [
        {
          id: 1,
          newImgSrc: require("./../../assets/images/temp/new1.jpg"),
          title: "优众之师齐汇郑州创未来",
          createDate: "2017-05-06",
          content:
            "清明时节，细雨纷纷，正是踏春好时节。值此之际，2017优众第二届中高层战略研讨会在中国十三朝古都——洛阳胜利召开。出席本次会议的有优众执行总裁赵国星先生、副总裁何光曜先生、副总裁王棋先生及部长以上的中高层领导清明时节，细..."
        },
        {
          id: 2,
          newImgSrc: require("./../../assets/images/temp/new1.jpg"),
          title: "优众之师齐汇郑州创未来",
          createDate: "2017-05-06",
          content:
            "清明时节，细雨纷纷，正是踏春好时节。值此之际，2017优众第二届中高层战略研讨会在中国十三朝古都——洛阳胜利召开。出席本次会议的有优众执行总裁赵国星先生、副总裁何光曜先生、副总裁王棋先生及部长以上的中高层领导清明时节，细..."
        },
        {
          id: 3,
          newImgSrc: require("./../../assets/images/temp/new1.jpg"),
          title: "优众之师齐汇郑州创未来",
          createDate: "2017-05-06",
          content:
            "清明时节，细雨纷纷，正是踏春好时节。值此之际，2017优众第二届中高层战略研讨会在中国十三朝古都——洛阳胜利召开。出席本次会议的有优众执行总裁赵国星先生、副总裁何光曜先生、副总裁王棋先生及部长以上的中高层领导清明时节，细..."
        }
      ]
    };
  }
};
</script>

<style>
/* 新闻资讯模块 */
.news-wrapper .news-list li {
  margin-bottom: 45px;
}
.news-wrapper {
  margin-top: 50px;
}

.news-list .img-wrapper {
  float: left;
  width: 290px;
  height: 200px;
}

.news-list .img-wrapper img {
  width: 290px;
  height: 200px;
}

.news-list .new-wrapper {
  float: left;
  margin-left: 20px;
  width: 605px;
}

.news-list .new-wrapper .new-tit {
  font-size: 22px;
  color: #666;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 20px;
}

.news-list .new-wrapper .new-date {
  margin-bottom: 10px;
  background: url("./../../assets/images/date.png") no-repeat;
  background-position: 0px 2px;
  padding-left: 23px;
  color: #999;
  font-size: 14px;
}

.news-list .new-wrapper .new-desc {
  margin-bottom: 10px;
  line-height: 26px;
  font-size: 14px;
  color: #999;
  height: 80px;
  overflow: hidden;
}

.news-list .new-wrapper .new-goto-detail {
  display: inline-block;
  padding: 7px 10px;
  background: #17d292;
  font-size: 18px;
  color: #fff;
  transition: all 0.5s;
}
.news-list .new-wrapper .new-goto-detail:hover {
  background: #0a855b;
}
</style>

