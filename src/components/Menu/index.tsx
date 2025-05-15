import React, { useState } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { menuList } from "../../mock/menu";

const App: React.FC = () => {
  const navigate = useNavigate();

  const handleClickMenu = ({ item }) => {
    navigate(item.props.path);
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["3"]}
      items={menuList}
      onClick={handleClickMenu}
    />
  );
};

export default App;
