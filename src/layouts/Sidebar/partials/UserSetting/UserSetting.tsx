import './UserSetting.less';
import './UserSetting.media.less';

import React from 'react';
import { IMAGES } from '../../../../assets/images';
import ButtonBadge from '../../../../components/buttons/ButtonOnlineStatus/ButtonOnlineStatus';
import { useAppDispatch } from '../../../../libs/hooks/useSelectorApp';
import { authActions } from '../../../../libs/redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const UserSetting: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(authActions.logout());
    navigate('/');
  };
  return (
    <div className="setting">
      <div className="setting-user">
        <div className="setting-user-avatar">
          <img src={IMAGES.AVT_TEXT} alt="Avatar" />
        </div>
        <div className="setting-user-infor">
          <div className="user-infor-name">Current - user - login</div>
          <div className="user-infor-status">
            <div className="user-infor-status-btn">
              <ButtonBadge active="online" />
            </div>
            <p>Active</p>
          </div>
        </div>
      </div>
      <div className="setting-action">
        <div id="profile" className="setting-action-items">
          Profile
        </div>
        <div id="preference" className="setting-action-items">
          Preferences
        </div>
        <div id="signup-workspace" className="setting-action-items">
          Sign out of KTC-FE-Basic
        </div>
        <div
          id="signup-account"
          className="setting-action-items"
          onClick={() => handleLogOut()}
        >
          Sign out account
        </div>
      </div>
    </div>
  );
};

export default UserSetting;
