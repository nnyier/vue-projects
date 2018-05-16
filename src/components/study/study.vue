<template>
  <div class="n-study">
    <div class="content-wrapper">
      <stucontent></stucontent>
    </div>
    <Page :total="100" class="pagination"></Page>
  </div>
</template>

<script>
import Stucontent from "../study/stucontent";
export default {
  components: {
    Stucontent
  }
};
</script>

<style scoped>
.n-study {
  width: 100%;
  margin-top: 55px;
  background: #ededed;
  padding-bottom: 30px;
}
.content-wrapper {
  width: 1080px;
  margin: 0 auto;
}
.pagination {
  margin: 20px 0;
}
.n-study .ivu-page-item-active {
  background-color: #009a61;
  border-color: #009a61;
}
</style>
