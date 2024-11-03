import './ChatPage.less';
import React, { useEffect, useState } from 'react';
import LayoutDefault from '../../layouts/LayoutDefault/LayoutDefault';
import MessagePanel from './components/MessagePanel/MessagePanel';
import SidebarMessage from './components/SidebarMessage/SidebarMessage';
import { Routes, Route } from 'react-router-dom';
import { ChannelsService } from '../../libs/api/channels';
import useQuery from '../../libs/hooks/useQuery';
import { ChannelData } from '../../libs/types/channels';
const ChatPage: React.FC = () => {
  const query = useQuery();
  const idWorkSpace = query.get('id_workspace');
  const [channels, setChannels] = useState<ChannelData | null>(null);
  const fetchWorkspaces = async () => {
    const response = await ChannelsService.getChannelsOfWorkspace({
      idWorkSpace,
    });
    setChannels(response);
  };
  useEffect(() => {
    fetchWorkspaces();
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
