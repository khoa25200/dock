import { PropsWithChildren, useState } from 'react';
import './LayoutDefault.less';

import { IMAGES } from '../../assets/images';
import { ICONS } from '../../assets/icons';
import SidebarLayout from '../Sidebar/Sidebar';
function LayoutDefault({ children }: PropsWithChildren) {
  return (
    <div className="layout-default">
      <div className="sidebar-small">
        <SidebarLayout />
      </div>
      <div className="channels-list">
        <h1>đây là sidebar_small</h1>
      </div>
      <div className="main-content">{children}</div>
    </div>
  );
}

export default LayoutDefault;
