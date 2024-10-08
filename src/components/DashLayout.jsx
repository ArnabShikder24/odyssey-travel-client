const antd = require('antd');
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
const { Layout, Menu, theme } = antd;
const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));
export default function DashLayout({ children }) {
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname);
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
  return (
    <Layout hasSider>
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
        <div className="demo-logo-vertical" />
              {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} /> */}
              <Link href="/dashboard">
        <div style={{ cursor: 'pointer' }} className={`text-white flex gap-5 px-5 py-3 hover:bg-purple-400 ${pathname === "/dashboard" && "bg-purple-400"}`}>
          <ShopOutlined />
          <span>Dashboard</span>
            </div>
            </Link>
        <Link href="/dashboard/AddPackages">
            <div style={{ cursor: 'pointer' }} className={`text-white flex gap-5 px-5 py-3 hover:bg-purple-400 ${pathname === "/dashboard/AddPackages" && "bg-purple-400"}`}>
            <CloudOutlined />
            <span>Add Packages</span>
            </div>
        </Link>
        <Link href="/dashboard/AllPackages">
        <div style={{ cursor: 'pointer' }} className={`text-white flex gap-5 px-5 py-3 hover:bg-purple-400 ${pathname === "/dashboard/AllPackages" && "bg-purple-400"}`}>
          <ShopOutlined />
          <span>All Packages</span>
        </div>
        </Link>
        <Link href="/dashboard/AddHotels">
            <div style={{ cursor: 'pointer' }} className={`text-white flex gap-5 px-5 py-3 hover:bg-purple-400 ${pathname === "/dashboard/AddHotels" && "bg-purple-400"}`}>
            <CloudOutlined />
            <span>Add Hotels</span>
            </div>
        </Link>
        <Link href="/dashboard/AllHotels">
        <div style={{ cursor: 'pointer' }} className={`text-white flex gap-5 px-5 py-3 hover:bg-purple-400 ${pathname === "/dashboard/AllHotels" && "bg-purple-400"}`}>
          <ShopOutlined />
          <span>All Hotels</span>
        </div>
        </Link>
        <Link href="/dashboard/AddFlights">
            <div style={{ cursor: 'pointer' }} className={`text-white flex gap-5 px-5 py-3 hover:bg-purple-400 ${pathname === "/dashboard/AddFlights" && "bg-purple-400"}`}>
            <CloudOutlined />
            <span>Add Flights</span>
            </div>
        </Link>
        <Link href="/dashboard/AllFlights">
        <div style={{ cursor: 'pointer' }} className={`text-white flex gap-5 px-5 py-3 hover:bg-purple-400 ${pathname === "/dashboard/AllFlights" && "bg-purple-400"}`}>
          <ShopOutlined />
          <span>All Flights</span>
        </div>
        </Link>
        <Link href="/dashboard/AddGuides">
            <div style={{ cursor: 'pointer' }} className={`text-white flex gap-5 px-5 py-3 hover:bg-purple-400 ${pathname === "/dashboard/AddGuides" && "bg-purple-400"}`}>
            <CloudOutlined />
            <span>Add Guides</span>
            </div>
        </Link>
        <Link href="/dashboard/AllGuides">
        <div style={{ cursor: 'pointer' }} className={`text-white flex gap-5 px-5 py-3 hover:bg-purple-400 ${pathname === "/dashboard/AllGuides" && "bg-purple-400"}`}>
          <ShopOutlined />
          <span>All Guides</span>
        </div>
        </Link>
        <Link href="/dashboard/AllUser">
        <div style={{ cursor: 'pointer' }} className={`text-white flex gap-5 px-5 py-3 hover:bg-purple-400 ${pathname === "/dashboard/AllUser" && "bg-purple-400"}`}>
          <ShopOutlined />
          <span>All User</span>
          </div>
        </Link>
        <Link href="/dashboard/AllBooking">
        <div style={{ cursor: 'pointer' }} className={`text-white flex gap-5 px-5 py-3 hover:bg-purple-400 ${pathname === "/dashboard/AllBooking" && "bg-purple-400"}`}>
          <ShopOutlined />
          <span>All Booking</span>
          </div>
        </Link>
      </Sider>
      <Layout
        style={{
          marginLeft: 200,
        }}
      >
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Odyssey ©{new Date().getFullYear()} 
        </Footer>
      </Layout>
    </Layout>
  );
}
