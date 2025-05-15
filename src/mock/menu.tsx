import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

export const menuList = [
  { key: "2", icon: <DesktopOutlined />, label: "登录页", path: "/login" },
  { key: "1", icon: <PieChartOutlined />, label: "首页", path: "/home" },
  {
    key: "4",
    icon: <PieChartOutlined />,
    label: "三维可视化",
    path: "/3d/three",
  },
  {
    key: "3",
    icon: <ContainerOutlined />,
    label: "微应用VUE3",
    path: "/sub-vue-app",
  },
];
