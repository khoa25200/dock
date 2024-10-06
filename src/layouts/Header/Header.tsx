import { useNavigate } from 'react-router-dom';
import './Header.less';
import { Layout, Menu, Button } from 'antd';
import logo from 'images/logo-dock.png';

function HeaderComponent() {
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    navigate(e.key);
  };

  return (
    <Layout.Header className="header">
      <div className="header-content">
        <img className="logo" src={logo} alt="Logo" />

        <Menu
          mode="horizontal"
          className="menu"
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
            <Button className="btn btn_login">Login</Button>
          </Menu.Item>
          <Menu.Item className="menu-item" key="/try">
            <Button className="btn btn_try">Try it Free</Button>
          </Menu.Item>
        </Menu>
      </div>
    </Layout.Header>
  );
}

export default HeaderComponent;
