import { useState } from 'react';
import './InputMessage.less';
import { ICONS } from '../../../../assets/icons';

function InputMessage({
  message,
  setMessage,
}: {
  message: string[];
  setMessage: (text: string[]) => void;
}) {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <div className="bottom">
      <div className="icons">
        <label htmlFor="file">
          <img src={ICONS.PAPER_CLIP} alt="" />
        </label>
        {/* TODO (NHA): Add components handle preview file: Image, File(optional) */}
        <input type="file" id="file" style={{ display: 'none' }} />
      </div>
      <div className="emoji icons">
        <img src={ICONS.REACTION} alt="" onClick={() => setOpen((prev) => !prev)} />
        <div className="picker"></div>
      </div>
      <input
        type="text"
        placeholder={'Type a message...'}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* TODO (NHA): Handle Enter event for submit */}
      <button className="sendButton icons" onClick={() => setMessage([...message, text])}>
        <img src={ICONS.PLANE} alt="" />
      </button>
    </div>
  );
}

export default InputMessage;
