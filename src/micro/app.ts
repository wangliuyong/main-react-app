export const apps = [
  {
    name: "sub-vue-app",
    entry: "//localhost:7100", // 子应用服务地址
    container: "#sub-app",
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
];
