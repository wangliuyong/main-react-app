import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

export const menuList = [
  {
    key: "1",
    parentKey: "0",
    icon: <DesktopOutlined />,
    label: "登录页",
    path: "/login",
  },
  {
    key: "2",
    parentKey: "0",
    icon: <PieChartOutlined />,
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
        label: "微应用REACT",
        path: "/micro/sub-react-app/home",
      },
      {
        key: "4.2",
        parentKey: "4",
        icon: <ContainerOutlined />,
        label: "微应用VUE3",
        path: "/micro/sub-vue-app/home",
      },
    ],
  },
];
