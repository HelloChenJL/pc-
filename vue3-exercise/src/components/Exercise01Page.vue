<!-- sfc 单页面组件 -->
<script setup>
// @ -> vue3-exercise/src/
// import Vue3Grammar from "@/components/exercise/Vue3Grammar.vue";
// import Count00 from "@/components/exercise/Count00.vue";
// import Count01 from "@/components/exercise/Count01.vue";
// import Count02 from "@/components/exercise/Count02.vue";
// import Count03 from "@/components/exercise/Count03.vue";


//当你用es‘6将useRouter,useRoute导进来后，建议马上运行这两个函数，并赋值给两个对象
import {useRouter,useRoute} from "vue-router"
const router = useRouter();
const route = useRoute();
console.log("router",router);
console.log("route",route);


const back = ()=>{
  //如何进行js代码的方式进行路由跳转
  //const router = useRouter(); 不建议在函数里执行
  // router.back();
  router.go(-1)
}
</script>

<template>
<a-button @click="back">返回</a-button>
<hr>
  <count-03 />
  <hr>
  <count-02 />
  <hr>
  <count-01 />
  <hr>
  <count-00 />
  <hr>
  <vue-3-grammar />
</template>

<script>
// export default {
//    mounted(){
//       console.log("3.2中sfc 一个页面可以使用四种标签，且这个和上面那个是并级的")
//    }
// }
</script>
<style >

</style>


