<template>
  <div class="nancy-monkey">
    <a href="#">
      <Row class="container-content">
        <i-col span="24" class="n-stick">
          <div class="stick">博主置顶</div>
          <div class="blog-content">
            <div class="n-title">嫁人就嫁程序员</div>
            <div class="n-content">
              <p>女神：你能让这个论坛的人都吵起来，我今晚就跟你走。</p>
              <p>程序猿：PHP语言是最好的语言！</p>
              <p>论坛炸锅了，各种吵架...</p>
              <p>女神：服了你了，我们走吧，你想干啥都行。</p>
              <p>程序猿：今天不行，我一定要说服他们，PHP语言是最好的语言。</p>
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
  height: 200px;
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
  height: 120px;
  overflow: hidden;
  /* text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; */
  font-size: 0.8rem;
  line-height: 1.4rem;
  color: rgb(71, 70, 70);
}
</style>
