<template>
  <div class="content-wrapper">
    <ul class="float-r">
      <router-link tag="li" to="/answer/hot" class="routeritem">最热问题</router-link>
      <router-link tag="li" to="/answer/pay" class="routeritem">付费问答</router-link>
      <router-link tag="li" to="/answer/answering" class="routeritem">正在解答</router-link>
      <router-link tag="li" to="/answer/more" class="routeritem">更多</router-link>
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
