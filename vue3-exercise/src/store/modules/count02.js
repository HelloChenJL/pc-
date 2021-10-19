
const state =()=>{
  return{
    count:2
  }
 
}
const mutations ={
    increment:(state)=>{
      state.count++
    },
    decrement:(state)=>{
      state.count--
    }
}
const actions={
  incrementAsync(context){
    new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
      },2000)
    }).then(()=>{
      context.commit("increment")
    })
  },
  decrementAsync({commit}){
    new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
      },1000)
    }).then(()=>commit("decrement")
    )
  }
}
const getters = {
  /*
  p1:当前文件中的state
  p2:当前文件中的getters
  p3:全局命名空间中的state
  p4:全局命名空间中的state
  */
 countSquare(state,getters,rootState,rootGetters){
   console.log("p1=>",state)
   console.log("p3=>",rootState)
   return state.count*state.count
 }
}

export default{
  state,
  mutations,
  actions,
  getters,
  namespaced:true,//这个选项是为了让本子模块中的mutation，action，getters方法独立跟其他模块互不干扰
  
}