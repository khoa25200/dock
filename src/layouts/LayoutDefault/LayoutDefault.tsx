import { PropsWithChildren } from 'react';
import './LayoutDefault.less';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';

function LayoutDefault({ children }: PropsWithChildren) {
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={true}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            }
          ]}
        />
      </Sider>
      <Layout>
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutDefault;