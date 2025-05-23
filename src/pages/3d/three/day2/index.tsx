import "./index.scss";
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function App() {
  const renderer = new THREE.WebGLRenderer();
  const initThree = () => {
    const domContainer = document.getElementById("three-container");
    if (domContainer) {
      // 创建场景
      const scene = new THREE.Scene();

      // 创建照相机
      const camera = new THREE.PerspectiveCamera(
        45,
        domContainer.clientWidth / domContainer.clientHeight,
        1,
        3000
      );

      const initCamera = () => {
        // 设置摄像机位置
        camera.position.set(32, 32, 32);
        camera.lookAt(0, 0, 0);
      };

      // 光源
      function initLight() {
        // 点光源
        const point = new THREE.DirectionalLight(0xffffff);
        point.position.set(80, 100, 80);
        scene.add(point);

        // 环境光
        const light = new THREE.AmbientLight(0xffffff, 0.1);
        light.position.set(0, 0, 0);
        scene.add(light);
      }

      // 生成网格并添加到场景中
      function initMesh() {
        // 立方体几何体
        const geometry = new THREE.BoxGeometry(16, 16, 16);
        // 标准材质
        const material = new THREE.MeshStandardMaterial({
          color: 0xff0000,
        });
        // 网格
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(0, 0, 0);
        scene.add(mesh);
      }

      // 坐标系
      const initAxios = () => {
        // 添加坐标系
        const axes = new THREE.AxesHelper(200);
        scene.add(axes);
      };

      initMesh();
      initLight();
      initCamera();
      initAxios();

      const render = () => {
        renderer.render(scene, camera);
      };

      const controls = new OrbitControls(camera, renderer.domElement); //创建控件对象
      controls.addEventListener("change", render);

      renderer.setSize(domContainer.clientWidth, domContainer.clientHeight);
      renderer.render(scene, camera);

      domContainer.appendChild(renderer.domElement);
    }
  };
  useEffect(() => {
    const domContainer = document.getElementById("three-container");
    initThree();
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
