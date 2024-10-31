import React, { useEffect, useState } from 'react';
import './Sidebar.less';
import './Sidebar.media.less';
import { IMAGES } from '../../assets/images';
import { ICONS } from '../../assets/icons';
import SideBarItem from './partials/SideBarItem/SideBarItem';
import { Popover } from 'antd';
import UserSetting from './partials/UserSetting/UserSetting';
import ButtonBadge from '../../components/buttons/ButtonOnlineStatus/ButtonOnlineStatus';
import { useNavigate } from 'react-router-dom';
import {
  useAppDispatch,
  useAppSelector,
} from '../../libs/hooks/useSelectorApp';
import { selfUserActions } from '../../libs/redux/self/selfSlice';

const SidebarLayout: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [openSub, setOpenSub] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const { currentUser, isLoggedIn } = useAppSelector((state) => state.auth);
  const userId = currentUser?.data.userId;
  const { infoUser } = useAppSelector((state) => state.self);

  const handleOpenSub = (newOpen: boolean) => {
    setOpenSub(newOpen);
  };

  const handleOpenUser = (newOpen: boolean) => {
    setOpenSetting(newOpen);
  };
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/signin');
    } else {
      dispatch(selfUserActions.getSelfUser({ userId }));
    }
  }, []);

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-inner">
        <img src={IMAGES.LOGO} className="logo-dockchat" />
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
            content={
              <UserSetting
                setUserInfo={{
                  phoneNumber: infoUser?.data.phoneNumber,
                  avatarURL: infoUser?.data.avatarURL,
                  firstName: infoUser?.data.firstName,
                  lastName: infoUser?.data.lastName,
                  online: infoUser?.data.online,
                }}
              />
            }
            trigger="click"
            open={openSetting}
            onOpenChange={handleOpenUser}
            prefixCls="user-setting"
          >
            <img
              src={
                infoUser?.data.avatarURL
                  ? infoUser?.data.avatarURL
                  : IMAGES.LOGO
              }
              className="logo-dockchat"
            />
            <div className="online-indicator">
              <ButtonBadge
                active={infoUser?.data.online ? 'online' : 'offline'}
              />
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
