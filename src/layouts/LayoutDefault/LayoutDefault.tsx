import { PropsWithChildren, ReactNode } from 'react';
import './LayoutDefault.less';
import SidebarLayout from '../Sidebar/Sidebar';
interface LayoutDefaultProps extends PropsWithChildren {
  sidebarMessage?: ReactNode;
}
function LayoutDefault({ sidebarMessage, children }: LayoutDefaultProps) {
  return (
    <div className="layout-default">
      <div className="sidebar-small">
        <SidebarLayout />
      </div>
      <div className="channels-list">{sidebarMessage}</div>
      <div className="main-content">{children}</div>
    </div>
  );
}

export default LayoutDefault;
