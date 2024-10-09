import React from 'react';
import './Sidebar.less';
import './Sidebar.media.less';
import { IMAGES } from '../../assets/images';
import { ICONS } from '../../assets/icons';
const SidebarLayout: React.FC = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-inner">
        <img src={IMAGES.LOGO} className="logo-dockchat" />
        <div className="sidebar-workspace">
          <img src={IMAGES.LOGO} className="logo-dockchat" />
        </div>
        <div className="sidebar-list-feature">
          <ul>
            <li>
              <img src={ICONS.HOME} alt="" />
              <span>Home</span>
            </li>
            <li>
              <img src={ICONS.MESSAGE} alt="" />
              <span>All chat</span>
            </li>
            <li>
              <img src={ICONS.BELL} alt="" />
              <span>Activity</span>
            </li>
          </ul>
        </div>
        <div className="user-current">
          <img src={IMAGES.LOGO} className="logo-dockchat" />
          <div className="online-indicator">
            <span className="blink"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
