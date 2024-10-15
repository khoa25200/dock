import Reacts from '../Reacts/Reacts';
import './MessageBox.less';
import { ICONS } from '../../../../assets/icons/index';
import { IMAGES } from '../../../../assets/images';
import { useRef } from 'react';

function MessageBox({ ...props }: any) {
  const { avtUrl, name, text, time, sender, reacts } = props;
  const chat = useRef(null);

  const handleReactionClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.currentTarget.classList.toggle('active');
  };

  const handleTrashButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (chat.current) {
      chat.current.remove();
    }
  };

  return (
    <article className={`message ${sender}`} ref={chat}>
      <img className="avt" src={avtUrl || 'https://i.pravatar.cc/30'} />

      <div className="texts">
        <span>{name}</span>
        <div className="message-container">
          <div className="message-content">
            <aside className="divider">
              <div className="arrow-left"></div>
            </aside>
            <div className="message-box">
              <div className="content">{text}</div>
              <div className="bottom-content">
                <div className="reacts">
                  <Reacts reacts={reacts} />
                </div>
                <span className="time">{time}</span>
              </div>
            </div>

            <div className="reaction-hover">
              <div className="reaction-hover-container">
                <div className="reaction-icon">
                  <button onClick={handleReactionClick} className="reaction-item">
                    <img src={ICONS.REACTION} alt="reaction" />
                  </button>
                  <div className="icons-container">
                    <img src={IMAGES.CLAP} alt="clap" />
                    <img src={IMAGES.DOWN} alt="thumb down" />
                    <img src={IMAGES.LIKE} alt="thumb up" />
                    <img src={IMAGES.LAUGH} alt="laugh" />
                    <img src={IMAGES.ANGRY} alt="angry" />
                    <img src={IMAGES.CRY} alt="cry" />
                    <img src={IMAGES.UA} alt="ua" />
                  </div>
                </div>
                <button className="reaction-reply reaction-item">
                  <img src={ICONS.REPLY} alt="reply" />
                </button>
                <button className="reaction-trash reaction-item" onClick={handleTrashButton}>
                  <img src={ICONS.TRASH} alt="trash" style={{ color: '#8aaddb' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default MessageBox;
