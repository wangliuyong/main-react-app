import "./index.scss";
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import model from "./model.ts";

export default function App() {
  const renderer = new THREE.WebGLRenderer();

  //解决加载gltf格式模型颜色偏差问题
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  // outputEncoding;renderer.outputEncoding = THREE.sRGBEncoding;

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
      camera.position.set(165, 112, -117);

      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();

      // 光源
      function point() {
        //光源设置
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(400, 200, 300);
        scene.add(directionalLight);
        const ambient = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambient);
      }

      point();

      // 添加坐标系
      const axes = new THREE.AxesHelper(2000);
      scene.add(axes);

      const controls = new OrbitControls(camera, renderer.domElement); //创建控件对象
      controls.addEventListener("change", render);

      renderer.setSize(domContainer.clientWidth, domContainer.clientHeight);
      renderer.render(scene, camera);

      domContainer.appendChild(renderer.domElement);

      // 渲染循环
      function render() {
        renderer.render(scene, camera);

        // console.log(camera.position);
        // console.log(controls.target);

        requestAnimationFrame(render);
      }
      render();

      renderer.domElement.addEventListener("click", function (event) {
        // .offsetY、.offsetX以canvas画布左上角为坐标原点,单位px
        const px = event.offsetX;
        const py = event.offsetY;
        //屏幕坐标px、py转WebGL标准设备坐标x、y
        //width、height表示canvas画布宽高度
        const x = (px / domContainer.clientWidth) * 2 - 1;
        const y = -(py / domContainer.clientHeight) * 2 + 1;
        //创建一个射线投射器`Raycaster`
        const raycaster = new THREE.Raycaster();
        //.setFromCamera()计算射线投射器`Raycaster`的射线属性.ray
        // 形象点说就是在点击位置创建一条射线，用来选中拾取模型对象
        raycaster.setFromCamera(new THREE.Vector2(x, y), camera);
        //.intersectObjects([mesh1, mesh2, mesh3])对参数中的网格模型对象进行射线交叉计算
        // 未选中对象返回空数组[],选中一个对象，数组1个元素，选中多个对象，数组多个元素
        const intersects = raycaster.intersectObjects([model]);
        console.log("射线器返回的对象", intersects);
        // intersects.length大于0说明，说明选中了模型
        if (intersects.length > 0) {
          console.log("交叉点", intersects[0].point);
          console.log("交叉对象", intersects[0].object);
          // 选中模型的第一个模型，设置为红色
          intersects[0].object.material.color.set(0xff0000);
        }
      });

      window.addEventListener("resize", () => {
        renderer.setSize(domContainer.clientWidth, domContainer.clientHeight);
        camera.aspect = domContainer.clientWidth / domContainer.clientHeight;
        camera.updateProjectionMatrix();
      });
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

  //创建一个射线投射器`Raycaster`

  return (
    <>
      <div id="three-container"></div>
    </>
  );
}
