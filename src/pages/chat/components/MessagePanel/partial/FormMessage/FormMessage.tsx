import { useState, useEffect } from 'react';
import './FormMessage.less';
import MessageBox from '../../../MessageBox/MessageBox';
import InputMessage from '../../../InputMessage/InputMessage';
import { IMAGES } from '../../../../../../assets/images';

const FormMessage = () => {
  const [message, setMessage] = useState<string[]>([]);

  const [name, setName] = useState('');

  useEffect(() => {
    const fetchName = async () => {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setName(data.results[0].name.first);
    };
    fetchName();
  }, []);

  const SENDER = {
    FRIEND: 'friend',
    OWNER: 'owner',
  };

  let props = {
    sender: SENDER.OWNER,
    avtUrl: '',
    name: name,
    text: message,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    reacts: [IMAGES.CLAP, IMAGES.DOWN, IMAGES.LIKE, IMAGES.ANGRY, IMAGES.CRY],
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
        {message.map((msg, index) => {
          const randomSender = Math.random() < 0.5 ? SENDER.OWNER : SENDER.FRIEND;
          props = {
            ...props,
            sender: randomSender,
            text: msg,
          };
          return <MessageBox key={index} {...props} />;
        })}
      </div>
      <InputMessage message={message} setMessage={setMessage} />
    </div>
  );
};

export default FormMessage;
