const {resolve,join} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry:"./src/mod.ts",
  // 打包
  output:{
    filename:"built.js",
    path:resolve(__dirname,"build")
  },
  //生产者模式还是开发者模式
  mode:"development",
  resolve:{
    extensions:[".tsx",".ts",".js"] //打包数组中的后缀名文件
  },
  //loder
  // npm i -D webpack-dev-server
  module:{
    rules:[
      {
        //打包ts文件规则
        test:/\.ts?$/,
        //npm i -D ts-loader 
        use:"ts-loader",//注：如果loader只有一个而且还有options的话key写成loader，其他写成use
        // 排除node_modules的文件
        exclude:"/node_modules/",
      },
      {
        //配置图片
        test:/\.(jpeg|jpg|png|jfif)$/,
        //npm i -D file-loader url-loader
        loader:"url-loader",
        //超过1byte就单独打包一个文件里，要是超不过就base64的编码显示在js脚本里
        options:{
          limit:1*1024,
          //打包后的名字，一般都是按原来的名字
          name:"[name].[ext]",
          //打包出来的路径
          outputPath:"./assets/imgs"
        }
      }
    ]
  },
  plugins:[
    //npm i -D html-webpack-plugin
    new HtmlWebpackPlugin({
      //打包后的html文件的路径
      template:"./public/index.html"
    })
  ],
  //热部署webpack-dev-server
  devServer:{
    static:{
      directory:join(__dirname,'public')
    },
    compress:true,
    port:3000,
    hot:"only"
  },
}