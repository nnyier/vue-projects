<template>
  <div class="n-content">
    <Row class="container-content">
      <i-col span="18">
        <acontent></acontent>
        <router-view></router-view>
      </i-col>
      <i-col span="6">
      </i-col>
    </Row>
  </div>
</template>

<script>
import Acontent from "../acontent/acontent";
export default {
  components: {
    Acontent
  }
};
</script>

<style scoped>
.n-content {
  background: #fff;
  padding: 0 20px;
}
</style>
