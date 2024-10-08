import { Link } from 'react-router-dom';
import './Header.less';
import './Header.media.less';
import { Layout, Menu } from 'antd';
import logo from 'images/logo-white.png';
import useViewport from '../../libs/hooks/useViewport';
import { CaretDownOutlined } from '@ant-design/icons';

const { Header } = Layout;
function HeaderComponent({ isScroll }: { isScroll: boolean }) {

  const { vw } = useViewport();
  const isTablet = vw < 1024;
  const isMobile = vw < 768;

  const itemForDesktop = [
    {
      label: (
        <Link to="/login" className="btn-sign--in">
          Login
        </Link>
      ),
      key: 'login',
    },
    {
      label: (
        <Link to="/signup" className="btn-sign--up">
          Try it Free
        </Link>
      ),
      key: 'try',
    },
  ];
  const itemForTablet = [
    {
      key: 'sub1',
      label: 'More',
      icon: (
        <CaretDownOutlined
          style={{ color: `${isScroll ? 'black' : 'white'}` }}
        />
      ),
      children: [
        {
          label: (
            <Link to="/login" className="btn-sign--in">
              Login
            </Link>
          ),
          key: 'login',
        },
        {
          label: (
            <Link to="/signup" className="btn-sign--up">
              Try it Free
            </Link>
          ),
          key: 'try',
        },
      ],
    },
  ];

  const items = [
    {
      label: <Link to="/">Home</Link>,
      key: 'home',
    },
    {
      label: <Link to="/home">Features</Link>,
      key: 'features',
    },
    {
      label: <Link to="/about">About Us</Link>,
      key: 'about',
    },
    {
      label: <Link to="/download">Download</Link>,
      key: 'download',
    },
    ...(isTablet ? itemForTablet : itemForDesktop),
  ];
  const allMenuItems = [
    {
      key: 'sub1',
      label: 'More',
      icon: (
        <CaretDownOutlined
          style={{ color: `${isScroll ? 'black' : 'white'}` }}
        />
      ),
      children: [
        {
          label: <Link to="/">Home</Link>,
          key: 'home',
        },
        {
          label: <Link to="/home">Features</Link>,
          key: 'features',
        },
        {
          label: <Link to="/about">About Us</Link>,
          key: 'about',
        },
        {
          label: <Link to="/download">Download</Link>,
          key: 'download',
        },
        {
          label: <Link to="/login">Login</Link>,
          key: 'login',
        },
        {
          label: <Link to="/try">Try it Free</Link>,
          key: 'try',
        },
      ],
    },
  ];
  return (
    <Header className={`header ${isScroll ? 'header-scroll' : ''}`}>
      <div className="header-content">
        <img className="logo" src={logo} alt="Logo" />
        {isMobile ? (
          <Menu className="header-menu" items={allMenuItems}></Menu>
        ) : (
          <ul className="navbar-list">
            {items.map((item, index) => (
              <li key={index}>{item.label}</li>
            ))}
          </ul>
          // <Menu
          //   mode="horizontal"
          //   className="menu"
          //   onClick={handleClick}
          //   style={{
          //     backgroundColor: 'transparent',
          //     borderBottom: 'none',
          //   }}
          //   items={items}
          // ></Menu>
        )}
      </div>
    </Header>
  );
}

export default HeaderComponent;
