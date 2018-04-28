<template>
    <Row>
        <i-col span="24">
            <div class="blog-content">
                <a href="http://www.cnblogs.com/shengnan-2017/p/8744120.html" target="_blank">
                    <div class="n-title">如何使用vue-awesome</div>
                </a>
                <a href="http://www.cnblogs.com/shengnan-2017/p/8310971.html" target="_blank">
                    <div class="n-title">vue检测小工具vue-devtool</div>
                </a>
                <a href="http://www.runoob.com/html/html5-canvas.html" target="_blank">
                    <div class="n-title">HTML5 Canvas</div>
                </a>
                <a href="http://www.runoob.com/html/html5-webstorage.html" target="_blank">
                    <div class="n-title">HTML5 Web 存储</div>
                </a>
                <a href="http://www.runoob.com/html/html5-websocket.html" target="_blank">
                    <div class="n-title">HTML5 WebSocket</div>
                </a>
                <a href="http://www.cnblogs.com/shengnan-2017/p/7676842.html" target="_blank">
                    <div class="n-title">HTML+CSS 兼容性问题</div>
                </a>
                <a href="http://www.cnblogs.com/shengnan-2017/p/7670640.html" target="_blank">
                    <div class="n-title">JS难点--面向对象(封装)</div>
                </a>
                <a href="http://www.cnblogs.com/shengnan-2017/p/7671040.html" target="_blank">
                    <div class="n-title">JS难点--面向对象(继承)</div>
                </a>
                <a href="http://www.cnblogs.com/shengnan-2017/p/7670362.html" target="_blank">
                    <div class="n-title">用CSS给照片添加滤镜效果</div>
                </a>
                <a href="http://www.cnblogs.com/shengnan-2017/p/7671167.html" target="_blank">
                    <div class="n-title">JS难点--组件开发</div>
                </a>
                <a href="http://www.cnblogs.com/shengnan-2017/p/GitHub-recommend.html" target="_blank">
                    <div class="n-title">如何把项目托管到GitHub上</div>
                </a>
                <a href="http://www.cnblogs.com/shengnan-2017/p/7676715.html">
                    <div class="n-title">JS组件--倒计时</div>
                </a>
                <a href="http://www.cnblogs.com/shengnan-2017/p/carousel-recommend.html">
                    <div class="n-title">JS组件--轮播图</div>
                </a>
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
    padding: 5px 10px;
}
div.blog-content:hover {
  color: #76a1c9;
}
.blog-content a {
  display: block;
  border-bottom: 1px solid #c6dcf0;
  margin: 5px 10px;
  text-decoration: unset;
  font-size: 0.8rem;
  line-height: 1.6rem;
}
.blog-content a:hover {
    color: #507ea8;
}
</style>
