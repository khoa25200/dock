import { PropsWithChildren, ReactNode } from 'react';
import './LayoutDefault.less';
import SidebarLayout from '../Sidebar/Sidebar';
import { Splitter } from 'antd';
interface LayoutDefaultProps extends PropsWithChildren {
  sidebarMessage?: ReactNode;
}
function LayoutDefault({ sidebarMessage, children }: LayoutDefaultProps) {
  return (
    <div className="layout-default">
      <div className="sidebar-small" style={{ height: '100%' }}>
        <SidebarLayout />
      </div>

      <Splitter style={{ height: '100%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '100%' }}>
        <Splitter.Panel collapsible resizable={false} defaultSize={'25%'} max={'50%'}>
          <div className="channels-list">{sidebarMessage}</div>
        </Splitter.Panel>
        <Splitter.Panel>
          <div className="main-content">{children}</div>
        </Splitter.Panel>
      </Splitter>
    </div>
  );
}

export default LayoutDefault;
