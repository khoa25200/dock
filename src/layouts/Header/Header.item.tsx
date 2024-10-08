import { CaretDownOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import useViewport from '../../libs/hooks/useViewport';
import './Header.less';
import './Header.media.less';
export function getMenuItems(isScroll: boolean) {
  const { vw } = useViewport();
  const isTablet = vw < 1024;
  const isMobile = vw < 768;

  // Common menu items
  const baseItems = [
    {
      label: <Link to="/home">Home</Link>,
      key: 'home',
    },
    {
      label: <Link to="/features">Features</Link>,
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
  ];

  // Items for tablet
  if (isTablet) {
    console.log(true);
    return [
      ...baseItems,
      {
        key: 'sub1',
        label: 'More',
        icon: <CaretDownOutlined style={{ color: `${isScroll ? 'black' : 'white'}` }} />,
        children: [
          {
            label: <Link to="/login">Login</Link>,
            key: 'login',
          },
          {
            label: <Link to="/signup">Try it Free</Link>,
            key: 'try',
          },
        ],
      },
    ];
  }

  // Items for mobile
  if (isMobile) {
    return [
      ...baseItems,
      {
        key: 'sub1',
        label: 'More',
        icon: <CaretDownOutlined style={{ color: `${isScroll ? 'black' : 'white'}` }} />,
        children: [
          {
            label: <Link to="/login">Login</Link>,
            key: 'login',
          },
          {
            label: <Link to="/signup">Try it Free</Link>,
            key: 'try',
          },
        ],
      },
    ];
  }

  // Items for desktop
  return [
    ...baseItems,
    {
      label: (
        <Link to="/login">
          <Button className="btn">Login</Button>
        </Link>
      ),
      key: 'login',
    },
    {
      label: (
        <Link to="/signup">
          <Button className="btn">Try it Free</Button>
        </Link>
      ),
      key: 'try',
    },
  ];
}
