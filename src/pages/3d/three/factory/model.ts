// 引入Three.js
import * as THREE from "three";
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader(); //创建一个GLTF加载器

const model = new THREE.Group(); //声明一个组对象，用来添加加载成功的三维场景

const modelPath = new URL("./model/工厂.gltf", import.meta.url).href;

loader.load(modelPath, function (gltf) {
  //gltf加载成功后返回一个对象
  // console.log('控制台查看gltf对象结构', gltf);
  gltf.scene.traverse((item: any) => {
    if (item.isMesh) {
      console.log(`item.name`, item.name);
    }
  });
  console.log("场景3D模型数据", gltf.scene);
  model.add(gltf.scene); //三维场景添加到model组对象中
});

export default model;
