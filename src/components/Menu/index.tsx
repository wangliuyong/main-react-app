import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { menuList } from "../../mock/menu";

type MenuItemType = {
  key: string;
  title: string;
  path?: string;
  icon?: React.ReactNode;
  children?: MenuItemType[];
  props?: MenuItemType;
};

const App: React.FC = () => {
  const navigate = useNavigate();

  // 受控模式）
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const [items, setItems] = useState<MenuItemType[]>([]);

  const getDefaultSelectedKeys = (menus: MenuItemType[]) => {
    if (menus.length) {
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
    setItems(menuList.map((item) => ({ ...item, title: item.label })));
  }, []);

  const handleClickMenu = ({ item }: { item: MenuItemType }) => {
    navigate(item.props?.path || "/");
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
