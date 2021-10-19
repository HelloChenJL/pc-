const state =()=>{
  return{
    count:3
  }
}
const mutations={
  increment(state){
    state.count++
  },
  decrement(state){
    state.count--
  }
}
const actions = {
  incrementAsync(context){
    new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
      },1000)
    }).then(()=>{
      context.commit("increment")
    })
  },
  decrementAsync({commit}){
    new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
      },1000)
    }).then(()=>{
      commit("decrement")
    })
  }
}
const getters={
  countSquare(state){
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