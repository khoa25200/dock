import { ICONS } from '../../../../../../assets/icons';
import { IMAGES } from '../../../../../../assets/images';
import Action from './Action';
import './HeaderMessage.less';
const HeaderMessage = ({
  status,
  name,
  isPrivateMessage,
}: {
  status?: string;
  name?: string;
  isPrivateMessage: boolean;
}) => {
  return (
    <div className={`header--message ${isPrivateMessage && 'private-message'}`}>
      {isPrivateMessage ? (
        <>
          <div className="user-detail">
            <img src={IMAGES.AVT_TEXT} alt="avatar" width={50} height={50} />
            <div className="user-info">
              <h3>{name}</h3>
              <p>
                {status === 'online' ? (
                  <>
                    <img src={ICONS.ONLINE} alt="online" />
                    <span>Online</span>
                  </>
                ) : (
                  <>
                    <img src={ICONS.OFFLINE} alt="offline" />
                    <span>Offline</span>
                  </>
                )}
              </p>
            </div>
          </div>
          <div className="actions">
            <Action icon={ICONS.CALL} actionName="Call" />
            <Action icon={ICONS.MEETING} actionName="Meeting" />
          </div>
        </>
      ) : (
        <>
          <img src={ICONS.HASH} />
          <h1>notice</h1>
        </>
      )}
    </div>
  );
};
export default HeaderMessage;
