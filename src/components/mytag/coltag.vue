<template>
    <div class="n-tag">
        <Row class="container-content">
            <i-col span="24" class="n-stick">
                <div class="stick">热门标签</div>
                <div class="blog-content">
                    <div class="n-content">
                        <span class="stick-block">Bootstrap</span>
                        <span class="stick-block">Vue</span>
                        <span class="stick-block">Vue-router</span>
                        <span class="stick-block">Angular</span>
                        <span class="stick-block">React</span>
                        <span class="stick-block">Vue-resource</span>
                        <span class="stick-block">Vuex</span>
                        <span class="stick-block">Less</span>
                        <span class="stick-block">Sass</span>
                        <span class="stick-block">CSS3</span>
                        <span class="stick-block">Webpack</span>
                        <span class="stick-block">Node</span>
                        <span class="stick-block">iView</span>
                        <span class="stick-block">Element</span>
                        <span class="stick-block">Canvas</span>
                        <span class="stick-block">localStorge</span>
                        <span class="stick-block">webSocket</span>
                    </div>
                </div>
            </i-col>
        </Row>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.n-tag {
  margin-top: 20px;
  width: 100%;
  height: 290px;
  background: #fff;
  border: 1px solid#ddd;
  border-radius: 5px;
}
.container-content {
  text-align: left;
}
.n-stick {
  width: 100%;
  height: 30px;
  line-height: 30px;
  background: #f5f5f5;
  color: #333;
}
.stick {
  line-height: 3rem;
  background: #f5f5f5;
  color: #333;
  font-size: 0.9rem;
  text-indent: 1rem;
}
.blog-content {
  padding: 15px;
}
.blog-content .n-title {
  font-size: 1.2rem;
  color: #1cce75;
  margin: 5px 0;
}
.blog-content .n-content {
  overflow: hidden;
  font-size: 0.8rem;
  line-height: 1.6rem;
  color: rgb(71, 70, 70);
}
.stick-block {
  display: inline-block;
  width: fit-content;
  padding: 3px 8px;
  background: #109967;
  color: #ffffff;
  text-align: center;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
