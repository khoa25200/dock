import { ICONS } from '../../../../../../assets/icons';
import { IMAGES } from '../../../../../../assets/images';
import { ChannelData } from '../../../../../../libs/types/channels';
import { SelfUser } from '../../../../../../libs/types/self';
import ButtonBadge from '../../../../../../components/buttons/ButtonOnlineStatus/ButtonOnlineStatus';
import Action from './Action';
import './HeaderMessage.less';
interface InfoChannelProps {
  InfoChannel?: ChannelData | null;
  InfoUser?: SelfUser | null;
}
const HeaderMessage = ({ InfoChannel, InfoUser }: InfoChannelProps) => {
  console.log(InfoUser);
  return (
    <>
      {InfoUser ? (
        <div className="header--message private-message">
          <div className="user-detail">
            <img
              src={InfoUser.avatarURL ? InfoUser.avatarURL : IMAGES.LOGO}
              alt="avatar"
              width={50}
              height={50}
            />
            <div className="user-info">
              <h3>{InfoUser.username}</h3>
              <p>
                {InfoUser.online ? (
                  <>
                    <ButtonBadge active={'online'} />
                    <span>Offline</span>
                  </>
                ) : (
                  <>
                    <ButtonBadge active={'offline'} />
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
        </div>
      ) : (
        <div className="header--message">
          <img src={ICONS.HASH} />
          <h1>{InfoChannel?.name}</h1>
        </div>
      )}
    </>
  );
};
export default HeaderMessage;
