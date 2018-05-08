import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state:{   //初始化状态 数据共享
        count:10,
        number:12
    },
    getters:{  //定义派生状态
        dosome(state){
            return state.count+=5
        }
    },
    mutations:{ //定义变更状态,需要提交  必须同步
        m1(state,opt){
            state.count+=(opt.n+opt.m)
        }
    },
    actions:{  //提交变更 可以包含异步操作
        a1(context,opt){
            context.commit('m1',opt)
        }
    },
    modules:{
        
    }
})