import { lazy } from "react";
import SubAppContainer from "../pages/SubAppContainer";

const Login = lazy(() => import("../pages/Login"));
const Home = lazy(() => import("../pages/Home"));

const routes = [
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
    path: "/sub-vue-app",
    element: <SubAppContainer />,
  },
];

export default routes;
