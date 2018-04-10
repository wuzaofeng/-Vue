<template>
  <div class="connect-wrapper">
    <div class="connect-way clear">
    <div class="connect-item">
    <div class="icon-wrapper">
    <img src="@images/c1.png" alt="联系我们">
    </div>
    <div class="connect-tit">公 司 地 址</div>
    <div class="connect-main">
    <p class="text">河南 郑州 东风东路金汇街 优德医药网
    </p>
    </div>
    </div>
    <div class="connect-item">
    <div class="icon-wrapper">
    <img src="@images/c2.png" alt="联系我们">
    </div>
    <div class="connect-tit">联 系 方 式</div>
    <div class="connect-main">
    <p class="text">4008-758-222</p>
    <p class="init">（周一至周六）8:40~17:30</p>
    </div>
    </div>
    <div class="connect-item">
    <div class="icon-wrapper">
    <img src="@images/c3.png" alt="联系我们">
    </div>
    <div class="connect-tit">关 注 微 信</div>
    <div class="connect-main">
    <img src="@images/icon4.png" width="126" height="126" alt="">
    </div>
    </div>
    </div>
    <div class="connect-map">
    <div style="width: 100%;height: 500px;" id="allmap"></div>
    </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 联系我们模块 */
.connect-way {
  padding-top: 50px;
  width: 954px;
  margin-bottom: 30px;
}
.connect-way .connect-item {
  position: relative;
  float: left;
  width: 276px;
  border: 1px solid #bfbfbf;
  margin-right: 40px;
  height: 265px;
}

.connect-item .icon-wrapper {
  position: absolute;
  padding: 0 15px;
  top: -40px;
  left: 85px;
  background: #fff;
}

.connect-item .connect-tit {
  padding-top: 70px;
  font-size: 18px;
  text-align: center;
  margin-bottom: 13px;
  color: #666;
}
.connect-item .connect-main {
  text-align: center;
  color: #666;
}
.connect-item .connect-main .text {
  padding: 0 15px;
  font-size: 20px;
  line-height: 30px;
}

.connect-item .connect-main .init {
  font-size: 12px;
}
</style>
