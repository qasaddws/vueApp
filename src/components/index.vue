<template>
  <div id="index" class="banner">
      <el-input :placeholder=msg v-model="input10" clearable></el-input>
      <i class="el-icon-search"></i>
      <special :special-inform="first"></special>
      <movie-list :movie-list="movies"></movie-list>
      <special :special-inform="second"></special>
  </div>
</template>
<script>
import Special from "../components/special.vue";
import MovieList from "../components/MovieList";
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: "index",
  data() {
    return {
      input10: "",
      msg: "影片 / 影人 / 资讯,任你搜",
      first: "",
      movies: "",
      second: ""
    };
  },
  computed:{
    ...mapState(['count','number']),
    ...mapGetters(['dosome'])
  },
  methods:{
    ...mapMutations(['m1']),
    ...mapActions(['a1'])
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
  mounted(){
    
    // console.log(this.$store.state.count)
    // console.log(this.dosome),
    // vuex:mutations
    // this.$store.commit("m1",{n:1,m:2}),//提交触发
    this.m1({n:1,m:2})
    // console.log(this.count)
    this.a1({n:1,m:2})
    this.$store.dispatch('a1',{n:1,m:2});
  },
  components: { Special, MovieList }
};
</script>
<style>
.new2 {
  padding-bottom: 1.306667rem; /* 98/75 */
}
</style>

