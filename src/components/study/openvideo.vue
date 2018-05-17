<template>
    <div class="n-reco">
        <h2>公开课</h2>
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
        </div>
    </div>
</template>

<script>
import Vedio from "./vedio";
import Series from "./series";
import Live from "./live";
import Video1 from "./video1";
export default {
  components: {
    Vedio,
    Series,
    Live,
    Video1
  }
};
</script>

<style scoped>
.n-reco {
  width: 100%;
  padding-bottom: 30px;
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
