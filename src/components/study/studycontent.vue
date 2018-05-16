<template>
  <div class="content-wrapper">
    <ul class="float-r">
      <router-link tag="li" to="/study/recovideo" class="routeritem">推荐的</router-link>
      <router-link tag="li" to="/study/hotvideo" class="routeritem">热门的</router-link>
      <router-link tag="li" to="/study/newvideo" class="routeritem">最新发布</router-link>
      <router-link tag="li" to="/study/openvideo" class="routeritem">公开课</router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.content-wrapper {
  margin-top: 20px;
  text-align: left;
}
.float-r {
  display: flex;
  border-bottom: 1px solid #ddd;
}
.float-r li:hover {
  background: #ddd;
  border-radius: 3px 3px 0 0;
}
.routeritem {
  /* 去除1px带来的视觉影响 */
  border: 1px solid transparent;
  font-size: 0.8rem;
  line-height: 2rem;
  padding: 0 10px;
  margin-right: 0.2rem;
}
.router-link-exact-active,
.router-link-active {
  color: #009a61;
  font-weight: 500;
  background: #fff;
  border-radius: 3px 3px 0 0;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
  margin-bottom: -1px;
}
</style>
