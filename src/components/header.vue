<template>
  <div class="header">
        <div class="head-hd">
            <div class="block">
                {{loginText}} 在线客服：{{phone}}
            </div>
        </div>
        <div class="head-nav">
            <div class="block">
                <ul class="clear">
                    <router-link to="/home" exact tag="li"><a>优众首页</a></router-link>
                    <li><a href="http://www.q-he.com/">优众商城</a></li>
                    <router-link to="/join" exact tag="li"><a>加盟优众</a></router-link>
                    <li class="logo"><a href="#"><img src="../assets/images/logo.png" alt=""></a></li>
                    <router-link to="/product" tag="li"><a>产品展示</a></router-link>
                    <router-link to="/news" tag="li"><a>新闻资讯</a></router-link>
                    <router-link to="/about" tag="li"><a>关于我们</a></router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      loginText: "您好！欢迎您光临优众", // 登录提示
      phone: "4008-758-222" // 在线客服电话
    };
  }
};
</script>

<style scoped>
/* 头部 */
.header {
  height: 194px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: #fff;
  box-shadow: 0px 0px 15px rgb(153, 153, 153);
}
.head-hd {
  background: #17d292;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-size: 16px;
}
.head-nav ul {
  margin-top: 23px;
  width: 110%;
}
.head-nav ul li {
  float: left;
  font-size: 24px;
  padding-right: 80px;
  padding-top: 32px;
}
.head-nav ul li a{
    color:#999;
    padding-bottom:7px;
}
.head-nav ul li.on a,.head-nav ul li a:hover{
    color:#17d292;
    border-bottom:3px solid #999999;
}
.head-nav ul li.logo {
  padding-top: 0;
}
.head-nav ul li.logo a:hover {
  border-bottom: none;
}
</style>
