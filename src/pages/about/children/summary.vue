<template>
<!-- 公司简介模块 -->
<div class="company-wrapper">
    <div class="info">
        <p>优众”二字取之于《四书五经》《孟子·告子下》篇章中，</p>
        <p>好善优于天下 众智方能广达，原文如下：</p>
        <p>鲁欲使乐正子为政。孟子曰：“吾闻之，喜而不寐。”</p>
        <p>公孙丑曰：“乐正于强乎？”曰：“否。”</p>
        <p>“有知虑乎？”曰：“否。”</p>
        <p>“多闻识乎？”曰：“否。”</p>
        <p>“然则奚为喜而不寐？”曰：“其为人也好善。”</p>
        <p>“好善足乎？”</p>
        <p>曰：“好善优于天下，而况鲁国平？夫苟好善，则四海之内皆将轻千里而来告之以善；夫苟不好善，则人将曰：也也，予既已知之矣。’也也之声</p>
        <p>音颜色距人于千里之外。士止于千里之外，则谗谄面谀之人至矣。与谗诌面谀之人居，国欲治，可得乎？”</p>
        <p>——《孟子·告子下》</p>
    </div>
    <div class="info">
        <h4>公司简介</h4>
        <div class="desc">
            河南优众健康科技有限公司（简称：优众公司）是一家集医疗器械研发、销售、售后、服务为一体的综合性公司，覆盖了健康产品连锁经营、全方位健康养生服务、地产开发等多个领域。优众公司旗下的光波康复理疗仪、电脑中频治疗仪、RO反渗透直饮机、空气净化器、远红外熏灸仪、制氧机、托玛琳等系列产品均采用国际技术倾力打造，并以此为基础精心打造“优众健康生活馆”的全方位立体健康管理模式，为全民的健康保驾护航。优众公司立足新起点，迎接新挑战，结合国家市场情况，开启新的经营模式，实施强化人才战略，独创一格，引领行业新风尚。未来，我们将一如既往，以“让生命更健康、让生活更精彩”为企业使命，践行“质臻、服优、志高、福众”的核心价值观，倡导和弘扬企业文化，推进企业国际化品牌效应，为社会创造更大的财富，为人类创造健康智慧的生活。
        </div>
        <div class="image-main clear">
            <img src="@images/i1.jpg" class="image-item" alt="公司简介" style="float:left;">
            <img src="@images/i2.jpg" class="image-item" alt="公司简介" style="float:right;">
        </div>
    </div>
    <div class="info clear">
        <div class="info-item" style="margin-right: 40px;">
            <span class="left"></span>
            <span class="text">
                我们是执着健康事业的优众人<br>
                乐观自信、求实创新
            </span>
            <span class="right"></span>
        </div>
        <div class="text2">优众誓词</div>
        <div class="info-item" style="float:right">
            <span class="left"></span>
            <span class="text">
                我们是创造智慧生活的优众人<br>
                奋发向上、笃信好学
            </span>
            <span class="right"></span>
        </div>
    </div>
    <div class="info clear" style="margin-bottom: 110px;">
        <div class="info-item" style="margin-left:288px;">
            <span class="left"></span>
            <span class="text">
                    我们是引领时代发展的优众人<br>
                    不畏艰辛、开拓进取<br>
                    与时俱进、共赢未来
            </span>
            <span class="right"></span>
        </div>
    </div>
    <div class="info">
        <img src="@images/i3.jpg" alt="公司简介" width="908">
    </div>
</div>
</template>

<script>
export default {
};
</script>

<style scoped>
/* 公司简介模块 */
.company-wrapper .info{
    margin: 35px 0 45px;
    line-height: 30px;
    font-size: 14px;
    color: #666;
}
.company-wrapper .info p{
    text-align: center;
}

.company-wrapper .info h4{
    margin-bottom: 30px;
    font-size: 36px;
    line-height: normal;
    text-align: center;
}

.company-wrapper .info .desc{
    margin-bottom: 44px;
    text-indent: 30px;
    text-align:justify; 
}

.company-wrapper .info .image-main{
    margin-bottom: 90px;
}

.company-wrapper .info .image-item{
   width: 437px;
   height: 241px; 
}

.company-wrapper .info .info-item{
    position: relative;
    float: left;
    text-align: center;
    padding: 10px 65px;
    padding-right: 45px;
}
.info .info-item .left{
    display: block;
    position: absolute;
    top: 7px;
    left: 0;
    width: 50px;
    height: 50px;
    background: url('../../../assets/images/left.png') no-repeat center;   
}

.info .info-item{
    font-size: 18px;
}

.info .info-item .right{
    display: block;
    position: absolute;
    right: 0px;
    bottom: -20px;
    width: 50px;
    height: 50px;
    background: url('../../../assets/images/right.png') no-repeat center;   
}
.info  .text2{
    font-size: 36px;
    float: left;
    margin-top: 60px;
}
</style>
