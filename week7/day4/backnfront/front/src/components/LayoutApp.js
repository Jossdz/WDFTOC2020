import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom'

const { Header, Content, Footer } = Layout;

export default function LayoutApp({ children }) {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
            <Link to='/'>
              Home
          </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to='/project/create'>
              Create project
          </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ height: 'calc(100vh - 64px - 70px)' }}>
        <div className="site-layout-content">{
          children
        }</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}
