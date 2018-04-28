<template>
   <div class="header-wrapper">
    <div class="header">
      <a href="#" class="logo">
        <img src="../assets/logo.png" alt="">
        <span>Nancy vue-blog</span>
      </a>
      <ul class="float-r">
        <router-link tag="li" to="/index" class="routeritem">首页</router-link>
        <router-link tag="li" to="/answer" class="routeritem">问答</router-link>
        <router-link tag="li" to="/column" class="routeritem">专栏</router-link>
        <router-link tag="li" to="/study" class="routeritem">学习</router-link>
        <router-link tag="li" to="/tag" class="routeritem">标签</router-link>
        <router-link tag="li" to="/find" class="routeritem">发现</router-link>
        <router-link tag="li" to="/write" class="routeritem">写文章</router-link>
      </ul>
      <i-input v-model="value4" icon="search" placeholder="请搜索..." style="width: 200px" class="search-query"></i-input>
    </div>
   </div>
</template>

<script>
export default {
  name: "NHeader",
  data() {
    return {
      value4: ""
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-wrapper {
  position: fixed;
  top: 0;
  width: 100%;
  font-size: 16px;
  background: #363636;
  height: 55px;
  z-index: 100;
}
.header {
  width: 1080px;
  margin: 0 auto;
  display: inline-block;
}
.header .logo {
  margin-left: 20px;
  float: left;
  font-size: 1.5em;
  line-height: 55px;
  color: #2c3e50;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  font-weight: 500;
  color: #eee;
}
.logo img {
  vertical-align: middle;
  margin-right: 6px;
  width: 40px;
  height: 40px;
}
.float-r {
  float: left;
  color: #eee;
  line-height: 55px;
  font-size: 1rem;
}
.routeritem {
  float: left;
  margin: 0 1.8rem;
  cursor: pointer;
}
.search-query {
  float: right;
  margin-top: 15px;
}
.el-input {
  width: 130px;
  height: 30px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.router-link-exact-active, .router-link-active {
  color: rgb(8, 156, 119);
  font-weight: 500;
}
</style>
