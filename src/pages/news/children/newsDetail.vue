<template>
  <div>
    <div class="new-detail-wrapper">
        <h3 class="new-detail-tit">{{title}}</h3>
        <div class="new-desc"> 
          <span class="new-date">{{createDate}}</span><span>来源：{{form}}</span></div>
          <div class="bdsharebuttonbox bdshare-button-style0-16" data-bd-bind="1508984286639">
            <span class="share"> 分享到：</span>
            <a class="bds_more" data-cmd="more"></a>
            <a class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
            <a class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
            <a class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>
            <a class="bds_renren" data-cmd="renren" title="分享到人人网"></a>
            <a class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
          </div>
        <div class="new-detail-main">
            <img :src="detail" :alt="title">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "优众之师齐汇郑州创未来",
      createDate: "2017-05-06",
      form:"优众网",
      detail:require("../../../assets/images/temp/new2.jpg")
    };
  },
  mounted(){
    this.init();
  },
  methods: {
    init: function () {
      let url = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~ ( - new Date() / 36e5)
      let script = document.createElement('script')
      script.setAttribute('src', url)
      document.getElementsByTagName('head')[0].appendChild(script)

    }
  }
}
</script>
<style scoped>
/* 新闻资讯详情模块 */
.new-detail-wrapper .new-detail-tit{
    margin-bottom: 8px;
    font-size: 34px;
    color: #333;
}

.new-detail-wrapper .new-desc{
    margin-bottom:8px;
    color: #999;
    font-size: 14px;
}

.new-detail-wrapper .new-desc .new-date{
    margin-right: 20px;
    background: url('../../../assets/images/date.png') no-repeat;
    background-position: 0px 2px;
    padding-left: 23px;
}

.new-detail-wrapper .share{
    float: left;
    margin: 6px 6px 6px 0;
    line-height: 16px;
    height: 16px;
    font-size: 14px;
    color: #666;
}

.new-detail-wrapper .new-detail-main{
    margin-top: 10px;
}

.new-detail-wrapper .new-detail-main img{
    max-width: 915px;
}

</style>
