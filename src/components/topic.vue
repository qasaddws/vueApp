<template>
  <div id="topic" class="banner">
      <el-input :placeholder=msg v-model="input10" clearable></el-input>
      <i class="el-icon-search"></i>
      <topic-list :topic-list="topic"></topic-list>
      <topic-list :topic-list="topic2"></topic-list>
      <topic-list :topic-list="topic3"></topic-list>
      <topic-list :topic-list="topic4"></topic-list>
  </div>
</template>
<script>
import TopicList from "../components/TopicList.vue"
export default {
  name: "topic",
  data() {
    return {
        input10: '',
        msg:"请输入关键字搜索",
        topic:"",
        topic2:"",
        topic3:"",
        topic4:""
    };
  },
  components:{TopicList},
  beforeMount(){
    this.$http.get("static/json/topic.json").then(reponse => {
      this.topic = reponse.data.list;
      this.topic2 = reponse.data.list1;
      this.topic3 = reponse.data.list2;
      this.topic4 = reponse.data.list3;
      console.log(this.topic4)
    });
  }
};
</script>
<style>
</style>