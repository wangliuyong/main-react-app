import "./index.scss";
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import model from "./model.ts";

export default function App() {
  const renderer = new THREE.WebGLRenderer();

  //解决加载gltf格式模型颜色偏差问题
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const initThree = () => {
    const domContainer = document.getElementById("three-container");
    if (domContainer) {
      // 创建场景
      const scene = new THREE.Scene();
      scene.add(model);

      // 创建照相机
      const camera = new THREE.PerspectiveCamera(
        30,
        domContainer.clientWidth / domContainer.clientHeight,
        0.1,
        9000
      );
      // 设置摄像机位置
      camera.position.set(200, 200, 200);

      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();

      // 光源
      function point() {
        const point = new THREE.DirectionalLight(0xffffff);
        point.position.set(300, 300, 300);
        scene.add(point);

        // 环境光
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
        ambientLight.position.set(0, 0, 0);
        scene.add(ambientLight);
      }

      point();

      // 添加坐标系
      const axes = new THREE.AxesHelper(2000);
      scene.add(axes);

      // 渲染循环
      function render() {
        renderer.render(scene, camera);
        requestAnimationFrame(render);
      }
      render();

      const controls = new OrbitControls(camera, renderer.domElement); //创建控件对象
      controls.addEventListener("change", render);

      renderer.setSize(domContainer.clientWidth, domContainer.clientHeight);
      renderer.render(scene, camera);

      domContainer.appendChild(renderer.domElement);
    }

    return { domContainer };
  };
  useEffect(() => {
    const { domContainer } = initThree();
    return () => {
      // 组件卸载时清理
      domContainer?.removeChild(renderer.domElement);
    };
  }, []);

  window.addEventListener("resize", () => {
    initThree();
  });

  return (
    <>
      <div id="three-container"></div>
    </>
  );
}
