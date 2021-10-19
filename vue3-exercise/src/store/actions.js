
  //异步,模拟网络
  export const actions={
    incrementDelay:(context)=>{
      new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve()
        },1000)
      }).then(()=>{
        //永远改的是同步的所以调用mutations中的commit
        context.commit("increment",3)
      })
    },
    //本来是接收context的但是为了省去多次点的使用它，可以直接传context里的方法得用{}包起来
    decrementDelay:({commit})=>{
      new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve()
        },1000)
      }).then(()=>{
        commit("decrement")
      })
    }
  }