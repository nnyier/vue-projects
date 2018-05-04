<template>
  <div class="n-answer">
    <div class="content-wrapper">
      <ancontent></ancontent>
      <router-view></router-view>
    </div>
    <Page :total="100" class="pagination"></Page>
  </div>
</template>

<script>
import Anheader from "../anheader/anheader";
import Ancontent from "../ancontent/ancontent";
export default {
  components: {
    Anheader,
    Ancontent
  }
};
</script>

<style scoped>
.n-answer {
  width: 100%;
  margin-top: 55px;
  background: #ededed;
  padding-bottom: 30px;
}
.n-header {
  background: #363636;
}
.content-wrapper {
  width: 1080px;
  margin: 0 auto;
}
.pagination {
  margin: 20px 0;
}
.n-answer .ivu-page-item-active {
    background-color: #009a61;
    border-color: #009a61;
}
</style>
