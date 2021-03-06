import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="Movie">
        <a href="/">Movie</a>
      </Menu.Item>
      <Menu.Item key="Tv">
        <a href="/tv">TV</a>
      </Menu.Item>
      <Menu.Item key="Calender">
        <a href="/calender">Calender</a>
      </Menu.Item>
      <Menu.Item key="Map">
        <a href="/map">Map</a>
      </Menu.Item>
    </Menu>
  )
}

export default LeftMenu