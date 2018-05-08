<template>
    <div id="new" :class=SpecialInform.class>
        <h2>{{SpecialInform.title1}}<a>更多资讯>></a></h2>
        <ul class="center">
            <li v-for="(item,index) in SpecialInform.news1" :key="index">
                <img :src=item.url alt="" class="new">
                <h3>{{item.name}}</h3>
                <p>{{item.content}}</p>
                <img :src=item.src alt="" class="preson">
                <b>{{item.preson}}</b>
                <span>{{item.time}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:"special",
        props:["SpecialInform"],
        data(){
            return{
            }
        },
        
    }
</script>
<style>
#new h2{
    height: 1.066667rem /* 80/75 */;
    line-height: 1.066667rem /* 80/75 */;
    box-sizing: border-box;
    padding:0px .266667rem /* 20/75 */ ;
    font-size: 14px;
    font-weight: normal;
    border-bottom: .013333rem /* 1/75 */ solid #d8d8d8
}
#new h2 a{
    font-size: 12px;
    line-height: 1.066667rem /* 80/75 */;
    display: inline-block;
    float: right;
}
[data-dpr="2"] #new h2{
    font-size: 28px
}
[data-dpr="3"] #new h2{
    font-size: 42px
}
[data-dpr="2"] #new h2 a{
    font-size: 20px
}
[data-dpr="3"] #new h2 a{
    font-size: 30px
}
#new ul li{
    padding: .293333rem /* 22/75 */ 0px .293333rem /* 22/75 */ 3.053333rem /* 229/75 */;
    position: relative;
    border-bottom: .013333rem /* 1/75 */ solid #d8d8d8
}
#new ul li:last-child{
    border: none
}
#new ul li img.new{
    position: absolute;
    left: 0;
    width: 2.546667rem /* 191/75 */;
    height: 1.946667rem /* 146/75 */;
}
#new ul li img.preson{
    float: left;
    width:.373333rem /* 28/75 */;
    height:.373333rem /* 28/75 */
}
#new ul li h3{
    font-size: 13px
}
[data-dpr="2"] #new  ul li h3{
    font-size: 26px
}
[data-dpr="3"] #new  ul li h3{
    font-size: 39px
}
#new ul li p{
    font-size: 12px;
    line-height: .48rem /* 36/75 */;
    padding-top: .133333rem /* 10/75 */;
    padding-bottom: .066667rem /* 5/75 */
}
[data-dpr="2"] #new  ul li p{
    font-size: 22px
}
[data-dpr="3"] #new  ul li p{
    font-size: 36px
}
#new ul li b{
    font-size: 10px;
    font-weight: normal;
    color: #ccc;
}
[data-dpr="2"] #new  ul li b,[data-dpr="2"] #new  ul li span{
    font-size: 18px
}
[data-dpr="3"] #new  ul li b,[data-dpr="3"] #new  ul li span{
    font-size: 28px
}
#new ul li span{
    font-size: 10px;
    display: block;
    float: right;
}
</style>

