<template>
  <div id="drama" class="banner">
      <el-input :placeholder=msg v-model="input10" clearable></el-input>
      <i class="el-icon-search"></i>
      <movie-list :movie-list="drama"></movie-list>
      <movie-list :movie-list="drama2"></movie-list>
      <movie-list :movie-list="drama3"></movie-list>
      <star-list :star-list="stars"></star-list>
  </div>
</template>
<script>
import MovieList from "../components/MovieList";
import StarList from "../components/star"
export default {
  name: "drama",
  data() {
    return {
        input10: '',
        msg:"影片 / 影人 ,搜索",
        drama:"",
        drama2:"",
        drama3:"",
        stars:"",
    };
  },
  beforeMount() {
    this.$http.get("static/json/list-movies.json").then(reponse => {
      this.drama = reponse.data.list;
      this.drama2 = reponse.data.list2;
      this.drama3 = reponse.data.list3;
      this.stars = reponse.data.star1
    });
  },
  components: { MovieList,StarList }
};
</script>
<style>
</style>