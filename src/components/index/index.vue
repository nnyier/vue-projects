<template>
  <div class="nancy-index">
    <div class="container">
      <Row class="container-content">
        <i-col span="16" class="nancy-lt">
          <carrousel></carrousel>
          <monkey></monkey>
          <public></public>
        </i-col>
        <i-col span="8" class="nancy-rt">
          <bulletin></bulletin>
          <mytag></mytag>
          <sidepublic></sidepublic>
          <nlink></nlink>
        </i-col>
      </Row>
    </div>
    <n-footer></n-footer>
  </div>
</template>

<script>
import Carrousel from "../nswiper/nswiper";
import Monkey from "../monkey/monkey";
import Public from "../public/public";
import Bulletin from "../bulletin/bulletin";
import Mytag from "../mytag/mytag";
import Sidepublic from "../sidepublic/sidepublic";
import Nlink from "../link/link";
import NFooter from '../footer'
export default {
  components: {
    Carrousel,
    Monkey,
    Public,
    Bulletin,
    Mytag,
    Sidepublic,
    Nlink,
    NFooter
  }
};
</script>

<style scoped>
.nancy-index {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  color: #000;
  padding: 65px 0 0 0;
}
.container {
  width: 1080px;
  height: 100%;
  margin: 0 auto;
}
.nancy-rt {
  padding: 0 20px;
  border-radius: 5px;
}
</style>
