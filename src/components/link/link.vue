<template>
  <div class="n-public">
    <Row class="container-content">
      <i-col span="24" class="n-stick">
        <div class="stick">友情链接</div>
        <ul class="n-link">
            <li>
                <a href="https://www.baidu.com/"><Icon type="ios-paw"></Icon>百度</a>
            </li>
            <li>
                <a href="https://github.com/"><Icon type="social-github"></Icon>GitHub</a>
            </li>
            <li>
                <a href="https://www.oschina.net/"><Icon type="android-cloud"></Icon>开源中国</a>
            </li>
            <li>
                <a href="https://github.com/"><Icon type="social-github"></Icon>GitHub</a>
            </li>
            <li>
                <a href="https://github.com/"><Icon type="social-github"></Icon>GitHub</a>
            </li>
            <li>
                <a href="https://www.imooc.com/"><Icon type="fireball"></Icon>慕课网</a>
            </li>
        </ul>
      </i-col>
    </Row>
  </div>
</template>

<script>

export default {};
</script>

<style scoped>
.n-public {
  margin-top: 20px;
  width: 100%;
  background: #fff;
  border: 1px solid#ddd;
  text-align: left;
  border-radius: 5px;
}
.stick {
  height: 3rem;
  background: #f5f5f5;
  line-height: 3rem;
  font-size: 1rem;
  font-weight: 500;
  color: #333333;
  text-indent: 1rem;
}
.n-link {
    padding: 5px 20px;
}
.n-link li {
    font-size: 1rem;
}
.n-link i {
    color: rgb(46, 62, 92);
    width: 1rem;
    margin-right: 20px;
    font-size: 1.5rem;
    text-align: end;
}
.n-link a {
  display: block;
  margin: 5px 10px;
  text-decoration: unset;
  font-size: 0.8rem;
  line-height: 2rem;
}
.n-link a:hover {
    color: #507ea8;
}
</style>
