<template>
  <div id="movies" class="banner">
      <el-input :placeholder=msg v-model="input10" clearable></el-input>
      <i class="el-icon-search"></i>
      <movie-list :movie-list="movies"></movie-list>
      <movie-list :movie-list="movies2"></movie-list>
      <movie-list :movie-list="movies3"></movie-list>
      <star-list :star-list="stars"></star-list>
  </div>
</template>
<script>
import MovieList from "../components/MovieList";
import StarList from "../components/star"
export default {
  name: "movies",
  data() {
    return {
      input10: "",
      msg: "影片 / 影人 ,搜索",
      movies:"",
      movies2:"",
      movies3:"",
      stars:"",
    };
  },
 
  beforeMount() {
    this.$http.get("static/json/list-movies.json").then(reponse => {
      this.movies = reponse.data.list;
      this.movies2 = reponse.data.list2;
      this.movies3 = reponse.data.list3;
      this.stars = reponse.data.star1
    });
  },
  components: { MovieList,StarList }
};
</script>
<style>

</style>