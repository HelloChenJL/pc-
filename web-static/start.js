// 通过express这个框架把写的pages文件夹静态发布出去
//通过commonjs的语法把express导入进来
const express = require("express")

const app = express()
//express 框架里 use 加载中间件（可以是第三方中间件，也可以是框架自己）
app.use("/",express.static("./pages"))

app.use("/vue3",express.static("./dist"))
app.listen(3000,()=>console.log("listening port 3000 ..."))