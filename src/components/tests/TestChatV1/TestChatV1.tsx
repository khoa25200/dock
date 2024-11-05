import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../libs/redux/store';
import { sendMessage, updateText } from '../../../libs/redux/socket/messagesSlice';

const WebSocketClient: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { messages, text, recipient } = useSelector((state: RootState) => state.messages);


  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateText(e.target.value));
  };

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();  
    dispatch(sendMessage({ recipient, text }));
    dispatch(updateText(''));
  };



  return (
    <div>
      <h1>Websockets Tester</h1>
      <form onSubmit={handleSendMessage}>
        <input
          value={text}
          onChange={handleTextChange}
          type="text"
          placeholder="Message"
        />
        <input
          type="text"
          placeholder="Recipient Username"
        />
        <button type="submit">Send</button>
      </form>
      <ul>
        {messages?.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default WebSocketClient;
