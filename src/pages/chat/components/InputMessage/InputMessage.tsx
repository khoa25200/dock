import { useState } from 'react';
import './InputMessage.less';
import { ICONS } from '../../../../assets/icons';
import EmojiPicker from 'emoji-picker-react';

function InputMessage({
  message,
  setMessage,
}: {
  message: string[];
  setMessage: (text: string[]) => void;
}) {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setMessage([...message, text]);
      setText('');
    }
  };

  return (
    <div className="bottom">
      <div className="icons">
        <label htmlFor="file">
          <img src={ICONS.PAPER_CLIP} alt="paper-clip" />
        </label>
        <input type="file" id="file" style={{ display: 'none' }} />
      </div>
      {open ? <EmojiPicker /> : <></>}
      <div className="emoji icons">
        <img src={ICONS.REACTION} alt="reaction" onClick={() => setOpen((prev) => !prev)} />
      </div>
      <input
        type="text"
        placeholder={'Type a message...'}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
      />

      <button className="sendButton icons" onClick={() => setMessage([...message, text])}>
        <img src={ICONS.PLANE} alt="" />
      </button>
    </div>
  );
}

export default InputMessage;
