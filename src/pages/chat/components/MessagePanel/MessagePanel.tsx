import { useEffect, useState } from 'react';
import useQuery from '../../../../libs/hooks/useQuery';
import { ChannelData } from '../../../../libs/types/channels';
import './MessagePanel.less';
import ChatDetail from './partial/ChatDetails/ChatDetails';
import FormMessage from './partial/FormMessage/FormMessage';
import HeaderMessage from './partial/HeaderMessage/HeaderMessage';
import MediaFiles from './partial/MediasFiles/MediasFiles';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../libs/hooks/useSelectorApp';
import { channelActions } from '../../../../libs/redux/channel/channelSlice';
import { SelfUser } from '../../../../libs/api/self';
import { SelfUser as SelfUserType } from '../../../../libs/types/self';
const TeamMember = [
  {
    name: 'Nguyễn Long Duy',
    role: 'Devloper',
    picture:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
  },
];
function MessagePanel() {
  const query = useQuery();
  const idWorkSpace = query.get('id_workspace');
  const idChannels = query.get('id_channels');
  const idUser = query.get('id_user');
  const dispatch = useAppDispatch();
  const { channelCurrent } = useAppSelector((state) => state.channel);
  const [userMessage, settUserMessage] = useState();
  useEffect(() => {
    // Only fetch channel data when we have idChannels
    if (idChannels) {
      dispatch(channelActions.getChannel({ idWorkSpace, idChannels }));
    }
    if (idUser) {
      getUserMessage(idUser);
    }
    // Add user fetch logic here if needed for idUser
  }, [idWorkSpace, idChannels, idUser]);
  const getUserMessage = async (userId: string) => {
    try {
      const response = await SelfUser.getUser({ userId });
      settUserMessage(response.data);
    } catch (error) {}
  };
  const renderMessagePanel = () => {
    const isChannelView = Boolean(idChannels);

    return (
      <div className="message--panel">
        <div className="message--panel-inner">
          <div className="message--container">
            <HeaderMessage
              InfoChannel={isChannelView ? channelCurrent : null}
              InfoUser={isChannelView ? null : userMessage}
            />
            <FormMessage />
          </div>
          <div className="message--detail">
            <ChatDetail members={TeamMember} />
            <MediaFiles />
          </div>
        </div>
      </div>
    );
  };

  return renderMessagePanel();
}

export default MessagePanel;
