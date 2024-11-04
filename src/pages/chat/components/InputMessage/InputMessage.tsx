import { ChangeEvent, useEffect, useState } from 'react';
import './InputMessage.less';
import { ICONS } from '../../../../assets/icons';
import Picker, { EmojiClickData } from 'emoji-picker-react';
import { TextArea } from '@ant-design/pro-chat/es/components/Input';

function InputMessage({
  message,
  setMessage,
  reply,
  setReply,
}: {
  message: string[];
  setMessage: (text: string[]) => void;
  reply: string;
  setReply: (text: string) => void;
}) {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState<EmojiClickData | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [replyText, setReplyText] = useState<string>('');

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        return;
      } else {
        e.preventDefault();
        handleSendMessage();
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
    if (file) {
      setFile(null);
      setFileName(null);
    }
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setImageName(e.target.files[0].name);
    }
  };

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (image) {
      setImage(null);
      setImageName(null);
    }
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const handleSendMessage = () => {
    if (file) {
      console.log(true);
      setFile(null);
      setFileName(null);
      if (text.trim() !== '') {
        setMessage([...message, text]);
        setText('');
      }
    }

    if (image) {
      setImage(null);
      setImageName(null);
      if (text.trim() !== '') {
        setMessage([...message, text]);
        setText('');
      }
    }

    if (replyText) {
      setReplyText('');
      if (text.trim() !== '') {
        setMessage([...message, text]);
        setReply('');
        setReplyText('');
      }
    }

    if (text.trim() !== '') {
      setMessage([...message, text]);
      setText('');
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    console.log(e);
    if (e.clipboardData.files.length) {
      const fileObject = e.clipboardData.files[0];
      console.log(fileObject);
      setImage(URL.createObjectURL(fileObject));
    }
  };

  useEffect(() => {
    if (reply) {
      setReplyText(reply);
    }
  }, [reply]);

  return (
    <div className="bottom">
      {/* For file */}
      <div className="icons">
        <label htmlFor="file">
          <img src={ICONS.PAPER_CLIP} alt="paper-clip" />
        </label>
        <input
          type="file"
          id="file"
          accept="*"
          style={{ display: 'none' }}
          onChange={onFileChange}
        />
      </div>

      {/* For media file */}
      <div className="icons">
        <label htmlFor="send-media-file">
          <img src={ICONS.SEND_MEDIA_FILE} alt="send-media-file" />
        </label>
        <input
          type="file"
          id="send-media-file"
          accept="image/*, video/*"
          style={{ display: 'none' }}
          onChange={onImageChange}
        />
      </div>

      {/* For emoji */}
      <div className="emoji icons">
        {open && (
          <Picker
            className="emoji-picker"
            onEmojiClick={handleReactionClick}
            lazyLoadEmojis={true}
          />
        )}
        <img
          src={ICONS.REACTION}
          alt="reaction"
          onClick={() => setOpen((prev) => !prev)}
        />
      </div>

      {/* For image and text */}
      <div className="input-and-preview">
        {image && (
          <div className="image-preview">
            <img
              src={image}
              alt={imageName || 'preview'}
              className="preview-image"
            />
            <img
              src={ICONS.DELETE}
              alt="delete-image"
              className="delete-image"
              onClick={() => setImage(null)}
            />
          </div>
        )}
        {file && (
          <div className="file-preview">
            <img
              src={ICONS.FILE}
              alt={fileName || 'preview'}
              className="preview-file"
            />
            <div className="file-name">{fileName}</div>
            <img
              src={ICONS.DELETE}
              alt="delete-file"
              className="delete-image"
              onClick={() => setFile(null)}
            />
          </div>
        )}
        {replyText && (
          <div className="reply-text">
            <span>Reply: </span>
            <span>{replyText}</span>
            <img
              src={ICONS.DELETE}
              alt="delete-file"
              className="delete-image"
              onClick={() => {
                setReply('');
                setReplyText('');
              }}
            />
          </div>
        )}
        <TextArea
          placeholder="Type a message..."
          autoSize={{ minRows: 1, maxRows: 6 }}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          value={text}
          onPaste={handlePaste}
        />
      </div>

      <button className="sendButton icons" onClick={handleSendMessage}>
        <img src={ICONS.PLANE} alt="" />
      </button>
    </div>
  );
}

export default InputMessage;
