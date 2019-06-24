<template>
  <div id="map"></div>
</template>
<script>
import { posix } from 'path';

export default {
  name: 'WaterFall',
  data() {
    return {
      list: [],
      position:{
        lat:null,
        lng:null
      }
    }
  },
  created() {
    
  },
  mounted() {
    // this.init()
    this.positionFn()
  },
  methods: {
    init(position) {
      //定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
      var map = new qq.maps.Map(document.getElementById("map"), {
        center: position?new qq.maps.LatLng(position.lat, position.lng):new qq.maps.LatLng(31.22,121.48),      // 地图的中心地理坐标。
        zoom: 12
      })
    },
    positionFn(){
        var geolocation = new qq.maps.Geolocation("QWCBZ-CPYCU-KGSVE-BJT6N-JHCAH-C4BPU", "vue-demo");
        geolocation.getLocation((a)=>{
            console.log(a)
            this.position.lat = a.lat+0.05
            this.position.lng = a.lng+0.05
            this.init(this.position)
        },(e)=>{
            console.log('失败'+e)
            this.init()
        })
    }
  }

}
</script>
<style scoped>
html,
body {
  height: 100%;
  width: 100%;
}
#map {
  min-height: calc(100vh - 50px);
  width: 100%;
}
</style>
