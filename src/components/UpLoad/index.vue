<template>
  <div>
    <div class="file"></div>
    <div>
      <span v-for="(item,index) in FilesList" :key="index">
        <img v-if="item.url" :src="item.url" />
        <div v-if="!item.url">{{item.name}}</div>
      </span>
    </div>

    <input ref="file" multiple="multiple" type="file" @change="fileChange" class="file-input" />
    <button @click="getFile" class="get-file">选取文件</button>
  </div>
</template>
<script>
export default {
  name: 'UpLoadComponent',
  props: {

  },

  data() {
    return {
      imgUrlList: [],
      imgList: [],
      FilesList: []
    }
  },
  created() {

  },
  watch: {
    // list: {
    //   handler(newName, oldName) {
    //     this.data = this.list
    //     // this.computeColumnLength()
    //   },
    //   immediate: true,
    //   deep: true
    // },
  },
  mounted() {
    // this.computeColumn(this.itemWidth)
  },
  methods: {
    getFile() {
      this.$refs.file.click()
    },
    fileChange() {

      let file = this.$refs.file.files //file是一个类数组对象
      let V = this
      Array.from(file).forEach((key) => {
        if (/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(key.name)) {
          console.log(key)
          var reader = new FileReader();
          reader.readAsDataURL(key);
          //监听文件读取结束后事件
          reader.onloadend = function (e) {
            key.url = e.target.result
            V.FilesList.push(key)
          }
        } else {
          V.FilesList.push(key)
        }

      })
    }
  }

}
</script>
<style scoped>
.file {
  width: 300px;
  height: 200px;
  border: 1px dotted #999;
  border-radius: 5px;
  overflow: hidden;
}
.file img {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.get-file {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.file-input {
  display: none;
}
</style>
