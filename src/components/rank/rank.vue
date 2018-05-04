<template>
  <div class="n-rank">
    <Row class="container-content">
      <i-col span="24" class="n-stick">
        <div class="stick">排行榜</div>
        <ol class="rank-wrapper">
          <li class="author" v-for="(item, index) in items" :key="item.id">
            <span class="n-index">{{index +1}}.</span><a href="#">{{item}}</a>
             <!-- <span class="n-right">+{{index*Math.ceil(Math.random()*10)}}</span> -->
          </li>
        </ol>
        <p>
        </p>
      </i-col>
    </Row>
  </div>
</template>

<script>
import Siderelease from "../siderelease/siderelease";

export default {
  data() {
    return {
      items: [
        "大脑斧",
        "就是爱编程",
        "天域",
        "微笑pastime",
        "这个世界太疯狂",
        "唔咦唔啊啊",
        "羊城",
        'Nancyzheng',
        '白羊',
        '空空如也',
        '纸短情长',
        'PLANTE'
      ]
    };
  },
  components: {
    Siderelease
  }
};
</script>

<style scoped>
.n-rank {
  width: 100%;
  background: #fff;
  border: 1px solid#ddd;
  text-align: left;
  border-radius: 5px;
}
.stick {
  height: 2rem;
  background: #f5f5f5;
  line-height: 2rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #333333;
  text-indent: 1rem;
}
.rank-wrapper {
  margin: 10px;
}
.rank-wrapper > li {
  height: 1.8rem;
  font-size: 0.8rem;
  line-height: 1.8rem;
  border-bottom: 1px solid #ddd;
}
.author .n-index {
  display: inline-block;
  min-width: 20px;
  color: rgb(119, 117, 117);
  text-align: right;
}
.author a {
  display: inline-block;
  margin:  0 30px 0 10px;
  color: #46a180;
}
.n-right {
  float: right;
  color: rgb(119, 117, 117);
}
</style>
