<template>
  <!-- 人才招聘模块 -->
  <div class="job-wrapper">
        <div class="job-info">
            <span>简历投递邮箱：iuzhong@qq.com</span>
            <span>联系方式：0371-55273135  13393704120</span>
            <span>联系人：许伟丽</span>
        </div>
        <ul class="job-list">
            <li :class="{odd:index%2==0}" v-for="(item,index) in recruitList">
                <router-link :to="'recruit/recruitDetail/'+item.id">
                    <span class="name">{{item.name}}</span>
                    <span class="time">{{item.time}}</span>
                </router-link>
            </li>
        </ul>
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
        },{
          id: "2",
          name: "总裁助理",
          time: "2017-05-20"
        },{
          id: "3",
          name: "总裁助理",
          time: "2017-05-20"
        }
      ]
    };
  }
};
</script>

<style scoped>

/* 人才招聘模块 */
.job-wrapper .job-info{
    margin-bottom: 15px;
    padding:30px 25px;
    font-size: 18px;
    color: #666;
}
.job-wrapper .job-info span{
    margin-right: 30px;
}

.job-wrapper .job-list {
    font-size: 14px;
}

.job-wrapper .job-list li{
    background: #fff; 
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
}

.job-wrapper .job-list .odd{
    background: #f5f5f5; 
}

.job-wrapper .job-list li a{
    display: block;
    color: #666;
}

.job-wrapper .job-list li .time{
    float: right;
}

.job-wrapper .job-list li:hover .name{
    color: #17d292;
}

.job-list li a:hover .time{
    color: #666;
}


</style>
