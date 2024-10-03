import { PropsWithChildren } from 'react';
import './LayoutLandingPage.less';

function LayoutLandingPage({ children }: PropsWithChildren) {
  return <div className="layout-landing-page">{children}</div>;
}

export default LayoutLandingPage;
