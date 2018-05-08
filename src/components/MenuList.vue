<template>
  <div id="nav">
      <ul  @click="tag1">
          <li v-for="(item,index) in menu" :key="index" :class="{active:number==index}" @click="tag(index)" @touchend="tag(index)"><img :src=item.href v-if="index==number"><img :src=item.src v-else><router-link :to='item.path'>{{item.text}}</router-link></li>
      </ul>
  </div>
</template>
<script>
import p1 from '../../static/img/001.png'
import p2 from '../../static/img/002.png'
import p3 from '../../static/img/003.png'
import p4 from '../../static/img/004.png'
import p5 from '../../static/img/005.png'
import t1 from '../../static/img/home.png'
import t2 from '../../static/img/ziyun.png'
import t3 from '../../static/img/movie.png'
import t4 from '../../static/img/tv.png'
import t5 from '../../static/img/title.jpg'
    export default {
        name:"MenuList",
        data(){
            return{
                number:window.sessionStorage.number||0,
                menu:[{
                    path:"/",
                    text:"首页",
                    src:p1,
                    href:t1
                },{
                    path:"/information",
                    text:"资讯",
                    src:p2,
                    href:t2
                },{
                    path:"/movies",
                    text:"电影",
                    src:p3,
                    href:t3
                },{
                    path:"/drama",
                    text:"网剧",
                    src:p4,
                    href:t4
                },{
                    path:"/topic",
                    text:"专题",
                    src:p5,
                    href:t5
                }]
            }
        },
        methods:{
            tag(index){
                this.number=index,
                window.sessionStorage.number=index,
                window.sessionStorage.num=0;
                // console.log(new Vue());
            },
            tag1(){
				this.push()
			},
			push(){
				this.$emit("push",this.number)
			}
        },
		mounted(){
			this.push()
		}
    }
</script>
<style>
#nav{
    position: fixed;
    bottom: 0;
    background: #fbfcfc;
    padding: 0rem /* 0/75 */ .266667rem /* 20/75 */;
    width: 100%;
    box-sizing: border-box;
}
#nav ul{
    overflow: hidden;
    border-top: .013333rem /* 1/75 */ solid #e2e2e2;
   
}
#nav ul li{
    float: left;
    width: 20%;
    height: 1.306667rem /* 98/75 */;
    line-height:2.133333rem /* 160/75 */;
    text-align: center;
    position: relative;
    color: #666666
}
#nav ul li a{
    color: inherit;
    font-size: 10px;
    display: block;
    width: 100%;
    height: 100%;
}
#nav ul li img{
    display: block;
    position: absolute;
    top: .2rem /* 15/75 */;
    left: .666667rem /* 50/75 */;
    z-index:-1
}
[data-dpr="2"] #nav ul li a{
    font-size: 18px
}
[data-dpr="3"] #nav ul li a{
    font-size: 30px
}
#nav ul li.active{
    color: blue
} 
#nav img{
    width:.533333rem /* 40/75 */;
    height:.533333rem /* 40/75 */
}
</style>
