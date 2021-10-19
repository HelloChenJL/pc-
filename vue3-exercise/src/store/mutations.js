export const mutations = {
  //给子组件传方法，同步的
    increment:function(state,p){
      state.count += p
      // state.count++
    },
    decrement:function(state,){
      // state.count -= p
      state.count--
    }
}