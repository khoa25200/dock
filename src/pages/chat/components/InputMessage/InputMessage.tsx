import { useEffect, useState } from 'react';
import './InputMessage.less';
import { ICONS } from '../../../../assets/icons';
import EmojiPicker from 'emoji-picker-react';
import Picker, { EmojiClickData } from 'emoji-picker-react';
import { TextArea } from '@ant-design/pro-chat/es/components/Input';

function InputMessage({
  message,
  setMessage,
}: {
  message: string[];
  setMessage: (text: string[]) => void;
}) {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState<EmojiClickData | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string | null>(null);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        return;
      } else {
        e.preventDefault();
        if (text.trim() !== '') {
          setMessage([...message, text]);
          setText('');
        }
      }
    }
  };

  const handleReactionClick = (emojiObject: any) => {
    setChosenEmoji(emojiObject);
    setText((prevText) => prevText + emojiObject.emoji);
    console.log(text);
    setOpen(false);
  };

  const onImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setImageName(e.target.files[0].name);
    }
  };

  return (
    <div className="bottom">
      <div className="icons">
        <label htmlFor="file">
          <img src={ICONS.PAPER_CLIP} alt="paper-clip" />
        </label>
        {/* TODO (NHA): Add components handle preview file: Image, File(optional) */}
        <input type="file" id="file" style={{ display: 'none' }} onChange={onImageChange} />
      </div>
      <div className="emoji icons">
        {open && <Picker className="emoji-picker" onEmojiClick={handleReactionClick} />}
        <img src={ICONS.REACTION} alt="reaction" onClick={() => setOpen((prev) => !prev)} />
      </div>
      <div className="input-and-preview">
        {image && (
          <div className="image-preview">
            <img src={image} alt={imageName || 'preview'} className="preview-image" />
            <img
              src={ICONS.DELETE}
              alt="delete-image"
              className="delete-image"
              onClick={() => setImage(null)}
            />
          </div>
        )}
        <TextArea
          placeholder="Type a message..."
          autoSize
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          value={text}
        />
      </div>

      <button className="sendButton icons" onClick={() => setMessage([...message, text])}>
        <img src={ICONS.PLANE} alt="" />
      </button>
    </div>
  );
}

export default InputMessage;
