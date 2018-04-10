<template>
<ul class="news-list">
    <li class="clear" v-for="item in newsList">
        <div class="img-wrapper">
            <img :src="item.newImgSrc" :alt="item.title">
        </div>
        <div class="new-wrapper">
            <h3 class="new-tit">
              <router-link :to="'/news/newsDetail/'+item.id">{{item.title}}</router-link>
            </h3>
            <div class="new-date">{{item.createDate}}</div>
            <div class="new-desc">{{item.content}}</div>
            <router-link class="new-goto-detail" :to="'/news/newsDetail/'+item.id">阅读全文</router-link>
        </div>
    </li>
</ul>
</template>

<script>
export default {
  data() {
    return {
      newsList: [
        {
          id: 1,
          newImgSrc: require("./../../../assets/images/temp/new1.jpg"),
          title: "优众之师齐汇郑州创未来",
          createDate: "2017-05-06",
          content:
            "清明时节，细雨纷纷，正是踏春好时节。值此之际，2017优众第二届中高层战略研讨会在中国十三朝古都——洛阳胜利召开。出席本次会议的有优众执行总裁赵国星先生、副总裁何光曜先生、副总裁王棋先生及部长以上的中高层领导清明时节，细..."
        },
        {
          id: 2,
          newImgSrc: require("./../../../assets/images/temp/new1.jpg"),
          title: "优众之师齐汇郑州创未来",
          createDate: "2017-05-06",
          content:
            "清明时节，细雨纷纷，正是踏春好时节。值此之际，2017优众第二届中高层战略研讨会在中国十三朝古都——洛阳胜利召开。出席本次会议的有优众执行总裁赵国星先生、副总裁何光曜先生、副总裁王棋先生及部长以上的中高层领导清明时节，细..."
        },
        {
          id: 3,
          newImgSrc: require("./../../../assets/images/temp/new1.jpg"),
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
  background: url("./../../../assets/images/date.png") no-repeat;
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

