<template>
  <div class="n-rank">
    <Row class="container-content">
      <i-col span="24" class="n-stick">
        <div class="stick">热门专栏</div>
        <ol class="rank-wrapper">
          <li class="author" v-for="(item, index) in items" :key="item.id">
            <span class="n-index">{{index +1}}.</span><a href="#">{{item}}</a>
          </li>
        </ol>
        <p>
        </p>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        "自定义eslint规则",
        "vue-router配置详解",
        "学会使用vuex",
        "vue组件",
        "vue相关的第三方库",
        "angular与vue的比较",
        "你不知道的react",
        'node.js进阶',
        '前端入门',
        'css解密',
        'html5的新功能',
        '什么是websocket'
      ]
    };
  }
};
</script>

<style scoped>
.n-rank {
  width: 100%;
  background: #fff;
  border: 1px solid#ddd;
  text-align: left;
  border-radius: 5px;
}
.stick {
  height: 2rem;
  background: #f5f5f5;
  line-height: 2rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #333333;
  text-indent: 1rem;
}
.rank-wrapper {
  margin: 10px;
}
.rank-wrapper > li {
  height: 1.8rem;
  font-size: 0.8rem;
  line-height: 1.8rem;
  border-bottom: 1px solid #ddd;
}
.author .n-index {
  display: inline-block;
  min-width: 20px;
  color: rgb(119, 117, 117);
  text-align: right;
}
.author a {
  display: inline-block;
  margin:  0 30px 0 10px;
  color: #109967;
}
.n-right {
  float: right;
  color: rgb(119, 117, 117);
}
</style>
