<template>
  <div class="n-public">
    <Row class="container-content">
      <i-col span="24" class="n-stick">
        <div class="stick">最新发布</div>
        <siderelease></siderelease>
        <p>
        </p>
      </i-col>
    </Row>
  </div>
</template>

<script>
import Siderelease from '../siderelease/siderelease'

export default {
  components: {
    Siderelease
  }
};
</script>

<style scoped>
.n-public {
  margin-top: 20px;
  width: 100%;
  background: #fff;
  border: 1px solid#ddd;
  text-align: left;
  border-radius: 5px;
}
.stick {
  height: 3rem;
  background: #f5f5f5;
  line-height: 3rem;
  font-size: 1rem;
  font-weight: 500;
  color: #333333;
  text-indent: 1rem;
}
</style>
