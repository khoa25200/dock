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
  const dispatch = useAppDispatch();
  const { channelCurrent } = useAppSelector((state) => state.channel);
  useEffect(() => {
    dispatch(channelActions.getChannel({ idWorkSpace, idChannels }));
  }, [idWorkSpace, idChannels]);
  return (
    <div className="message--panel">
      <div className="message--panel-inner">
        <div className="message--container">
          <HeaderMessage InfoChannel={channelCurrent} />
          <FormMessage />
        </div>
        <div className="message--detail">
          <ChatDetail members={TeamMember} />
          <MediaFiles />
        </div>
      </div>
    </div>
  );
}

export default MessagePanel;
