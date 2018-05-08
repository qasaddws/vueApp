<template>
  <div id="movielist">
      <h2>{{MovieList.title}}<a v-if="MovieList.num==0">更多电影>></a><a class="el-icon-refresh" v-else  @click="ChangList(MovieList.movies,news)" @touchend="ChangList(MovieList.movies,news)">换一批</a></h2>
      <ul>
          <li v-for="(item,index) in news" :key="index" >
              <img :src=item.url alt="">
              <i>{{item.num}}</i>
              <p>{{item.name}}</p>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: "movielist",
  props: ["MovieList"],
  data() {
    return {
      news:""
    };
  },
  methods:{
    ChangList(data,old,arr){
      if(!arr){
        var arr=new Set([]); 
      }
      arr.add(data[Math.floor(Math.random()*data.length)])
      if(arr.size<6){
        this.ChangList(data,old,arr);
        // arr.add(data[Math.floor(Math.random()*data.length)])
      }else{
        this.news=Array.from(arr)
        // console.log(this.news)
      }
    },
  },
  watch:{
    MovieList:function(n,o){
        this.ChangList(this.MovieList.movies,this.news);
    }
  }
};
</script>
<style scoped>
#movielist {
  border-bottom: 0.133333rem solid #d8d8d8;
  border-top: 0.133333rem solid #d8d8d8;
}
#movielist h2 {
  height: 1.066667rem;
  line-height: 1.066667rem;
  box-sizing: border-box;
  padding: 0px 0.266667rem;
  font-size: 14px;
  font-weight: normal;
  border-bottom: 0.013333rem solid #d8d8d8;
}
#movielist h2 a {
  font-size: 12px;
  line-height: 1.066667rem;
  float: right;
}
[data-dpr="2"] #movielist h2 {
  font-size: 28px;
}
[data-dpr="3"] #movielist h2 {
  font-size: 42px;
}
[data-dpr="2"] #movielist h2 a {
  font-size: 20px;
}
[data-dpr="3"] #movielist h2 a {
  font-size: 30px;
}
#movielist ul {
  padding: 0.266667rem;
  box-sizing: border-box;
  overflow: hidden;
  margin-left: -0.16rem; /* 12/75 */
}
#movielist ul li {
  float: left;
  margin-left: 0.16rem;
  position: relative;
  width: 3.04rem /* 228/75 */;
}
#movielist ul li p {
  height: 0.826667rem;
  line-height: 0.826667rem;
  text-align: center;
  font-size: 12px;
}
[data-dpr="2"] #movielist ul li p,
[data-dpr="2"] #movielist ul li i {
  font-size: 22px;
}
[data-dpr="3"] #movielist ul li p,
[data-dpr="3"] #movielist ul li i {
  font-size: 34px;
}
#movielist ul li i {
  position: absolute;
  bottom: 0.826667rem;
  background: rgba(0, 0, 0, 0.5);
  color: orange;
  width: 0.8rem;
  height: 0.48rem;
  text-align: center;
  line-height: 0.48rem;
}
#movielist img{
    width: 3.04rem /* 228/75 */;
    height: 4.32rem /* 324/75 */;
}
</style>
