//想用ts写three安装npm i-D @types/xxx,npm i-D @types/three
import * as Three from "three";
import { Color } from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"//起到鼠标控制页面的效果
import "./assets/imgs_room/left.jfif"
import "./assets/imgs_room/right.jfif"
import "./assets/imgs_room/top.jfif"
import "./assets/imgs_room/bottom.jfif"
import "./assets/imgs_room/front.jfif"
import "./assets/imgs_room/behind.jfif"

/*
three.js 就是将一些难得东西分装成一个API封装了一个webgl

*/
//第一步创建一个renderer渲染器
const renderer = new Three.WebGL1Renderer();
renderer.setSize(window.innerWidth,window.innerHeight)
//将熏染页面转化成一个标签放在现在body里
document.body.appendChild(renderer.domElement)

//创建一个场景
const scene = new Three.Scene();
//创建一个摄像头
const camera  = new Three.PerspectiveCamera(90,window.innerWidth/window.innerHeight,0.1,100)
camera.position.set(0,0,5)
//控制距离
new OrbitControls (camera,renderer.domElement)

//创建一个立方体
const boxGeo = new Three.BoxGeometry(1,1,1);
//给定盒子每个页面的颜色材质
const materials = []
const texture_left =  new Three.TextureLoader().load("./assets/imgs/left.jfif")
const texture_right =  new Three.TextureLoader().load("./assets/imgs/right.jfif")
const texture_top =  new Three.TextureLoader().load("./assets/imgs/top.jfif")
const texture_behind =  new Three.TextureLoader().load("./assets/imgs/bottom.jfif")
const texture_bottom =  new Three.TextureLoader().load("./assets/imgs/front.jfif")
const texture_front =  new Three.TextureLoader().load("./assets/imgs/behind.jfif")
materials.push(new Three.MeshBasicMaterial({map:texture_left,side:Three.BackSide}))
materials.push(new Three.MeshBasicMaterial({map:texture_right,side:Three.BackSide}))
materials.push(new Three.MeshBasicMaterial({map:texture_top,side:Three.BackSide}))
materials.push(new Three.MeshBasicMaterial({map:texture_behind,side:Three.BackSide}))
materials.push(new Three.MeshBasicMaterial({map:texture_bottom,side:Three.BackSide}))
materials.push(new Three.MeshBasicMaterial({map:texture_front,side:Three.BackSide}))
// materials.push(new Three.MeshBasicMaterial({color:0xff0000}))
// materials.push(new Three.MeshBasicMaterial({color:0x00ff00}))
// materials.push(new Three.MeshBasicMaterial({color:0x0000ff}))
// materials.push(new Three.MeshBasicMaterial({color:0xffff00}))
// materials.push(new Three.MeshBasicMaterial({color:0xff00ff}))
// materials.push(new Three.MeshBasicMaterial({color:0x00ffff}))
const box = new Three.Mesh(boxGeo,materials);
box.position.set(0,0,0);
scene.add(box)//把立方体加入到场景去
camera.position.set(0,0,0.1)//让一进去页面就进入内部不用拉鼠标进入
//让页面显示
const render = ()=>{
  renderer.render(scene,camera)//渲染器渲染场景
  requestAnimationFrame(render)//递归
}
render()