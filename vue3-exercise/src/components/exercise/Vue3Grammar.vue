<template>
  <h1>App 组件</h1>
  <div>1000</div>
  <div>a:{{a}} <input v-model="b">c:<input v-model="c.val"> </div>
  <hr>
  <div>b的平方：{{square}}</div>
</template>
<script>
import { ref,reactive,computed, watch } from 'vue'

export default{
  //vue2
  data(){
    return{
      a:0
    }
  },
  //vue3
  setup() {
    const b = ref("10")
    const c = reactive({
      val:100
    })
    const square = computed(()=>{
      return b.value*b.value
    })
    watch(b,(newVal,prev)=>{
      console.log("b改变了","当前值:"+newVal+"旧值："+prev)
    })
    // watch(()=>Object.assign({},c),(newVal,prev)=>{
    //   console.log("b改变了","当前值:",newVal,"旧值：",prev)
    // })
    //语法糖
    watch(()=>({...c}),(newVal,prev)=>{
      console.log("b改变了","当前值:",newVal,"旧值：",prev)
    })
    return{
      b,
      c,
      square
    }
  },
}
</script>
