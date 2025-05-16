import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@ant-design/v5-patch-for-react-19";

import "./index.css";
import App from "./App.tsx";

import { registerMicroApps, start } from "qiankun";
import { apps } from "./micro/app.ts";

// 注册子应用
registerMicroApps(apps, {
  // beforeLoad: (app) => console.log("Loading", app.name),
  // afterMount: (app) => console.log("Mounted", app.name),
});

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
