import './ChatPage.less';
import React, { useEffect, useState } from 'react';
import LayoutDefault from '../../layouts/LayoutDefault/LayoutDefault';
import MessagePanel from './components/MessagePanel/MessagePanel';
import SidebarMessage from './components/SidebarMessage/SidebarMessage';
import { Routes, Route } from 'react-router-dom';
import useQuery from '../../libs/hooks/useQuery';
import { ChannelData } from '../../libs/types/channels';
import {
  useAppDispatch,
  useAppSelector,
} from '../../libs/hooks/useSelectorApp';
import { channelActions } from '../../libs/redux/channel/channelSlice';
const ChatPage: React.FC = () => {
  const query = useQuery();
  const idWorkSpace = query.get('id_workspace');
  const [channels, setChannels] = useState<ChannelData | null>(null);
  const dispatch = useAppDispatch();
  const { channelData } = useAppSelector((state) => state.channel);

  useEffect(() => {
    dispatch(channelActions.getChannels({ idWorkSpace }));
    setChannels(channelData);
  }, []);
  return (
    <LayoutDefault sidebarMessage={<SidebarMessage channels={channels} />}>
      <Routes>
        <Route path="/channels" element={<MessagePanel />} />
      </Routes>
    </LayoutDefault>
  );
};

export default ChatPage;
