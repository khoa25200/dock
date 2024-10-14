import { useState, useEffect } from 'react';
import './FormMessage.less';
import MessageBox from '../../../MessageBox/MessageBox';
import InputMessage from '../../../InputMessage/InputMessage';
import { ICONS } from '../../../../../../assets/icons/index';

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

  const props = {
    sender: SENDER.FRIEND,
    avtUrl: '',
    name: name,
    text: message,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    reacts: [ICONS.LIKE, ICONS.HEART, ICONS.LIKE, ICONS.HEART, ICONS.LIKE, ICONS.HEART],
  };

  return (
    <div className="chat">
      <div className="center">
        {message.map((msg, index) => {
          return <MessageBox key={index} {...props} />;
        })}
      </div>
      <InputMessage message={message} setMessage={setMessage} />
    </div>
  );
};

export default FormMessage;
