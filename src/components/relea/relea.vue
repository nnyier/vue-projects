<template>
  <Row>
    <i-col span="24">
      <div class="blog-content">
        <div class="n-title">
          <a href="http://www.cnblogs.com/shengnan-2017/p/8094134.html">如何在vue中使用Bootstrap</a>
        </div>
        <span class="stick-block stick-block1">Bootstrap</span>
        <span class="stick-block">vue</span>
        <div class="n-content">
          <h5>安装 jquery</h5>
          <p class="code">
            <span class="dollar">$</span>
            <span class="npm">npm</span> install jquery --save-dev</p>
          <h5>在webpack.config.js 添加内容</h5>
          <p class="code">
            <span class="add">+</span> plugins: [ new webpack.ProvidePlugin({ jQuery: 'jquery', $: 'jquery' }) ]
          </p>
        </div>
        <icon></icon>
      </div>
    </i-col>
  </Row>
</template>

<script>
import Icon from "../icon/icon";
export default {
  components: {
    Icon
  }
};
</script>

<style scoped>
.blog-content {
  margin: 15px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
}
div.blog-content:hover {
  box-shadow: 0 0 5px #b8b5b5;
}
.n-title {
  color: #333333;
  font-size: 0.9rem;
  font-weight: bold;
  line-height: 1.8rem;
  margin: 8px 10px;
}
.n-title a:hover {
  color: saddlebrown;
  text-decoration: unset;
}
.stick-block1 {
  margin-left: 10px;
}
.stick-block {
  height: 1.5rem;
  line-height: 1.5rem;
  width: fit-content;
  padding: 5px 10px;
  background: #777777;
  color: #ffffff;
  text-align: center;
  border-radius: 5px;
}
.n-content {
  height: 80px;
  padding: 0 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 0.8rem;
  line-height: 1.6rem;
  color: rgb(71, 70, 70);
}
.n-content h5 {
  margin: 5px 0;
}
.n-content p {
  display: block;
  font-size: 0.8rem;
}
.n-content .code {
  background: #eee;
  width: fit-content;
  padding: 8px 10px 8px 0;
  margin-left: 20px;
  text-align: left;
  border-radius: 5px;
}
.dollar {
  color: rgb(148, 87, 7);
  margin-right: 5px;
}
.add {
  color: rgb(7, 156, 77);
  margin-right: 5px;
}
.npm {
  color: rgb(177, 141, 23);
}
</style>
