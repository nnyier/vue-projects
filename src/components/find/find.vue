<template>
  <div class="n-find">
    <div class="content-wrapper">
      <findcontent></findcontent>
    </div>
  </div>
</template>

<script>
import Findcontent from "../find/findcontent";
export default {
  components: {
    Findcontent
  }
};
</script>

<style scoped>
.n-find {
  width: 100%;
  margin-top: 55px;
  background: #ededed;
  padding-bottom: 30px;
}
.content-wrapper {
  width: 1080px;
  margin: 0 auto;
  background: #fff;
}
.n-find .ivu-page-item-active {
  background-color: #009a61;
  border-color: #009a61;
}
</style>
