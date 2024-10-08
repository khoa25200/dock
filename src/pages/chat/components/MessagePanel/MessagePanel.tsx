import FormMessage from './partial/Form_message/Form_message';
import HeaderMessage from './partial/Header_message/Header_message';
import ChatDetail from './partial/Chat_details/Chat_details';
import MediaFiles from './partial/Medias_files/Medias_files';
import './MessagePanel.less';
function MessagePanel() {
  return (
    <div className="message--panel">
      <div className="message--panel-inner">
        <div className="message--container">
          <HeaderMessage />
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
