<template>
  <div class="n-header">
    <ul class="title-wrapper">
      <li class="n-fliter">筛选:</li>
      <li v-for="(item,index) in titles" :key="item.id" class="n-title" @click="select(index)" :class="{'active': item.show?'active': ''}">
        <a href="#">
          <span v-show="item.show"></span>{{item.sort}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: [
        { sort: "全部", show: true },
        { sort: "前端开发", show: false },
        { sort: "后端开发", show: false },
        { sort: "移动端开发", show: false },
        { sort: "云计算/大数据", show: false },
        { sort: "测试/运维", show: false },
        { sort: "其他", show: false }
      ]
    };
  },
  methods: {
    select(index) {
      for (let i = 0; i < this.titles.length; i++) {
        this.titles[i].show = false;
      }
      this.titles[index].show = true;
    }
  }
};
</script>

<style scoped>
.n-header {
  display: inline-block;
  text-align: left;
  margin: 15px 0;
}
.title-wrapper {
  width: 1080px;
  height: 2.1rem;
}
.title-wrapper li {
  display: inline-block;
  font-size: 0.7rem;
  line-height: 1.5rem;
  height: 1.5rem;
}
.title-wrapper li.active {
  background: rgb(6, 124, 89);
}
.title-wrapper li.active a {
  color: #fff;
}
.n-fliter {
  color: rgb(139, 138, 138);
}
.n-title {
  background: rgb(230, 227, 227);
  margin: 0 5px;
  padding: 0 10px;
  border-radius: 5px;
}
.n-title a {
  color: rgb(6, 124, 89);
  text-decoration: unset;
}
.n-title a:hover {
  color: #363636;
}
</style>
