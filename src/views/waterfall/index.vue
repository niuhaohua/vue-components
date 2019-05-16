<template>
  <div>
    我是页面
    <button @click="add">add</button>
    <water-fall-component :width="200" :list="list"/>
  </div>
</template>
<script>
import { setInterval } from 'timers';
const url = [
  'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=77d1cd475d43fbf2da2ca023807fca1e/9825bc315c6034a8ef5250cec5134954082376c9.jpg',
  'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=0734f78af2039245beb5e70fb795a4a8/b8014a90f603738d6d8d0d65bd1bb051f919ecb6.jpg',
  'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=a9e671b9a551f3dedcb2bf64a4eff0ec/4610b912c8fcc3cef70d70409845d688d53f20f7.jpg',
  'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=0c78105b888ba61ec0eece2f713597cc/0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg',
  'https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=77d1cd475d43fbf2da2ca023807fca1e/9825bc315c6034a8ef5250cec5134954082376c9.jpg',
  'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=ccf9a52fdf09b3def4bfe268fcbe6cd3/5366d0160924ab180d9ce3703bfae6cd7a890bea.jpg',
  'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=35ada082516034a836e2be81fb1249d9/7c1ed21b0ef41bd501e6c1775cda81cb38db3dff.jpg',
  'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=c422d4ad98cad1c8cfbbfa274f3f67c4/83025aafa40f4bfb0f815ad60e4f78f0f63618db.jpg',
  'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=c785a528a5014c08063b2ea53a7a025b/359b033b5bb5c9ea3b6f2b62d939b6003bf3b396.jpg',
  'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=d9eabf3022dda3cc14e4be2031e83905/b03533fa828ba61e3a0fee804d34970a314e59bf.jpg',
  'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=2986616a801001e9513c120f880f7b06/a71ea8d3fd1f41341d402dfd281f95cad1c85e39.jpg',
  'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=4d78b781a4d3fd1f2909a43a004c25ce/d833c895d143ad4b1ee0626f8e025aafa50f0656.jpg',
  'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=a769c8a69b0a304e4d22a6fae1c9a7c3/ac4bd11373f0820200d92d9d47fbfbedaa641bcc.jpg',
  'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=57254307dd43ad4bb92e40c0b2035a89/03087bf40ad162d97cc5dcbe1ddfa9ec8a13cd6d.jpg',
  'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=c5c44185733e6709a10043ff0bc69fb8/faedab64034f78f09574275175310a55b3191c10.jpg',
  'https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=7f1d0d690724ab18ff16e73705fbe69a/86d6277f9e2f07080543c24fe724b899a901f23f.jpg']
export default {
  name: 'WaterFall',
  data() {
    return {
      list: []
    }
  },
  created() {
  },
  mounted(){
    this.add()
  },
  methods: {
    add() {
       this.list = [{ url: url[1] },{ url: url[2] },{ url: url[3] },{ url: url[4] }]
      let i = 0
      setInterval(() => {
        this.list = []
        this.list = [{ url: url[1] },{ url: url[2] },{ url: url[3] },{ url: url[4] }]
        i++
      }, 3000)
    }
  }

}
</script>