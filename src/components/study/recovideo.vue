<template>
    <div class="n-reco">
        <h2>最优课程</h2>
        <div class="n-vedio">
            <Row>
                <i-col span="8">
                    <div class="vedio-wrapper">
                        <vedio></vedio>
                    </div>
                </i-col>
                <i-col span="8">
                    <div class="vedio-wrapper">
                        <series></series>
                    </div>
                </i-col>
                <i-col span="8">
                    <div class="vedio-wrapper">
                        <live></live>
                    </div>
                </i-col>
            </Row>
            <Row>
                <i-col span="8">
                    <div class="vedio-wrapper">
                        <series></series>
                    </div>
                </i-col>
                <i-col span="8">
                    <div class="vedio-wrapper">
                        <live></live>
                    </div>
                </i-col>
                <i-col span="8">
                    <div class="vedio-wrapper">
                        <vedio></vedio>
                    </div>
                </i-col>
            </Row>
        </div>
        <hotvideo></hotvideo>
        <newvideo></newvideo>
        <openvideo></openvideo>
    </div>
</template>

<script>
import Vedio from "./vedio";
import Series from "./series";
import Live from "./live";
import Video1 from "./video1";
import Hotvideo from "./hotvideo";
import Newvideo from "./newvideo";
import Openvideo from "./openvideo";

export default {
  components: {
    Vedio,
    Series,
    Live,
    Video1,
    Hotvideo,
    Newvideo,
    Openvideo
  }
};
</script>

<style scoped>
.n-reco {
  width: 100%;
}
.n-reco h2 {
  height: 60px;
  line-height: 60px;
  margin: 20px;
}
.vedio-wrapper {
  padding: 2px;
}
</style>
