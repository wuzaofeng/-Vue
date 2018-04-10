<template>
  <div>
    <div class="join-ad">
        <img src="../../assets/images/4.jpg" alt="">
    </div>
    <div class="join-ad2">
        <img class="img" src="../../assets/images/5.jpg" alt="">
        <a href="#join" class="go"><img src="../../assets/images/icon11.png" alt=""></a>
    </div>
    <div class="flow">
      <div class="flow-tit">加盟<span>流程</span></div>
      <div class="flow-p">我们将一如既往，以“让生命更健康、让生活更精彩”为企业使命，践行“质臻、服优、志高、福众”的核心价值观，倡导和弘扬企业文化，推进企业国际化品牌效应，为社会创造更大的财富，为人类创造健康智慧的生活。</div>
      <div class="flow-dl block">
          <dl>
              <dt><span>1</span>公司实力考察</dt>
              <dd>可以到公司总部和优德科技园参观。</dd>
          </dl>
          <dl>
              <dt><span>2</span>选址</dt>
              <dd>公司会有专门人员指导，选合适的地点。</dd>
          </dl>
          <dl>
              <dt><span>3</span>开店</dt>
              <dd>公司对店面装修提供整套的店面装修资料。</dd>
          </dl>
          <dl>
              <dt><span>4</span>开业</dt>
              <dd>开业前三天会有专业人士进店指导。</dd>
          </dl>
          <dl>
              <dt><span>5</span>运营系统</dt>
              <dd>公司对店面运营拥有完整的并且系统的运营系统。</dd>
          </dl>
      </div>
    </div>
    <div class="serve">
      <div class="block">
      <div class="serve-tit">加盟<span>服务</span></div>
      <div class="serve-p">们不止要在一千座城建一万家店，不止是一个成熟的TOP合作计划、不止是一个优秀的商业模式分享、也不止是是一个行业大咖的强强联盟更是为了聚合超能运营系统。打造健康智慧生活。优众大幕即将拉开，睿智的你在哪里？</div>
        <ul class="clear" id="join">
            <li><img src="../../assets/images/icon13.png" alt=""><p>行情指导</p></li>
            <li><img src="../../assets/images/icon14.png" alt=""><p>开店培训</p></li>
            <li><img src="../../assets/images/icon15.png" alt=""><p>运营系统</p></li>
            <li><img src="../../assets/images/icon16.png" alt=""><p>活动指导</p></li>
            <li><img src="../../assets/images/icon17.png" alt=""><p>店面指导</p></li>
        </ul> 
      </div>
    </div>

    <div class="join block">
      <div class="join-tit">在线<span>加盟</span></div>
      <div class="join-p"><span>官方邮箱：iuzhong.qq.com</span><span>联系电话：4008-758-222</span><span>在线QQ：3381076209</span></div>
      <div class="join-img"><img src="../../assets/images/icon17.jpg" alt=""></div>
      <div class="join-form">
          <el-row>
            <el-col :span="11">
              <div class="grid-content">
                <div class="join-item">
                  <el-select v-model="typeValue" clearable placeholder="用户类型">
                    <el-option
                      v-for="item in typeOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div class="join-item">
                  <el-input v-model="nameInput" placeholder="姓名（必填）"></el-input>
                </div>
                <div class="join-item">
                  <el-input v-model="phoneInput" placeholder="电话（必填）"></el-input>
                </div>
                <div class="join-item">
                  <el-input v-model="qqInput" placeholder="QQ号"></el-input>
                </div>
                <div class="join-item">
                  <el-input v-model="weInput" placeholder="微信号"></el-input>
                </div>
              </div>
            </el-col>
            <el-col :span="11" :offset="2">
              <div class="join-item">
                <el-input v-model="companyInput" placeholder="公司名称"></el-input>
              </div>
              <div class="join-item">
                <el-cascader 
                  clearable
                  placeholder="请选择地址"
                  :options="addressOptions"
                  v-model="selectedAddressOptions"
                  @change="addressChange">
                </el-cascader>
              </div>
              <div class="join-item">
                <el-input
                type="textarea"
                :rows="7"
                placeholder="用一句话介绍下自己"
                v-model="descTextarea">
                </el-input>
              </div>
            </el-col>
          </el-row>          
        </div>
        <div class="submit"><el-button type="primary">提 交</el-button></div> 
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeOptions: [
        // 用户类型所选的值
        {
          value: "0",
          label: "企业"
        },
        {
          value: "1",
          label: "个人"
        }
      ],
      typeValue: "", //用户类型值

      nameInput: "", // 姓名
      phoneInput: "", // 电话
      qqInput: "", // QQ
      weInput: "", // 微信号
      companyInput: "", // 公司名称

      addressOptions: [
        //地址选择器
        {
          value: "guangdong",
          label: "广东省",
          children: [
            {
              value: "shenzhen",
              label: "深圳市",
              children: [
                {
                  value: "baoan",
                  label: "宝安区"
                },
                {
                  value: "luohu",
                  label: "罗湖区"
                }
              ]
            }
          ]
        },
        {
          value: "beijin",
          label: "北京市",
          children: [
            {
              value: "dongcheng",
              label: "东城区"
            },
            {
              value: "xicheng",
              label: "西城区"
            }
          ]
        }
      ],
      selectedAddressOptions: [], //地址选择器所选的值

      descTextarea: "" //介绍自己文本框
    };
  },
  methods: {
    addressChange(value) {
      console.log(value);
    }
  }
};
</script>

