import React, { useEffect, useState } from 'react';
import './Sidebar.less';
import './Sidebar.media.less';
import { IMAGES } from '../../assets/images';
import { ICONS } from '../../assets/icons';
import SideBarItem from './partials/SideBarItem/SideBarItem';
import { Popover } from 'antd';
import UserSetting from './partials/UserSetting/UserSetting';
import ButtonBadge from '../../components/buttons/ButtonOnlineStatus/ButtonOnlineStatus';
import {
  useAppDispatch,
  useAppSelector,
} from '../../libs/hooks/useSelectorApp';
import { useNavigate } from 'react-router-dom';
import { selfUserActions } from '../../libs/redux/self/selfSlice';

const SidebarLayout: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentUser, isLoggedIn } = useAppSelector((state) => state.auth);
  const { infoUser } = useAppSelector((state) => state.self);
  const userId = currentUser?.data.userId;
  const [openSub, setOpenSub] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const statusUser = infoUser?.data.online;

  const handleOpenSub = (newOpen: boolean) => {
    setOpenSub(newOpen);
  };

  const handleOpenUser = (newOpen: boolean) => {
    setOpenSetting(newOpen);
  };
  useEffect(() => {
    if (userId) {
      dispatch(selfUserActions.getSelfUser({ userId }));
    }
  }, [isLoggedIn, userId, navigate, dispatch]);
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-inner">
        <a href="/workspace">
          <img src={IMAGES.LOGO} className="logo-dockchat" />
        </a>
        <Popover
          content={<SideBarItem />}
          trigger="click"
          open={openSub}
          onOpenChange={handleOpenSub}
          prefixCls="sidebar-sub"
        >
          <div className="sidebar-workspace">
            <img src={IMAGES.LOGO} className="logo-dockchat" />
          </div>
        </Popover>
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
          <Popover
            content={<UserSetting />}
            trigger="click"
            open={openSetting}
            onOpenChange={handleOpenUser}
            prefixCls="user-setting"
          >
            <img src={IMAGES.LOGO} className="logo-dockchat" />
            <div className="online-indicator">
              <ButtonBadge active={statusUser ? 'online' : 'offline'} />
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
