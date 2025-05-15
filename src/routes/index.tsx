import { lazy } from "react";
import SubAppContainer from "../pages/SubAppContainer";
import Layout from "../components/Layout";

const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));
const Three = lazy(() => import("../pages/3d/three"));

const routes = [
  {
    path: "/sub-vue-app",
    element: <SubAppContainer />,
  },
  {
    path: "/login",
    element: <Login />,
    meta: { title: "登录页", requiresAuth: false },
  },
  {
    path: "/home",
    element: <Home />,
    meta: { title: "首页", requiresAuth: false },
  },

  {
    path: "/3d",
    element: <Layout />,
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
