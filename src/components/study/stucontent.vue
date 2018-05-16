<template>
  <div class="n-content">
    <Row class="container-content">
      <i-col span="18">
        <studycontent></studycontent>
        <headervideo></headervideo>
        <router-view></router-view>
      </i-col>
      <i-col span="6" class="sidebar">
        <sturank></sturank>
        <stutag></stutag>
      </i-col>
    </Row>
  </div>
</template>

<script>
import Studycontent from "../study/studycontent";
import Headervideo from '../study/headervideo'
import Sturank from '../study/sturank'
import Stutag from '../study/stutag'

export default {
  components: {
    Studycontent,
    Headervideo,
    Sturank,
    Stutag
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
