import './MessagePanel.less';
import ChatDetail from './partial/ChatDetails/ChatDetails';
import FormMessage from './partial/FormMessage/FormMessage';
import HeaderMessage from './partial/HeaderMessage/HeaderMessage';
import MediaFiles from './partial/MediasFiles/MediasFiles';
function MessagePanel() {
  const headerMessageProps = {
    status: 'online',
    name: 'User Name',
    isPrivateMessage: true,
  };
  return (
    <div className="message--panel">
      <div className="message--panel-inner">
        <div className="message--container">
          <HeaderMessage {...headerMessageProps} />
          <FormMessage />
        </div>
        <div className="message--detail">
          <ChatDetail />
          <MediaFiles />
        </div>
      </div>
    </div>
  );
}

export default MessagePanel;
