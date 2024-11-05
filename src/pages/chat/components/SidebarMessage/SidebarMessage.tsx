import './SidebarMessage.less';
import { ICONS } from '../../../../assets/icons';
import { IMAGES } from '../../../../assets/images';
import { useNavigate } from 'react-router-dom';
import useQuery from '../../../../libs/hooks/useQuery';
import { ChannelData } from '../../../../libs/types/channels';
import { useEffect } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../libs/hooks/useSelectorApp';
import { selfUserActions } from '../../../../libs/redux/self/selfSlice';
interface ChannelsProps {
  channels: ChannelData | null;
}
function SidebarMessage({ channels }: ChannelsProps) {
  const query = useQuery();
  const id_workspace = query.get('id_workspace');
  const dispatch = useAppDispatch();
  const { listUser } = useAppSelector((state) => state.self);
  const navigate = useNavigate();
  const fetchAllUser = async () => {
    await dispatch(selfUserActions.getAllUser());
  };
  useEffect(() => {
    // Navigate to first channel when channels data is available
    if (channels && channels?.channels?.length > 0) {
      const firstChannel = channels?.channels[0];
      handleNavigateChannels(firstChannel?.id);
    }
    fetchAllUser();
  }, [channels, id_workspace]);

  const handleNavigateChannels = (id: string) => {
    navigate(`/chat/channels?id_channels=${id}&id_workspace=${id_workspace}`);
  };

  const handleNavigateUser = (id: string) => {
    // Add id_workspace to user navigation to maintain workspace context
    navigate(`/chat/users?id_user=${id}&id_workspace=${channels?.workspaceId}`);
    dispatch(selfUserActions.setRecipientId(id));
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
              {listUser?.data.map((user) => (
                <li key={user.id} onClick={() => handleNavigateUser(user.id)}>
                  <div className="user--message">
                    <img
                      src={
                        user.avatarURL !== null
                          ? user.avatarURL
                          : IMAGES.AVT_TEXT
                      }
                      alt="image error"
                    />
                    <div className="online-indicator">
                      <span className="blink"></span>
                    </div>
                  </div>
                  <span>{user.username}</span>
                </li>
              ))}
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
