import Reacts from '../Reacts/Reacts';
import './MessageBox.less';
import { useRef } from 'react';
import MessageAction from './MessageAction';
import FileMessage from './File.message';
import MediaMessage from './Media.message';

function MessageBox({ ...props }: any) {
  const {
    avtUrl,
    name,
    text,
    time,
    sender,
    reacts,
    replyMessage,
    messageType,
    setReply,
    mediaURL,
    fileName,
    extension,
    size,
  } = props;
  const chat = useRef(null);

  const handleReactionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.currentTarget.classList.toggle('active');
  };

  const handleTrashButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (chat.current) {
      setReply('');
    }
  };

  const handleReply = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setReply(text);
  };

  return (
    <>
      <article className={`message ${sender}`} ref={chat}>
        <img className="avt" src={avtUrl || 'https://i.pravatar.cc/30'} />

        <div className="texts">
          <span className="name">{name}</span>
          <div className="message-container">
            <div className="message-content">
              <aside className="divider">
                <div className="arrow-left"></div>
              </aside>
              <div className="message-box">
                {/* Type text */}
                {messageType === 'text' && (
                  <>
                    <div className="content">{text}</div>
                    <div className="bottom-content">
                      <div className="reacts">
                        <Reacts reacts={reacts} />
                      </div>
                      <span className="time">{time}</span>
                    </div>
                  </>
                )}

                {/* Type file */}
                {messageType === 'file' && (
                  <>
                    <FileMessage
                      fileName={fileName}
                      extension={extension}
                      size={size}
                    />
                    <div className="reacts">
                      <Reacts reacts={reacts} />
                    </div>
                  </>
                )}

                {/* Type media */}
                {messageType === 'media' && (
                  <>
                    <MediaMessage mediaURL={mediaURL} />
                    <div className="reacts">
                      <Reacts reacts={reacts} />
                    </div>
                  </>
                )}
              </div>

              <MessageAction
                handleReactionClick={handleReactionClick}
                handleReply={handleReply}
                handleTrashButton={handleTrashButton}
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default MessageBox;
