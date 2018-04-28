<template>
  <div class="n-bulletin">
    <a href="#">
      <Row class="container-content">
        <i-col span="24" class="n-stick">
          <div class="stick">站点公告</div>
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
.n-bulletin {
  width: 100%;
  height: 190px;
  background: #fff;
  padding: 0px 15px 15px 0px;
  border: 1px solid#ddd;
  border-radius: 5px;
}
.nancy-monkey a {
  display: block;
}
div.n-bulletin:hover {
  border-color: #1cce75;
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
  height: 30px;
  border-radius: 5px;
  line-height: 30px;
  padding: 0 10px;
  width: fit-content;
  background: #1cce75;
  color: #fff;
}
.blog-content {
  position: absolute;
  top: 35px;
  left: 20px;
}
.blog-content .n-title {
  font-size: 1.2rem;
  color: #1cce75;
  margin: 5px 0;
}
.blog-content .n-content {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-size: 0.8rem;
  line-height: 1.6rem;
  color: rgb(71, 70, 70);
  /* padding-bottom: 30px; */
}
</style>
