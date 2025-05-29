import { lazy } from "react";
// 微应用容器不能使用懒加载
import SubAppContainer from "../pages/SubAppContainer";
import Layout from "../components/Layout";

import { apps } from "../micro/app.ts";
import { Navigate } from "react-router-dom";

const Login = lazy(() => import("../pages/login"));
const Home = lazy(() => import("../pages/home"));
const Three = lazy(() => import("../pages/3d/three/day1/index.tsx"));
const Three2 = lazy(() => import("../pages/3d/three/day2/index.tsx"));
const Factory = lazy(() => import("../pages/3d/three/factory/index.tsx"));

const routes = [
  {
    path: "/micro",
    element: <Layout children={undefined}></Layout>,
    children: apps.map((item) => {
      return {
        path: item.activeRule,
        element: <SubAppContainer />,
        meta: { title: item.name, requiresAuth: true },
        children: [
          {
            path: "*",
          },
        ],
      };
    }),
  },

  {
    path: "/login",
    element: <Login />,
    meta: { title: "登录页", requiresAuth: false },
  },
  {
    path: "/home",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    meta: { title: "首页", requiresAuth: false },
  },

  {
    path: "/3d",
    element: <Layout children={undefined} />,
    children: [
      {
        path: "three",
        element: <Three />,
        meta: { title: "three.js", requiresAuth: false },
      },
      {
        path: "three2",
        element: <Three2 />,
        meta: { title: "three.js", requiresAuth: false },
      },
      {
        path: "factory",
        element: <Factory />,
        meta: { title: "Factory", requiresAuth: false },
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/home" replace />,
  },
];

export default routes;
