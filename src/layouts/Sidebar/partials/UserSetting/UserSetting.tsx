import './UserSetting.less';
import './UserSetting.media.less';

import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { IMAGES } from '../../../../assets/images';
import ButtonBadge from '../../../../components/buttons/ButtonOnlineStatus/ButtonOnlineStatus';
import { useAppDispatch } from '../../../../libs/hooks/useSelectorApp';
import { authActions } from '../../../../libs/redux/auth/authSlice';
import { SelfUser } from '../../../../libs/types/self';
import ModalProfile from '../../../../components/modals/partials/ModalProfile/ModalProfile';
interface SelfUserProps {
  setUserInfo?: Partial<SelfUser>;
}
const UserSetting: React.FC<SelfUserProps> = ({ setUserInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
      setIsModalOpen(true);
  };

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
          <img
            src={setUserInfo?.avatarURL ? setUserInfo?.avatarURL : IMAGES.LOGO}
            alt="Avatar"
          />
        </div>
        <div className="setting-user-infor">
          <div className="user-infor-name">
            {setUserInfo?.lastName ? setUserInfo?.lastName : 'UserOfDock'}
          </div>
          <div className="user-infor-status">
            <div className="user-infor-status-btn">
              <ButtonBadge
                active={setUserInfo?.online ? 'online' : 'offline'}
              />
            </div>
            <p>{setUserInfo?.online ? 'Active' : 'OffLine'}</p>
          </div>
        </div>
      </div>
      <div className="setting-action">
        <div 
          id="profile"
          className="setting-action-items"
          onClick={showModal}
        >
          Profile
        </div>
        <ModalProfile
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
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
