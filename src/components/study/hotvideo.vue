<template>
    <div class="n-reco">
        <h2>热门课程</h2>
        <div class="n-vedio">
            <vedio></vedio>
        </div>
    </div>
</template>

<script>
import Vedio from "./vedio";
export default {
  components: {
    Vedio
  }
};
</script>

<style scoped>
.n-reco {
    width: 100%;
}
.n-reco h2 {
    height: 40px;
    line-height: 40px;
}
</style>
