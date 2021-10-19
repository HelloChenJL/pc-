//在vite中叫局部导入
//在webpack中，这种是按需加载，多加了一个插件babel-plugins-xxx
// import {Button,message} from "ant-design-vue";//局部导入
// import "ant-design-vue/dist/antd.css";
// // 按需加载
import Button from 'ant-design-vue/lib/button';
import message from 'ant-design-vue/lib/message';
import "ant-design-vue/dist/antd.css";

import { App } from 'vue';

/*
useAntD functiion de parameter 是main.js中creatApp返回的对象
*/
export const useAntd=(app:App<Element>)=>{
  app.use(Button)
  app.provide("$message",message)//第一种对应inject
  app.config.globalProperties.$message = message;//第二种对应getCurrentInstance
}