<style scoped>
/* 加盟优众 */
.join-ad {
  width: 100%;
  height: 559px;
  position: relative;
  overflow: hidden;
}
.join-ad img {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -960px;
}
.join-ad2 {
  width: 100%;
  height: 680px;
  position: relative;
  overflow: hidden;
}
.join-ad2 .img {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -960px;
}
.join-ad2 .go {
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  margin: -152px 0 0 -67px;
}
.flow {
  min-height: 598px;
  background: url(../../assets/images/6.jpg) no-repeat top center;
}
.flow-tit {
  font-size: 58px;
  color: #fff;
  text-align: center;
  padding: 30px 0 10px;
}
.flow-tit span {
  color: #17d292;
}
.flow-p {
  text-align: center;
  width: 800px;
  margin: 0 auto;
  text-align: center;
  color: #999;
  line-height: 28px;
}
.flow-dl {
  margin-top: 60px;
  color: #fff;
}
.flow-dl span {
  font-size: 36px;
  color: #999;
  display: inline-block;
  width: 69px;
  height: 75px;
  line-height: 75px;
  text-align: center;
  background: url(../../assets/images/icon12.png) no-repeat;
  position: absolute;
  left: 10px;
  top: 10px;
}
.flow-dl dl {
  position: relative;
  float: left;
  width: 180px;
  padding-left: 110px;
  min-height: 111px;
  margin-right: 110px;
  margin-top: 36px;
}
.flow-dl dt {
  font-size: 30px;
  padding: 10px 0 10px 0;
}
.flow-dl dd {
  color: #999;
}
.serve {
  min-height: 448px;
  background: #f5f5f5;
}
.serve-tit {
  color: #333;
  font-size: 58px;
  text-align: center;
  padding: 46px 0 25px 0;
}
.serve-tit span {
  color: #17d292;
}
.serve-p {
  text-align: center;
  color: #999;
  line-height: 28px;
}
.serve ul {
  padding: 49px 0 0;
  color: #999;
  font-size: 18px;
  width: 120%;
}
.serve ul li {
  float: left;
  width: 84px;
  text-align: center;
  margin-right: 189px;
}
.serve ul li img {
  margin-bottom: 38px;
}
.join-tit {
  font-size: 58px;
  color: #333;
  text-align: center;
  padding: 64px 0 10px 0;
}
.join-tit span {
  color: #17d292;
}
.join-p {
  text-align: center;
  font-size: 16px;
  color: #999;
}
.join-img {
  text-align: center;
  padding: 10px 0 45px;
}

.error {
  background: #cfcfcf;
  color: #fff;
  padding: 10px 20px;
  border-radius: 2px;
}
.finish {
  background: #62e0b5;
  color: #fff;
  padding: 10px 20px;
  border-radius: 2px;
}
.submit {
  text-align: center;
  padding: 30px 0 90px 0;
}
.submit button {
  width: 282px;
  height: 60px;
  border-radius: 2px;
  background: #17d292;
  border-color: #17d292;
  font-size: 25px;
  color: #fff;
  margin: 0 auto;
}
</style>
<style>
/* 输入框 */
.join-form .join-item {
  margin-bottom: 15px;
}
.join-form .join-item .el-select,
.join-form .join-item .el-cascader {
  display: block;
}
.join-form .join-item .el-input__inner:focus,
.join-form .join-item .el-textarea__inner:focus {
  border-color: #17d292;
}
.join-form .join-item .el-input .el-input__inner {
  height: 45px;
  border-radius: 2px;
}
.join-form .join-item .el-textarea__inner {
  border-radius: 2px;
  resize: none;
  height: 166px;
}
.join-form .join-item .el-cascader__label {
  line-height: 45px;
}
.el-cascader-menu__item.is-active,
.el-cascader-menu__item.is-active:hover,
.el-select-dropdown__item.selected.hover,
.el-select-dropdown__item.selected {
  background-color: #17d292;
}
</style>

