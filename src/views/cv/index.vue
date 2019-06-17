<template>
  <div class="cv-container">
    <div class="cv-main">
        <div class="cv-left">
            <div class="cv-avatar">
                <img src="https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=77d1cd475d43fbf2da2ca023807fca1e/9825bc315c6034a8ef5250cec5134954082376c9.jpg" alt="">
            </div>
            <div class="basic-information">
                <div class="item" v-for="(value, key, index) in basicInformation" :key="index">
                    <span class="label">
                        {{key | basicInformation}}
                    </span>
                    <span class="value">
                        ：{{value}}
                    </span>
                </div>
            </div>
            <div>
                
            </div>
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
      basicInformation:cvMock.basicInformation,
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
.cv-main{
    width: 1000px;
    height: 1000px;
    background: salmon;
    margin: 0 auto;
    display: flex;
    display: -webkit-flex; /* Safari */
}
.cv-left{
    flex: 1;
    height: 1000px;
    background: #EAEAEA;
}
.cv-right{
    flex: 2;
    height: 1000px;
    background: #FFB5C5;
}
.cv-avatar{
    padding: 28px 117px
}
.cv-avatar img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #ddddaa;
}
.basic-information{
    padding-left: 70px;
    font-size: 14px;
    color: #606266;
}
.basic-information .item{
    height: 25px;
    line-height: 25px;
}
.basic-information .label{
    display: inline-block;
    width: 60px;
    text-align-last:justify;
	text-align:justify;
	text-justify:distribute-all-lines;
}
</style>
