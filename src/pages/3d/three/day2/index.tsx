import "./index.scss";
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// 性能监视器
import Stats from "three/examples/jsm/libs/stats.module.js";

const stats = new Stats();

export default function App() {
  const renderer = new THREE.WebGLRenderer();

  const initThree = () => {
    const domContainer = document.getElementById("three-container");
    const statsContainer = document.getElementById("stats-container");
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

      // 生成网格并添加到场景中
      // 立方体几何体
      const geometry = new THREE.BoxGeometry(16, 16, 16);
      // 标准材质
      const material = new THREE.MeshLambertMaterial({
        color: 0xff0000,
      });
      // 网格
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(10, 0, 0);
      scene.add(mesh);

      const render = () => {
        stats.update();
        renderer.render(scene, camera);
      };

      const initCamera = () => {
        // 设置摄像机位置
        camera.position.set(-32, 32, 32);
        camera.lookAt(0, 0, 0);
      };

      // 光源 (点光源，平行光，环境光，聚光灯光源),默认都指向坐标原点
      function initLight() {
        // 点光源
        const point = new THREE.PointLight(0xffffff);
        point.position.set(20, 20, 20);
        point.lookAt(-32, 32, 32);
        scene.add(point);

        const pointHelper = new THREE.PointLightHelper(point, 1);
        scene.add(pointHelper);

        // 平行光;
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(30, 30, 30);
        scene.add(directionalLight);

        // 平行光辅助对象
        const directionalLightHelper = new THREE.DirectionalLightHelper(
          directionalLight,
          2
        );
        scene.add(directionalLightHelper);

        // 环境光
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
        ambientLight.position.set(0, 0, 0);
        scene.add(ambientLight);
      }

      // 坐标系
      const initAxios = () => {
        // 添加坐标系
        const axes = new THREE.AxesHelper(200);
        scene.add(axes);
      };

      // 相机轨道控制
      const initCameraControl = () => {
        const controls = new OrbitControls(camera, renderer.domElement); //创建控件对象
        controls.addEventListener("change", render);
      };

      // 旋转动画
      const initRoate = () => {
        // 旋转
        const animate = () => {
          mesh.rotateY(0.1);
          render();
          requestAnimationFrame(animate);
        };
        animate();
      };

      initLight();
      initCamera();
      initAxios();
      initCameraControl();
      initRoate();

      renderer.setSize(domContainer.clientWidth, domContainer.clientHeight);
      renderer.render(scene, camera);

      statsContainer?.appendChild(stats.domElement);
      domContainer.appendChild(renderer.domElement);
    }
  };

  useEffect(() => {
    initThree();
    return () => {
      const domContainer = document.getElementById("three-container");
      // 组件卸载时清理
      domContainer?.removeChild(renderer.domElement);
    };
  }, []);

  window.addEventListener("resize", () => {
    const domContainer = document.getElementById("three-container");
    domContainer?.removeChild(renderer.domElement);
    initThree();
  });

  return (
    <>
      <div id="three-container"></div>
      <div id="stats-container"></div>
    </>
  );
}
