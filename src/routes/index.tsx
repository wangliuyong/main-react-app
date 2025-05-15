import { lazy } from "react";
// import { Navigate } from "react-router-dom";
// 微应用容器不能使用懒加载，否则会报错

import SubAppContainer from "../pages/SubAppContainer";

const Login = lazy(() => import("../pages/Login"));

const routes = [
  {
    path: "/login",
    element: <Login />,
    meta: { title: "登录页", requiresAuth: false },
  },
  {
    path: "/sub-vue-app",
    element: <SubAppContainer />,
  },
];

export default routes;
