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
                                <span class="name">关于我们</span>
                                <span class="english-name">about us</span>
                            </div>
                            <div class="path">
                              当前位置： 
                              <a href="/home">首页</a> &gt;
                              <a href="/about">关于我们</a> &gt;
                              <a class="on" >{{urlName}}</a>
                            </div>
                        </div>
                          <router-view></router-view>
                    </div>
                </div>
                <div class="main-side">
                    <div class="main-menu-title">
                        <div class="english-name">about us</div>
                        <div class="name">关于我们</div>
                    </div>
                    <ul class="list">
                        <router-link class="list-item" exact tag="li" to="/about"><a>公司简介</a></router-link>
                        <router-link class="list-item" tag="li" to="/about/recruit"><a>人才招聘</a></router-link>
                        <router-link class="list-item" exact tag="li" to="/about/connect"><a>联系我们</a></router-link>
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
          href: "/about",
          name: "公司介绍",
          active: true,
          isExact: true
        },
        {
          href: "/about/recruit",
          name: "人才招聘",
          active: false,
          isExact: false
        },
        {
          href: "/about/connect",
          name: "联系我们",
          active: false
        }
      ],
      urlName: "公司简介"
    };
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建

    //关于我们进入时
    next(vm => {
      // 通过 `vm` 访问组件实例
      vm.urlName = "公司简介"
    });
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    this.checkUrl(to.path);
    next();
  },
  methods: {
    // 判断公司简介，人才招聘，联系我们
    checkUrl(str) {
      if(str.indexOf('/about/recruit')==0){
        // 人才招聘
        this.urlName = "人才招聘"
      }else if(str.indexOf('/about/connect')==0){
         // 联系我们
        this.urlName = "联系我们"
      }else{
         // 公司简介
        this.urlName = "公司简介"
      }
    }
  }
};
</script>

