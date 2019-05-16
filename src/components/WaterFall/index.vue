<template>
  <div ref="waterFallBox">
    <div
      ref="waterFallBoxItem"
      v-for="column in columns"
      class="waterFall-item"
      :style="{width:itemWidth+'px',marginLeft: column == 1?'0':'20px'}"
    >
      <div class="column-item" v-for="item in itemList[column-1]">{{item.name+'：'+item.value}}</div>
    </div>
  </div>
</template>
<script>
import { setTimeout, clearTimeout } from 'timers';
export default {
  name: 'WaterFallComponent',
  props: {
    width: {
      type: Number,
      required: 300
    },
    list: {
      type: Array,
      required: []
    }
  },

  data() {
    return {
      itemWidth: this.width,
      columns: 3,
      columnLengthMin: 0,
      itemList: [],
      data: this.list
    }
  },
  created() {

  },
  watch: {
    list: {
      handler(newName, oldName) {
        this.data = this.list
        this.computeColumnLength()
      },
      immediate: true,
      deep: true
    },
  },
  mounted() {
    this.computeColumn(this.itemWidth)
  },
  methods: {
    //计算列数
    computeColumn(val) {
      let containerWidth = this.$refs.waterFallBox.clientWidth
      this.columns = Math.floor((containerWidth - 20) / (val + 20))
      if (this.columns <= 0) {
        this.columns = 1
        this.itemWidth = containerWidth
      }

      this.$nextTick(() => {
        for (let i = 0; i < this.columns; i++) {
          this.itemList[i] = []
        }
        this.computeColumnLength()
      })
    },
    //计算哪列最短
    computeColumnLength() {
      let itemArray = this.$refs.waterFallBoxItem
      for (let key in this.data) {
        let timer = setTimeout(() => {
          let lengthMin = 0
          for (let i in itemArray) {
            if (itemArray[i].clientHeight < itemArray[lengthMin].clientHeight) {
              lengthMin = i
            }
          }
          this.renderData(lengthMin, this.data[key])
          clearTimeout(timer)
        }, 10)
      }
    },
    //拼接新数据
    renderData(lengthMin, key) {
      this.itemList.push([])
      this.itemList.pop()
      this.itemList[lengthMin].push(key)
    }
  }

}
</script>
<style scoped>
.waterFall-item {
  display: inline-block;
  /* height: 1000px; */
  /* background: #eea9b8; */
  vertical-align: top;
}
.column-item {
  margin-bottom: 20px;
  /* background:#F5DEB3; */
}
</style>
