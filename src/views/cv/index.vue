<template>
  <div class="cv-container">
    <div class="cv-main">

<div class="tiao-lf">

</div>
<div class="tiao-rg">

</div>

      <div class="cv-left">
        <div class="cv-avatar">
          <img
            src="https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=77d1cd475d43fbf2da2ca023807fca1e/9825bc315c6034a8ef5250cec5134954082376c9.jpg"
            alt
          >
        </div>
        <div class="basic-information">
          <h3 class="title">基本信息</h3>
          <div class="item" v-for="(value, key, index) in basicInformation" :key="index">
            <span class="label">{{key | basicInformation}}</span>
            <span class="value">：{{value}}</span>
          </div>
        </div>

        <div class="skill-information">
          <h3 class="title">掌握技能</h3>
          <div class="item" v-for="item in skill">
            <span class="label">{{item.name}}</span>
            <span class="value">
               <el-progress :percentage="item.value" :color="item.color"></el-progress>
            </span>
          </div>
        </div>
        <div></div>
      </div>
      <div class="cv-right">
        
      </div>
    </div>
  </div>
</template>

<script>

import cvMock from '../../mock/cv'
export default {
  name: 'Cv',
  data() {
    return {
      basicInformation: cvMock.basicInformation,
      skill: cvMock.skill
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
      }
  }
}
</script>

<style lang="scss">
.cv-main {
  position: relative;
  width: 1000px;
  height: 1000px;
  background: salmon;
  margin: 0 auto;
  display: flex;
  display: -webkit-flex; /* Safari */
}
.tiao-lf{
  position: absolute;
  height: 90px;
  width: 650px;
  background: url('../../assets/cv/bg1.png') no-repeat;
  background-size:100%;
  top:150px;

}
.tiao-rg{
  position: absolute;
  height: 90px;
  width: 350px;
  background: url('../../assets/cv/bg2.png') no-repeat;
  background-size:100%;
  top:150px;
  right: 0px;
}
.cv-left {
  flex: 1;
  height: 1000px;
  background: #eaeaea;
}
.cv-right {
  flex: 2;
  height: 1000px;
  background: #ffb5c5;
}
.cv-avatar {
  padding: 28px 117px;
}
.cv-avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #ddddaa;
}
.title{
  position: relative;
  left: -30px;
}
.basic-information,
.skill-information {
  padding-left: 70px;
  font-size: 14px;
  color: #606266;
  margin-top: 110px;
}
.basic-information .item {
  height: 25px;
  line-height: 25px;
}
.basic-information .label {
  display: inline-block;
  width: 60px;
  text-align-last: justify;
  text-align: justify;
  text-justify: distribute-all-lines;
}
.skill-information{
  margin-top: 40px;
}
.skill-information .item {
  padding-bottom: 20px;
}
.skill-information .label{
  display: inline-block;
  width: 40px;
  text-align-last: justify;
  text-align: justify;
  text-justify: distribute-all-lines;
}
.skill-information .value{
  display: inline-block;
  width: 200px;
  text-align-last: justify;
  text-align: justify;
  text-justify: distribute-all-lines;
}
</style>
