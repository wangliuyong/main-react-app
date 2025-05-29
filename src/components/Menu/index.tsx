import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";
import { menuList } from "../../mock/menu";

type MenuItemType = {
  key: string;
  title: string;
  path?: string;
  icon?: React.ReactNode;
  children?: MenuItemType[];
  props?: MenuItemType;
  parentKey: string;
};

function findMenuByPath(
  menuList: MenuItemType[],
  targetPath: string
): MenuItemType | undefined {
  for (const menu of menuList) {
    // 匹配当前节点
    if (menu.path === targetPath) return menu;

    // 递归搜索子节点
    if (menu.children?.length) {
      const found = findMenuByPath(menu.children, targetPath);
      if (found) return found;
    }
  }
  return undefined;
}

const App: React.FC = () => {
  const navigate = useNavigate();

  // 受控模式）
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const [items, setItems] = useState<MenuItemType[]>([]);

  const getDefaultSelectedKeys = (menus: MenuItemType[]) => {
    if (menus.length) {
      const find = findMenuByPath(menus, window.location.pathname);
      if (find) {
        setOpenKeys([find.parentKey]);
        setSelectedKeys([find.key]);
      }
    }
  };

  useEffect(() => {
    getDefaultSelectedKeys(items);
  }, [items]);

  useEffect(() => {
    console.log("菜单初始化");
    setItems(
      menuList.map((item) => ({
        ...item,
        title: item.label,
        children: item.children?.map((child) => ({
          ...child,
          title: child.label,
        })),
      }))
    );
  }, []);

  const handleClickMenu: MenuProps["onClick"] = (info) => {
    // Try to find the clicked menu item in the items array by key
    const findMenu = (
      menus: MenuItemType[],
      key: string
    ): MenuItemType | undefined => {
      for (const menu of menus) {
        if (menu.key === key) return menu;
        if (menu.children) {
          const found = findMenu(menu.children, key);
          if (found) return found;
        }
      }
      return undefined;
    };
    const menuItem = findMenu(items, info.key as string);
    navigate(menuItem?.path || "/");
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onSelect={({ key }) => setSelectedKeys([key])}
      onOpenChange={(keys: string[]) => setOpenKeys(keys)}
      items={items}
      onClick={handleClickMenu}
    />
  );
};

export default App;
