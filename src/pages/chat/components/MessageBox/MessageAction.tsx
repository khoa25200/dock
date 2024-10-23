import { ICONS } from '../../../../assets/icons';
import { IMAGES } from '../../../../assets/images';
import './MessageAction.less';

function MessageAction({
  handleReactionClick,
  handleReply,
  handleTrashButton,
}: {
  handleReactionClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleReply: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleTrashButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
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
        <button className="reaction-reply reaction-item" onClick={handleReply}>
          <img src={ICONS.REPLY} alt="reply" />
        </button>
        <button className="reaction-trash reaction-item" onClick={handleTrashButton}>
          <img src={ICONS.TRASH} alt="trash" style={{ color: '#8aaddb' }} />
        </button>
      </div>
    </div>
  );
}

export default MessageAction;
