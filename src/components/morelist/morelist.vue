<template>
    <div class="n-morelist">
        <div class="n-left">
            <div class="left-content answer">
                <span>14</span>
                <span>回答</span>
            </div>
            <div class="left-content browse">
                <span>325</span>
                <span>浏览</span>
            </div>
        </div>
        <div class="n-right">
            <ul class="right-content">
                <li>
                    <a href="#" class="author">nancy</a>
                    <span>57分钟前</span>
                </li>
            </ul>
            <h2><a href="https://segmentfault.com/a/1190000010791103">FPB 2.0：免费的计算机编程类中文书籍 2.0</a></h2>
            <ul class="right-box">
                <li>
                    <a href="#">javascript</a>
                </li>
                <li>
                    <a href="#">php</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.n-morelist {
  margin-top: 0.8rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
  display: flex;
  padding-bottom: 10px;
}
.n-left {
  margin-right: 2rem;
}
.left-content {
  padding: 2px 0 2px 10px;
  line-height: 1rem;
}
.left-content span {
  margin-right: 0.5rem;
}
.answer {
  background: #ddd;
  margin-bottom: 2px;
}
.browse {
  background: #009a61;
  color: #fff;
}
.n-right h2 {
  display: inline;
  line-height: 1.5rem;
  font-size: 0.9rem;
}
.author {
  display: inline-block;
  margin-bottom: 4px;
}
.right-box {
  float: right;
  margin-left: 1rem;
}
.right-box li {
  float: right;
  margin: 0 5px;
  background: #ddd;
  padding: 4px 8px;
  border-radius: 5px;
}
</style>
