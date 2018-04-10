<template>
  <div class="footer">
    <div class="block">
        <div class="ft-contact">
            <ul>
                <li><i><img src="./../assets/images/icon1.png" alt=""></i>4008-758-222</li>
                <li><i><img src="./../assets/images/icon2.png" alt=""></i>iuzhong.qq.com</li>
                <li><i><img src="./../assets/images/icon3.png" alt=""></i>郑州市东风路与金汇西街交叉口向南150米优德医药网大厦</li>
            </ul>
            <img class="img1" src="./../assets/images/icon4.png" alt="">
            <img class="img2" src="./../assets/images/icon5.png" alt="">
            <img class="img3" src="./../assets/images/logo.png" alt="">
        </div>
        <div class="ft-copy">
            <p>河南优众健康科技有限公司</p>
            <p>版权所有copyright2017-2018</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* 尾部 */
.footer {
  background: #202832;
  color: #848484;
}
.ft-contact {
  padding: 15px 0;
  position: relative;
}
.ft-contact .img1 {
  position: absolute;
  left: 300px;
  top: 46px;
}
.ft-contact .img2 {
  position: absolute;
  left: 500px;
  top: 46px;
}
.ft-contact .img3 {
  position: absolute;
  right: 20px;
  top: 62px;
  width: 180px;
}
.ft-contact li {
  padding: 30px 15px;
  font-size: 24px;
}
.ft-contact i {
  padding-right: 10px;
}
.ft-contact i img {
  width: 30px;
  height: 30px;
}
.ft-copy {
  border-top: 1px solid #3a414a;
  text-align: center;
  padding: 20px 0;
  font-size: 18px;
}
</style>
