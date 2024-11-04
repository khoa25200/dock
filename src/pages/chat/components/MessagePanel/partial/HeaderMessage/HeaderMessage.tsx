import { ICONS } from '../../../../../../assets/icons';
import { IMAGES } from '../../../../../../assets/images';
import { ChannelData } from '../../../../../../libs/types/channels';
import Action from './Action';
import './HeaderMessage.less';
interface InfoChannelProps {
  InfoChannel: ChannelData | null;
}
const HeaderMessage = ({ InfoChannel }: InfoChannelProps) => {
  console.log(InfoChannel);

  return (
    <>
      {InfoChannel?.workspaceId ? (
        <div className="header--message private-message">
          <div className="user-detail">
            <img src={IMAGES.AVT_TEXT} alt="avatar" width={50} height={50} />
            <div className="user-info">
              <h3>{InfoChannel?.name}</h3>
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
