<template>
  <div id="topiclist" class="center" :class=TopicList.class>
        <h2>{{TopicList.title}}<img :src=TopicList.src></h2>
        <ul>
            <li v-for="(item,index) in TopicList.topic1" :key="index">
                <img :src=item.url alt="">
                <p>{{item.content}}</p>
                <i>{{item.preson}}</i>
            </li>
        </ul>
  </div>
</template>
<script>
export default{
    name: "topiclist",
    props: ["TopicList"],
    data() {
        return {
            news:""
        };
    }
}
</script>
<style scoped>
#topiclist h2 {
  height: .826667rem /* 62/75 */;
  line-height:.826667rem /* 62/75 */;
  font-size: 12px;
  font-weight: normal;
  position: relative;
  padding-left: .586667rem /* 44/75 */
}
#topiclist h2 img{
    position: absolute;
    top: .2rem /* 15/75 */;
    left: 0;
    width:.506667rem /* 38/75 */;
    height:.506667rem /* 38/75 */
}
[data-dpr="2"] #topiclist h2,[data-dpr="2"] #topiclist ul li p {
  font-size: 20px;
}
[data-dpr="3"] #topiclist h2,[data-dpr="3"] #topiclist ul li p {
  font-size: 30px;
}
#topiclist ul{
    overflow: hidden;
    margin-left: -.093333rem /* 7/75 */;
}
#topiclist ul li{
    width: 3.093333rem /* 232/75 */;
    float: left;
    margin-left: .093333rem /* 7/75 */;
    background: #f3f3f3;
    margin-bottom: .133333rem /* 10/75 */
}
#topiclist ul li>img{
    width: 3.093333rem /* 232/75 */;
    height: 1.826667rem /* 137/75 */;
}
#topiclist ul li p{
    font-size: 12px;
    line-height: .346667rem /* 26/75 */;
    margin-top: 5px
}
#topiclist ul li i{
    font-style: normal;
    font-size: 10px;
    line-height: .48rem /* 36/75 */;
    padding-left: .133333rem /* 10/75 */
}
[data-dpr="2"] #topiclist ul li i{
    font-size: 16px
}
[data-dpr="3"] #topiclist ul li i{
    font-size: 32px
}
.topic{
    margin-bottom:1.186667rem /* 89/75 */
}

</style>
