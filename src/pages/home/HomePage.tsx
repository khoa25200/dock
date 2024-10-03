import { Layout, Menu } from 'antd';
import LayoutLandingPage from '../../layouts/LayoutLandingPage/LayoutLandingPage';
import './HomePage.less';
import { Content, Header } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';
import FooterLayout from '../../layouts/Footer/Foooter';
import IntroduceLayout from '../../layouts/Introduce/Intruduce';

function HomePage() {
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    navigate(e.key); // Điều hướng tới đường dẫn dựa vào key của menu item
  };
  return (
    <LayoutLandingPage>
      <Layout style={{ backgroundColor: 'transparent' }}>
        <Header className="header">
          <div className="logo" />
          <Menu
            mode="horizontal"
            onClick={handleClick}
            style={{ backgroundColor: 'transparent', gap: '20px' }}>
            <Menu.Item className="menu-item" key="/" style={{ color: 'white' }}>
              Home
            </Menu.Item>
            <Menu.Item className="menu-item" key="/features" style={{ color: 'white' }}>
              Features
            </Menu.Item>
            <Menu.Item className="menu-item" key="/about" style={{ color: 'white' }}>
              About Us
            </Menu.Item>
            <Menu.Item className="menu-item" key="/download" style={{ color: 'white' }}>
              Download
            </Menu.Item>
            <Menu.Item className="menu-item" key="/login">
              <button className="btn btn_login">Login</button>
            </Menu.Item>
            <Menu.Item className="menu-item" key="/try">
              <button className="btn btn_try">Try it Free</button>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
      <Content>
        <section className="hero-section">
          <div className="section-1-left">
            <h1>Welcome to our App</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>
      </Content>
      <IntroduceLayout />
      <FooterLayout />
    </LayoutLandingPage>
  );
}

export default HomePage;
