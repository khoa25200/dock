import { useState, useEffect } from 'react';
import './FormMessage.less';
import MessageBox from '../../../MessageBox/MessageBox';
import InputMessage from '../../../InputMessage/InputMessage';
import { IMAGES } from '../../../../../../assets/images';

const FormMessage = () => {
  const [message, setMessage] = useState<string[]>([]);
  const [reply, setReply] = useState<string>('');
  const [name, setName] = useState('');

  useEffect(() => {}, []);

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
      <div className="center"></div>
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
