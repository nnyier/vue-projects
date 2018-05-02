<template>
    <div class="n-header">
        <ul class="title-wrapper">
            <li v-for="item in titles" :key="item.id" class="n-title">
                <a href="#">{{item}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      titles: [
        "全部",
        "行业",
        "程序员",
        "工具",
        "前端",
        "后端",
        "人工智能",
        "区块链",
        "javascript",
        "css3",
        "html5",
        "vue",
        "angular",
        "react",
        "热门标签"
      ]
    };
  }
};
</script>

<style scoped>
.n-header {
  display: inline-block;
  text-align: center;
  border-top: 1px solid rgb(112, 111, 111);
}
.title-wrapper {
  width: 1080px;
  height: 2.1rem;
  display: flex;
}
.n-title {
  flex: 1;
  font-size: 0.7rem;
  line-height: 2.1rem;
}
.n-title a {
  color: rgb(214, 207, 207);
  text-decoration: unset;
}
.n-title a:hover {
  background: #ddd;
  padding: 5px 10px;
  color: #363636;
  border-radius: 5px;
}
</style>
