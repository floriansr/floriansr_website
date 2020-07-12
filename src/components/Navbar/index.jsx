import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';

import { Menu } from 'antd';
import {
  MailOutlined,
  AppstoreOutlined,
  HomeOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import './styles.scss';

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <div>
        <Menu
          mode="horizontal"
          theme="dark"
          className={location.pathname === '/' && 'homeNavbar'}
        >
          <Menu.Item icon={<HomeOutlined />}>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </Menu.Item>

          <Menu.Item icon={<SettingOutlined />}>
            <NavLink
              className="importantLinkText"
              to="/projects"
              activeClassName="active"
            >
              Projects
            </NavLink>
          </Menu.Item>
          <Menu.Item disabled icon={<AppstoreOutlined />}>
            About
          </Menu.Item>
          <Menu.Item disabled icon={<MailOutlined />}>
            Contact
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};
export default Navbar;
