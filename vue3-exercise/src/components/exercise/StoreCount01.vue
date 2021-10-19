<script setup>
   import {useStore} from "vuex"
   const store = useStore()
  //mutations对应的是commit
  //同步加
   const add = ()=>{
     console.log("+")
    //  console.log(store.state.count)
    //  store.state.count = store.state.count +1//不能这么写，虽然控制台没有抛错，因为全局状态追踪会产生问题，用Chrome  vue插件观看更直观
    store.commit("increment",2)
   
    
   }
   //同步减
   const sub = ()=>{
     console.log("-")
    //  console.log(store.state.count)
    //  store.state.count = store.state.count +1//不能这么写，虽然控制台没有抛错，因为全局状态追踪会产生问题，用Chrome  vue插件观看更直观
    store.commit("decrement")
    
   }
  //  action对应dispatch
   const addAsync = ()=>{
     //隔一秒加
     store.dispatch("incrementDelay")
   }
   const subAsync = ()=>{
     store.dispatch("decrementDelay")
   }
</script>
<template>
  <!-- //在模板里可已使用store里定义的变量 -->
  <h1>全局状态中的计步器:{{$store.state.count}}</h1>
  <h1>计步器平方:{{$store.getters.countSquare}}</h1>
  <a-button @click="add">+</a-button>
  <a-button @click="sub">-</a-button>
  <a-button @click="addAsync">异步+</a-button>
  <a-button @click="subAsync">异步-</a-button>
</template>