import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const home = r => require.ensure([], () => r(require("@pages/home/index")), "home");
const join = r => require.ensure([], () => r(require("@pages/join/index")), "join");
const product = r => require.ensure([], () => r(require("@pages/product/index")), "product");
const productDetail = r =>  require.ensure([],() => r(require("@pages/product/children/productDetail")), "productDetail");
const news = r => require.ensure([], () => r(require("@pages/news/index")), "news");
const newsDetail = r =>require.ensure([],() => r(require("@pages/news/children/newsDetail")), "newsDetail" );
const newsList = r =>require.ensure([],() => r(require("@pages/news/children/newsList")), "newsList" );
const about = r =>require.ensure([], () => r(require("@pages/about/index")), "about");
const summary = r =>require.ensure([],() => r(require("@pages/about/children/summary")), "summary");
const recruit = r =>require.ensure([],() => r(require("@pages/about/children/recruit")), "recruit");
const recruitDetail = r =>require.ensure([],() => r(require("@pages/about/children/recruitDetail")), "recruitDetail");
const connect = r =>require.ensure([],() => r(require("@pages/about/children/connect")), "connect");

export default new Router({
  mode: "history",
  linkActiveClass: "on",
  routes: [
    // 地址为空的时候自动跳转到首页
    {
      path: "",
      redirect: "/home"
    },
    // 优众首页
    {
      path: "/home",
      component: home
    },
    // 加盟优众
    {
      path: "/join",
      component: join
    },
    // 产品展示
    {
      path: "/product",
      component: product
    },
    // 产品展示详情
    {
      path: "/product/productDetail/:id",
      component: productDetail
    },
    // 新闻资讯
    {
      path: "/news",
      component: news,
      children: [
        // 新闻资讯列表
        {
          path:"",
          component:newsList
        },
        // 新闻资讯详情
        {
          path: "newsDetail/:id",
          component: newsDetail
        }
      ]
    },
    // 关于我们
    {
      path: "/about",
      component: about,
      children: [
        // 公司简介
        {
          path: "",
          component: summary
        },
        // 人才招聘
        {
          path:"recruit",
          component: recruit
        },
         // 人才招聘详情
        {
          path:"recruit/recruitDetail/:id",
          component: recruitDetail
        },
        // 联系我们
        {
          path:"connect",
          component: connect
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition){
    return { x: 0, y: 0 }
  }
});
