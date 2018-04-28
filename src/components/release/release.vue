<template>
    <Row>
        <i-col span="24">
            <div class="blog-content">
                <div class="n-title">前端路由</div>
                <span class="stick-block stick-block1">Vue</span>
                <span class="stick-block">vue-router</span>
                <div class="n-content">
                    <h5>后端路由</h5>
                    <p>优点:1、可以在服务端渲染后返回给浏览器，不用等待前端加载任何js或者css就可以直接显示网页内容。2、对SEO友好。缺点:1、模板是由后端来维护和改写，前端开发行者需要安装整套的后端服务，必要时还要学习后端语言PHP或Java等非前端语言来改写html结构。2、html、数据、逻辑混为一谈，维护起来既臃肿又麻烦</p>
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
