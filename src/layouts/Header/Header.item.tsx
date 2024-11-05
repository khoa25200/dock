import { MenuOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './Header.less';
import './Header.media.less';
import { useEffect, useState } from 'react';
import ModalFormEmail from '../../components/modals/partials/ModalSignUpWithMail/ModalSignUpWithMail';

const useMenuItems = (isScroll: boolean) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const [vw, setVW] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setVW(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isTablet = vw <= 1024 && vw > 768;
  const isMobile = vw <= 768;

  // Common menu items
  const baseItems = [
    { label: <Link to="#">Home</Link>, key: '/home' },
    { label: <Link to="#">Features</Link>, key: '/features' },
    { label: <Link to="#">About Us</Link>, key: '/about' },
    { label: <Link to="#">Download</Link>, key: '/download' },
  ];

  // Login and Signup items
  const authItems = [
    {
      label: (
        <Link to="/signin">
          <Button>Login</Button>
        </Link>
      ),
      key: '/login',
    },
    {
      label: (
        <>
          <Button onClick={showModal}>Try it Free</Button>
          <ModalFormEmail
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </>
      ),
      key: '/try',
      selectable: false,
    },
  ];

  const getMobileMenuItems = () => [
    {
      key: 'mobile-menu',
      icon: <MenuOutlined style={{ color: isScroll ? 'black' : 'white' }} />,
      children: [...baseItems, ...authItems],
    },
  ];

  const getTabletMenuItems = () => [
    ...baseItems,
    {
      key: 'tablet-menu',
      icon: <MenuOutlined style={{ color: isScroll ? 'black' : 'white' }} />,
      children: authItems,
    },
  ];

  const getDesktopMenuItems = () => [...baseItems, ...authItems];

  // Return the appropriate menu items based on the viewport size
  if (isMobile) return getMobileMenuItems();
  if (isTablet) return getTabletMenuItems();
  return getDesktopMenuItems();
};

export default useMenuItems;
