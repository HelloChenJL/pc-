<script setup>
  // import {useStore} from "vuex"
  // const store = useStore()
  //访问全局命名空间的state：store.state.count
  console.log("全局命名空间变量：", store.state.count)
  //访问局部命名空间的 state: store.state.modules定义的名字(modules文件名).你定义的变量名
  console.log("局部命名空间的变量：",store.state.count02.count)
  console.log("局部命名空间的变量：",store.state.count03.count)

const add = ()=>{
  //访问全局命名空间的mutation：store.commit("你定义的方法名")
  //访问局部命名空间的mutation：store.commit("文件名/你定义的方法名")
  store.commit("count02/increment")
}
const sub = ()=>{
  store.commit("count02/decrement")
}
const addAsync = ()=>{
  store.dispatch("count02/incrementAsync")
}
const subAsync = ()=>{
  store.dispatch("count02/decrementAsync")
}

</script>
<template>
<!-- //访问全局命名空间的state：store.state.count -->
  <h1>全局状态全局命名中的计步器:{{$store.state.count}}</h1>
  <!-- //访问局部命名空间的 state: store.state.modules定义的名字(modules文件名).你定义的变量名 -->
  <h1>全局状态中modules的02计步器:{{$store.state.count02.count}}</h1>
  <h4>module中的02平方计算属性:{{$store.getters["count02/countSquare"]}}</h4>
  <a-button @click="add">+</a-button>
  <a-button @click="sub">-</a-button>
  <a-button @click="addAsync">异步+</a-button>
  <a-button @click="subAsync">异步-</a-button>
</template>