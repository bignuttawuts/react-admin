import { TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const { Header, Content, Footer } = Layout

const items: MenuProps['items'] = [
  { icon: TeamOutlined, label: 'Contact', url: '/contacts' },
  { icon: UserOutlined, label: 'User', url: '/users' },
].map((item, index) => ({
  key: String(index + 1),
  icon: React.createElement(item.icon),
  label: <Link to={item.url}>{item.label}</Link>,
}));

export default function Root() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return <Layout hasSider>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header style={{ padding: 0, background: colorBgContainer }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  </Layout>
}