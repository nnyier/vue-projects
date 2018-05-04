<template>
    <div class="n-morelist">
        <!-- <div class="n-left">
            <div class="left-content answer">
                <span class="heart" @click="changeColor">
                    <Icon type="android-favorite-outline"></Icon>
                </span>
            </div>
        </div> -->
        <div class="n-right">
            <ul class="right-content">
                <li>
                    <a href="#" class="author">nancy</a>
                    <span>34分钟前</span>
                </li>
            </ul>
            <h2>
                <a href="https://segmentfault.com/a/1190000014724227">深入理解js对象的引用</a>
            </h2>
            <ul class="right-box">
                <li>
                    <a href="#">javascript</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    changeColor() {}
  }
};
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
  margin-right: 1rem;
}
.left-content {
  padding: 10px;
}
.left-content .ivu-icon {
  font-size: 1.5rem;
  color: #ccc;
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
