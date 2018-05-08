<template>
  <div id="starlist" :class="StarList.class">
      <h2>{{StarList.title}}<a class="el-icon-refresh" @click="ChangStar(StarList.star,stars)">换一批</a></h2>
      <ul>
          <li v-for="(item,index) in stars" :key="index">
              <img :src=item.url alt="">
              <p>{{item.name}}</p>
          </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: "starlist",
  data() {
    return {
      stars:"",
    };
  },
  props: ["StarList"],
  methods:{
    ChangStar(data,old,arr){
        
      if(!arr){
        var arr=new Set([]); 
      }
      arr.add(data[Math.floor(Math.random()*data.length)])
      if(arr.size<6){
        this.ChangStar(data,old,arr);
        // arr.add(data[Math.floor(Math.random()*data.length)])
      }else{
        this.stars=Array.from(arr)
        // console.log(this.news)
      }
    },
  },
  watch:{
      StarList:function(){
          this.ChangStar(this.StarList.star,this.stars);
      }
  }
};
</script>
<style scoped>
#starlist {
  border-bottom: 0.133333rem solid #d8d8d8;
}
#starlist h2 {
  height: 1.066667rem;
  line-height: 1.066667rem;
  box-sizing: border-box;
  padding: 0px 0.266667rem;
  font-size: 14px;
  font-weight: normal;
  border-bottom: 0.013333rem solid #d8d8d8;
}
#starlist h2 a {
  font-size: 12px;
  line-height: 1.066667rem;
  float: right;
}
[data-dpr="2"] #starlist h2 {
  font-size: 28px;
}
[data-dpr="3"] #starlist h2 {
  font-size: 42px;
}
[data-dpr="2"] #starlist h2 a {
  font-size: 20px;
}
[data-dpr="3"] #starlist h2 a {
  font-size: 30px;
}
#starlist ul {
  padding: 0.266667rem;
  box-sizing: border-box;
  overflow: hidden;
  margin-left: -.066667rem
}
#starlist ul li {
  float: left;
  margin-left: .066667rem /* 5/75 */;
  position: relative;
}
#starlist ul li p {
  height: .613333rem /* 46/75 */;
  line-height: .613333rem /* 46/75 */;
  text-align: center;
  font-size: 12px;
}
[data-dpr="2"] #starlist ul li p, {
  font-size: 20px;
}
[data-dpr="3"] #starlist ul li p,{
  font-size: 32px;
}
#starlist img{
    width: 1.52rem /* 114/75 */;
    height: 2.146667rem /* 161/75 */;
}
.star1{
    margin-bottom: 1.32rem /* 99/75 */
}
</style>