<template>
  <div id="information" class="banner">
      <el-input :placeholder=msg v-model="input10" clearable></el-input>
      <i class="el-icon-search"></i>
      <ul class="tagnew">
        <li v-for="(item,index) in news" :key="index" @click="TagNew(index)" @touchend="TagNew(index)" :class="{active:number==index}">{{item}}</li>
      </ul>
      <tag-new :special-inform="first" v-if="number==0"></tag-new>
      <tag-new :special-inform="second" v-else-if="number==1"></tag-new>
      <tag-new :special-inform="first" v-else-if="number==2"></tag-new>
      <movie-list :movie-list="movies"></movie-list>
      <special :special-inform="second"></special>
  </div>
</template>
<script>
import TagNew from "../components/TagNew.vue";
import Special from "../components/special.vue";
import MovieList from "../components/MovieList";
export default {
  name: "drama",
  data() {
    return {
        input10: '',
        msg:"影片 / 影人 ,搜索",
        first: "",
        movies: "",
        second: "",
        news:["院线快报","好莱坞资讯","娱乐八卦"],
        number:window.sessionStorage.num||0
    };
  },
  methods:{
    TagNew(index){
        this.number=index
        window.sessionStorage.num=index
    }
  },
  beforeMount() {
    // console.log(123)
    // console.log(this);
    this.$http.get("static/json/list.json").then(reponse => {
      this.first = reponse.data[0].list1;
      this.movies = reponse.data[1].list2;
      this.second = reponse.data[2].list3;
      //   this.second = reponse.data.title1;
      // console.log(reponse.data[1].list2);
    });
  },
  components: { Special, MovieList,TagNew }
};
</script>
<style scoped>
.new2 {
  padding-bottom: 1.306667rem; /* 98/75 */
}
.tagnew{
  box-sizing: border-box;
  padding:0rem /* 0/75 */ .266667rem /* 20/75 */;
  overflow: hidden;
  border-bottom: .013333rem /* 1/75 */ solid #ccc
}
.tagnew li{
  float: left;
  width: 33.33%;
  text-align: center;
  height: 1.053333rem /* 79/75 */;
  line-height: 1.053333rem /* 79/75 */
}
.tagnew li.active{
  border-bottom: .026667rem /* 2/75 */ solid #2a98da
}
</style>