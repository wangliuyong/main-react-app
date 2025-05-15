import { lazy } from "react";
// 微应用容器不能使用懒加载
import SubAppContainer from "../pages/SubAppContainer";
import Layout from "../components/Layout";

const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const Three = lazy(() => import("../pages/3d/three"));

const routes = [
  {
    path: "/sub-vue-app",
    element: (
      <Layout>
        <SubAppContainer />
      </Layout>
    ),
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
    ],
  },
];

export default routes;
