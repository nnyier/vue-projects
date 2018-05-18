<template>
  <div class="n-tag">
    <div class="content-wrapper">
      <tagcontent></tagcontent>
      <tagcontent></tagcontent>
      <tagcontent></tagcontent>
    </div>
  </div>
</template>

<script>
import Tagcontent from "../tag/tagcontent";
export default {
  components: {
    Tagcontent
  }
};
</script>

<style scoped>
.n-tag {
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
.n-tag .ivu-page-item-active {
  background-color: #009a61;
  border-color: #009a61;
}
</style>
