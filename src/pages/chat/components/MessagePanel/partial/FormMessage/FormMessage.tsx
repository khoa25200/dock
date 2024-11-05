import { useState, useEffect } from 'react';
import './FormMessage.less';
import MessageBox from '../../../MessageBox/MessageBox';
import InputMessage from '../../../InputMessage/InputMessage';
import { IMAGES } from '../../../../../../assets/images';

const FormMessage = () => {
  const [message, setMessage] = useState<string[]>([]);
  const [reply, setReply] = useState<string>('');
  const [name, setName] = useState('');

  useEffect(() => { }, []);

  const SENDER = {
    FRIEND: 'friend',
    OWNER: 'owner',
  };

  const MESSAGE_TYPE = {
    TEXT: 'text',
    MEDIA: 'media',
    FILE: 'file',
  };

  useEffect(() => {
    if (message) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [message]);

  return (
    <div className="chat">
      <div className="center">
        {message?.map((msg, index) => {
          const randomSender = Math.random() < 0.5 ? SENDER.OWNER : SENDER.FRIEND;
          const randomMessageType = Math.random() < 0.5 ? MESSAGE_TYPE.MEDIA : MESSAGE_TYPE.FILE;
          const props = {
            sender: randomSender,
            messageType: randomMessageType,
            text: msg,
          };
          return <MessageBox key={index} {...props} setReply={setReply} />;
        })}
      </div>
      <InputMessage
        message={message}
        setMessage={setMessage}
        reply={reply}
        setReply={setReply}
      />
    </div>
  );
};

export default FormMessage;
