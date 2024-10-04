import FooterLayout from '../../layouts/Footer/Foooter';
import HeaderComponent from '../Header/Header';
import { PropsWithChildren } from 'react';
import './LayoutLandingPage.less';

function LayoutLandingPage({ children }: PropsWithChildren) {
  return (
    <div className="layout-landing-page">
      <HeaderComponent />
      {children}
      <FooterLayout />
    </div>
  );
}

export default LayoutLandingPage;
