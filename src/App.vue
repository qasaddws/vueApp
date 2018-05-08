<template>
  <div id="app">
    <my-swiper></my-swiper>
    <router-view></router-view>
    <menu-list @push="getData"></menu-list>
  </div>
</template>

<script>
import MenuList from "./components/MenuList";
import MySwiper from "./components/MySwiper";
export default {
  name: "App",
  components: { MenuList, MySwiper },
  data() {
    return {
      opts: {
        container: "swiper1",
        loop: true,
        autoplay: 2000,
        speed: 300,
        num:"",
        pagination : '.swiper-pagination',
        imgs: [
          "static/img/swiper1.jpg",
          "static/img/swiper1.jpg",
          "static/img/swiper1.jpg",
          "static/img/swiper1.jpg",
          "static/img/swiper1.jpg"
        ],
        
      }
    };
  },
  methods:{
 			getData(data){
 				this.opts.num=data
 			}
 		}
};

</script>
<style>
html,
body {
  height: 100%;
  overflow-x: hidden;
}
#app {
  width: 10rem;
  height: 100%;
  position: relative;
}
.el-input {
  width: 100%;
  box-sizing: border-box;
  padding: 0.133333rem 0.266667rem;
  background: #f4f4f4;
}
.el-input input {
  height: 0.986667rem;
  font-size: 13px;
  text-align: center;
  background-color: #fff;
}
[data-dpr="2"] .el-input input {
  font-size: 26px;
}
[data-dpr="3"] .el-input input {
  font-size: 39px;
}
.banner {
  position: relative;
}
.banner i.el-icon-search {
  position: absolute;
  top: 0;
  line-height: 1.253333rem;
  left: 2.666667rem; /* 200/75 */
}
</style>
