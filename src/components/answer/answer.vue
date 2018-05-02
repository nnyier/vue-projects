<template>
  <div class="n-answer">
    <div class="n-header">
      <anheader></anheader>
    </div>
    <div class="content-wrapper">
      <ancontent></ancontent>
    </div>
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
  position: fixed;
  top: 55px;
  left: 0;
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
</style>
