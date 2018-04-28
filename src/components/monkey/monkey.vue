<template>
  <div class="nancy-monkey">
    <a href="#">
      <Row class="container-content">
        <i-col span="24" class="n-stick">
          <div class="stick">博主置顶</div>
          <div class="blog-content">
            <div class="n-title">嫁人就嫁程序员</div>
            <div class="n-content">
              <p>
                个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中 个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中 个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中正在建设中个人网站正在建设中
              </p>
            </div>
          </div>
        </i-col>
      </Row>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nancy-monkey {
  margin-top: 20px;
  width: 100%;
  height: 160px;
  background: #fff;
  padding: 0px 15px 15px 0px;
  border: 1px solid#ddd;
  border-radius: 5px;
}
.nancy-monkey a {
  display: block;
}
div.nancy-monkey:hover {
  border-color: #ff5e52;
}
.container-content {
  text-align: left;
}
.n-stick {
  position: relative;
}
.stick {
  position: absolute;
  top: 2px;
  left: 20px;
  line-height: 30px;
  padding: 0 10px;
  width: fit-content;
  background: #ff5e52;
  color: #fff;
  border-radius: 5px;
}
.blog-content {
  position: absolute;
  top: 35px;
  left: 20px;
}
.blog-content .n-title {
  font-size: 1.2rem;
  color: #ff5e52;
  margin: 5px 0;
}
.blog-content .n-content {
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 0.8rem;
  line-height: 1.6rem;
  color: rgb(71, 70, 70);
  /* padding-bottom: 30px; */
}
</style>
