import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@ant-design/v5-patch-for-react-19";

import "./index.css";
import App from "./App.tsx";

import { registerMicroApps, start } from "qiankun";

// 注册子应用
registerMicroApps(
  [
    {
      name: "sub-vue-app",
      entry: "//localhost:7100", // 子应用服务地址
      container: "#sub-vue-app",
      activeRule: "/sub-vue-app", // 激活路径
      props: {
        baseRouter: "/sub-vue-app",
        mainAppData: "来自主应用的数据",
      },
    },
    {
      name: "sub-react-app",
      entry: "//localhost:7200", // 子应用服务地址
      container: "#sub-react-app",
      activeRule: "/sub-react-app", // 激活路径
      props: {
        baseRouter: "/sub-react-app",
        mainAppData: "来自主应用的数据",
      },
    },
  ],
  {
    // beforeLoad: (app) => console.log("Loading", app.name),
    // afterMount: (app) => console.log("Mounted", app.name),
  }
);

start({
  sandbox: {
    experimentalStyleIsolation: true, // 样式隔离
    strictStyleIsolation: true, // Shadow DOM隔离
  },
  prefetch: false,
});

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
