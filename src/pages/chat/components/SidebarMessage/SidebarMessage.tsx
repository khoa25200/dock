import './SidebarMessage.less';
import { ICONS } from '../../../../assets/icons';
import { IMAGES } from '../../../../assets/images';
import { useNavigate } from 'react-router-dom';
import useQuery from '../../../../libs/hooks/useQuery';
import { ChannelData } from '../../../../libs/types/channels';
import { useEffect } from 'react';
interface ChannelsProps {
  channels: ChannelData | null;
}
function SidebarMessage({ channels }: ChannelsProps) {
  const query = useQuery();
  const id_workspace = query.get('id_workspace');
  const navigate = useNavigate();

  useEffect(() => {
    if (channels && channels.channels.length > 0) {
      const firstChannel = channels.channels[0];
      navigate(
        `/chat/channels?id_channels=${firstChannel.id}&id_workspace=${id_workspace}`
      );
    }
  }, [channels, id_workspace]);
  const handleNavigateChannels = (id: string) => {
    navigate(`/chat/channels?id_channels=${id}&id_workspace=${id_workspace}`);
  };

  return (
    <div className="sidebar-message">
      <div className="sidebar--message-inner">
        <div className="sidebar--message-header" key={channels?.id}>
          <h1>{channels?.name}</h1>
          <img src={ICONS.ARROW_DOWN_LIGHT} alt="image error" />
        </div>
        <div className="sidebar--message-channels">
          <div className="sidebar--message-heading">
            <img src={ICONS.ARROW_DOWN_BOLD} alt="image error" />
            <h1>Channels</h1>
          </div>
          <div className="sidebar--channel-list">
            <ul>
              {channels?.channels.map((channelChildren) => (
                <li
                  onClick={() => handleNavigateChannels(channelChildren.id)}
                  key={channelChildren.id}
                >
                  <img src={ICONS.HASH} alt="image error" />
                  <span>{channelChildren.name}</span>
                </li>
              ))}
            </ul>
            <div className="sidebar--btn-addChannel">
              <img src={ICONS.PLUS} />
              <span>Add channels</span>
            </div>
          </div>
        </div>
        <div className="sidebar--message-direct">
          <div className="sidebar--message-heading">
            <img src={ICONS.ARROW_DOWN_BOLD} alt="image error" />
            <h1>Messages</h1>
          </div>
          <div className="sidebar--direct-list">
            <ul>
              <li>
                <div className="user--message">
                  <img src={IMAGES.AVT_TEXT} alt="image error" />
                  <div className="online-indicator">
                    <span className="blink"></span>
                  </div>
                </div>
                <span>Nguyễn Long Duy</span>
              </li>
              <li>
                <div className="user--message">
                  <img src={IMAGES.AVT_TEXT} alt="image error" />
                  <div className="online-indicator">
                    <span className="blink"></span>
                  </div>
                </div>
                <span>Nguyễn Long Duy</span>
              </li>
              <li>
                <div className="user--message">
                  <img src={IMAGES.AVT_TEXT} alt="image error" />
                  <div className="online-indicator">
                    <span className="blink online"></span>
                  </div>
                </div>
                <span>Nguyễn Long Duy</span>
              </li>
              <li>
                <div className="user--message">
                  <img src={IMAGES.AVT_TEXT} alt="image error" />
                  <div className="online-indicator">
                    <span className="blink online"></span>
                  </div>
                </div>
                <span>Nguyễn Long Duy</span>
              </li>
              <li>
                <div className="user--message">
                  <img src={IMAGES.AVT_TEXT} alt="image error" />
                  <div className="online-indicator">
                    <span className="blink offline"></span>
                  </div>
                </div>
                <span>Nguyễn Long Duy</span>
              </li>
            </ul>
            <div className="sidebar--btn-addMessages">
              <img src={ICONS.PLUS} />
              <span>Add Colleagues</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarMessage;
