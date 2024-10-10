import React from 'react';
import './ChatPage.less';
import LayoutDefault from '../../layouts/LayoutDefault/LayoutDefault';
import MessagePanel from './components/MessagePanel/MessagePanel';
import SidebarMessage from './components/SidebarMessage/SidebarMessage';
const ChatPage: React.FC = () => {
  return (
    <LayoutDefault sidebarMessage={<SidebarMessage />}>
      <MessagePanel />
    </LayoutDefault>
  );
};

export default ChatPage;
