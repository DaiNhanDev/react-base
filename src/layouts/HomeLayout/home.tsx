import React, { useEffect, useMemo, useState } from 'react';
import { useAuctions } from 'slices/auctions';

import type { MenuProps } from 'antd';
import { Layout, Menu, Spin } from 'antd';
import { useLoading } from 'slices/loading';

const { Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
interface IProps {
  children: JSX.Element[];
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const HomeLayout: React.FC<IProps> = ({ children }) => {
  const { loading } = useLoading();
  const [current, setCurrent] = useState<string>('');
  const { getCategories, getProducts, categories } = useAuctions();
  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (current) {
      getProducts(current);
    }
  }, [current]);
  console.log('====>loading: ', loading);
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const items = useMemo(
    () => categories.map((item) => getItem(item.text, item.code)),
    [categories],
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
      // collapsible
      // collapsed={collapsed}
      // onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          onClick={onClick}
          selectedKeys={[current]}
        />
      </Sider>
      <Layout>
        <Content>
          <Spin spinning={loading} size="large">
            {children}
          </Spin>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default HomeLayout;
