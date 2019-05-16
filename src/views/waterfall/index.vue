<template>
  <div>
    我是页面
    <button @click="add">add</button>
    <waterfall :width="200" :list="list"/>
  </div>
</template>
<script>
import Waterfall from '@/components/WaterFall/index'
export default {
  name: 'WaterFall',
  components: {
    Waterfall,
  },
  data() {
    return {
      list: []
    }
  },
  created() {

  },
  methods: {
    add() {
      this.list = []
      let count = Math.floor(Math.random() * 10)
      console.log(count)
      let array = []
      for (let i = 0; i < count; i++) {
        this.list.push({ name: 'hahahahahia', value: count * Math.random() })
      }
    }
  }

}
</script>