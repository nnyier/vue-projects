<template>
    <div class="vedio-wrapper">
        <ul>
            <li v-for="item in items" :key="item.id" class="n-wrapper">
                <a :href="item.url" target="_blank">
                    <div class="item-wrapper">
                        <div class="item">
                            <div class="banner-wrapper">
                                <img :src="item.picurl" alt="">
                                <span class="banner">{{item.banner}}</span>
                            </div>
                            <div class="title-wrapper">
                                <div class="item-title">
                                    <p>{{item.title}}</p>
                                </div>
                                <div class="item-author">
                                    <span>{{item.author}}</span>
                                </div>
                                <div class="clearfix">
                                    <span class="item-price">￥{{item.price}}.00</span>
                                    <span class="item-join">{{item.join}}人参与</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          url:
            "https://segmentfault.com/l/1500000014450043?utm_source=recommend_web-live-new",
          picurl: "../../../static/img/img3.png",
          banner: "视频",
          title: "TypeScript极速完全进阶指南",
          author: "会点前端的大彬哥",
          price: 135,
          join: 8653
        }
      ]
    };
  }
};
</script>

<style scoped>
.n-wrapper {
  text-align: left;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.item-wrapper .item .banner-wrapper {
  position: relative;
  height: 146px;
  background: #fff;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.item-wrapper .item .banner-wrapper .banner {
  position: absolute;
  top: 5px;
  right: 5px;
  display: block;
  background: rgb(10, 114, 88);
  color: #fff;
  font-size: 12px;
  padding: 5px 8px;
  border-radius: 3px;
}
.item-wrapper .item .banner-wrapper > img {
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.title-wrapper {
  padding: 0 15px;
}
.item-wrapper .item .item-title {
  height: 44px;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.clearfix {
  height: 35px;
  line-height: 35px;
}
.item-wrapper .item .item-author {
  margin-bottom: 8px !important;
}
.item-wrapper .item .item-price {
  color: #ed1c24;
  font-size: 16px;
  font-weight: 500;
}
.item-join {
  float: right !important;
}
</style>
