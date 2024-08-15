import React from 'react';
import { Layout, Menu } from 'antd';
import { LOGO } from 'assets';
import { Clickable } from 'components';

interface IProps {
  children: JSX.Element[];
}

const { Header, Content, Footer } = Layout;
const items = new Array(6).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav_13 ${index + 1}`,
}));
const HomeLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Layout>
      {/* <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          background: 'white',
        }}
      >
        <Clickable>
          <img src={LOGO} alt="logo" style={{ height: 48, borderRadius: 12 }} />
        </Clickable>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header> */}
      <Content>{children}</Content>
      {/* <Footer style={{ textAlign: 'center', background: 'green' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer> */}
    </Layout>
  );
};

export default HomeLayout;
