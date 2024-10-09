import './Header.less';
import './Header.media.less';
import { Layout, Menu } from 'antd';
import { IMAGES } from '../../assets/images';
import { Link } from 'react-router-dom';
import getMenuItems from './Header.item';

const { Header } = Layout;
function HeaderComponent({ isScroll }: { isScroll: boolean }) {
  return (
    <Header className={`header ${isScroll ? 'header-scroll' : ''}`}>
      <div className="header-content">
        <Link to="/" className="logo-container">
          <img className="logo" src={IMAGES.LOGO_WHITE} alt="Logo" />
        </Link>
        <Menu
          mode="horizontal"
          className="menu"
          style={{
            backgroundColor: 'transparent',
            gap: '20px',
            height: '100%',
            alignItems: 'center',
          }}
          items={getMenuItems(isScroll)}></Menu>
      </div>
    </Header>
  );
}

export default HeaderComponent;
