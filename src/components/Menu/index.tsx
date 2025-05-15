import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { menuList } from "../../mock/menu";

const App: React.FC = () => {
  const navigate = useNavigate();

  // 修改后（受控模式）
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const [items, setItems] = useState<any[]>([]);

  const getDefaultSelectedKeys = (menus: any[]) => {
    if (menus.length) {
      console.log(`menus`, menus);
      const find = menus.find((item) => item.path === location.pathname);
      if (find) {
        setSelectedKeys([find.key]);
      }
    }
  };

  useEffect(() => {
    getDefaultSelectedKeys(items);
  }, [items]);

  useEffect(() => {
    setItems(menuList);
  }, []);

  const handleClickMenu = ({ item }) => {
    navigate(item.props.path);
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={selectedKeys}
      onSelect={({ key }) => setSelectedKeys([key])}
      items={items}
      onClick={handleClickMenu}
    />
  );
};

export default App;
