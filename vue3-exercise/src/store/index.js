//全局状态命名
import {createStore} from "vuex"
import {actions} from "@/store/actions"
import {getters} from "@/store/getters"
import { mutations } from "@/store/mutations"
//module空间命名
import count02 from "@/store/modules/count02"
import count03 from "@/store/modules/count03"
export const store = createStore({
  modules:{
    count02,
    "count03":count03
  },
  state:function(){
    return{
      count:0
    }
  },
  //同步
  mutations,
  //异步
  actions,
  
  //计算属性
  getters
})