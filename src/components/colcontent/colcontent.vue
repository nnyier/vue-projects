<template>
  <div class="n-content">
    <Row class="container-content">
      <i-col span="18">
        <cocontent></cocontent>
        <router-view></router-view>
      </i-col>
      <i-col span="6" class="sidebar">
        <colrank></colrank>
        <coltag></coltag>
      </i-col>
    </Row>
  </div>
</template>

<script>
import Cocontent from "../cocontent/cocontent";
import Colrank from '../rank/colrank'
import Coltag from '../mytag/coltag'
export default {
  components: {
    Cocontent,
    Colrank,
    Coltag
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
