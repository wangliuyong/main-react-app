import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

export const menuList = [
  // {
  //   key: "1",
  //   parentKey: "0",
  //   icon: <DesktopOutlined />,
  //   label: "登录页",
  //   path: "/login",
  // },
  {
    key: "2",
    parentKey: "0",
    icon: <DesktopOutlined />,
    label: "首页",
    path: "/home",
  },
  {
    key: "3",
    parentKey: "0",
    icon: <PieChartOutlined />,
    label: "三维可视化",
    children: [
      {
        key: "3.1",
        parentKey: "3",
        icon: <PieChartOutlined />,
        label: "three.js",
        path: "/3d/three",
      },
      {
        key: "3.2",
        parentKey: "3",
        icon: <PieChartOutlined />,
        label: "工厂案列",
        path: "/3d/factory",
      },
    ],
  },
  {
    key: "4",
    parentKey: "0",
    icon: <ContainerOutlined />,
    label: "微应用",
    children: [
      {
        key: "4.1",
        parentKey: "4",
        icon: <ContainerOutlined />,
        label: "REACT列表页面",
        path: "/micro/sub-react-app/list",
      },
      {
        key: "4.2",
        parentKey: "4",
        icon: <ContainerOutlined />,
        label: "REACT核心案例",
        path: "/micro/sub-react-app/home",
      },
      {
        key: "4.3",
        parentKey: "4",
        icon: <ContainerOutlined />,
        label: "VUE3",
        path: "/micro/sub-vue-app/home",
      },
      {
        key: "4.4",
        parentKey: "4",
        icon: <ContainerOutlined />,
        label: "TS",
        path: "/micro/sub-react-app/ts",
      },
    ],
  },
];
