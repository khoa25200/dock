import FooterLayout from '../Footer/Footer';
import HeaderComponent from '../Header/Header';
import { PropsWithChildren, useState, useEffect } from 'react';
import './LayoutLandingPage.less';

function LayoutLandingPage({ children }: PropsWithChildren) {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / docHeight;

      if (scrollFraction >= 0.1) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="wrapper-landing-page">
        <HeaderComponent isScroll={isScroll} />
        <main className="content-landing-page">{children}</main>
        <FooterLayout />
      </div>
    </>
  );
}

export default LayoutLandingPage;
