<template>
  <!-- 人才招聘模块 -->
  <div class="job-wrapper">
    <div class="job-detail">
        <div class="job-tit">总裁助理</div>
        <div class="job-content">
            <div class="job-item">
                <div class="job-name">岗位职责：</div>
                <div class="job-item-info">
                    1、起草公司工作计划总结，并作好公司重要会议记录；<br>
                    2、起草、存档整理总经理签发文件；<br>
                    3、公司管理制度、规章制度，网页设计方案书、合同书，公司总体运行配合;<br>
                    4、接听电话、妥当应答，并做好电话记录；<br>
                    5、掌握总经理的日程安排做好预约工作，安排商务旅行；
                </div>
            </div>
            <div class="job-item">
                <div class="job-name">任职要求：</div>
                <div class="job-item-info">
                    1、起草公司工作计划总结，并作好公司重要会议记录；<br>
                    2、起草、存档整理总经理签发文件；<br>
                    3、公司管理制度、规章制度，网页设计方案书、合同书，公司总体运行配合;<br>
                    4、接听电话、妥当应答，并做好电话记录；<br>
                    5、掌握总经理的日程安排做好预约工作，安排商务旅行；
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      recruitList: [
        {
          id: "1",
          name: "总裁助理",
          time: "2017-05-20"
        }
      ]
    };
  }
};
</script>

<style scoped>

/* 人才招聘详情模块 */
.job-detail .job-tit{
    padding: 20px 0;
    font-size: 18px;
    color: #666;
}

.job-detail .job-content .job-item{
    margin-bottom: 15px;
}

.job-detail .job-item .job-name{
    font-size: 16px;
    color: #666;
    margin-bottom: 13px;
}


.job-item-info{
    line-height: 28px;
    font-size: 14px;
    color: #666;
    margin-left: 15px;
}


</style>
