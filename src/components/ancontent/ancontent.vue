<template>
  <div class="n-content">
    <Row class="container-content">
      <i-col span="18">
        <acontent></acontent>
        <router-view></router-view>
      </i-col>
      <i-col span="6" class="sidebar">
        <rank></rank>
      </i-col>
    </Row>
  </div>
</template>

<script>
import Acontent from "../acontent/acontent";
import Rank from '../rank/rank'
export default {
  components: {
    Acontent,
    Rank
  }
};
</script>

<style scoped>
.n-content {
  background: #fff;
  padding: 0 20px;
}
.sidebar {
  padding: 20px 0 0 20px;
}
</style>
