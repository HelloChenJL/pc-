<script setup>
import {useStore} from "vuex"
const store =useStore();
const add = function(){
  store.commit("count03/increment")
}
const sub=()=>{
  store.commit("count03/decrement")
}
const addAsync=()=>{
  store.dispatch("count03/incrementAsync")
}
const subAsync = ()=>{
  store.dispatch("count03/decrementAsync")
}
</script>
<template>
  <!-- 访问全局空间的state：$store.state.你定义的变量 -->
  <h1>全局状态中的计步器:{{$store.state.count}}</h1>
  <h1>全局状态中modules的03计步器:{{$store.state.count03.count}}</h1>
  <h4>module中的03平方计算属性:{{$store.getters["count03/countSquare"]}}</h4>
  <a-button @click="add">+</a-button>
  <a-button @click="sub">-</a-button>
  <a-button @click="addAsync">异步+</a-button>
  <a-button @click="subAsync">异步-</a-button>
</template>