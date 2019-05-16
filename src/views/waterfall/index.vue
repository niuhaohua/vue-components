<template>
  <div>
    我是页面
    <button @click="add">add</button>
    <water-fall-component :width="200" :list="list"/>
  </div>
</template>
<script>
export default {
  name: 'WaterFall',
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