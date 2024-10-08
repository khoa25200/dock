import { useState } from 'react';
import './Form_message.less';
import { IMAGES } from '../../../../../../assets/images';

const FormMessage = () => {
  // const [chat, setChat] = useState();
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  // const [img, setImg] = useState({
  //   file: null,
  //   url: '',
  // });
  console.log(open);

  return (
    <div className="chat">
      <div className="center">
        <div className="message">
          <img src={IMAGES.AVT_TEXT} />
          <div className="texts">
            <span>Nguyễn Long Duy</span>

            <p>message.text</p>
            <span>27 minute ago</span>
          </div>
        </div>
        <div className="message">
          <img src={IMAGES.AVT_TEXT} />
          <div className="texts">
            <span>Nguyễn Long Duy</span>
            <p>message.text</p>
            <span>27 minute ago</span>
          </div>
        </div>
        <div className="message">
          <img src={IMAGES.AVT_TEXT} />
          <div className="texts">
            <span>Nguyễn Long Duy</span>
            <p>message.text</p>
            <span>27 minute ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>message.text</p>
          </div>
          <img src={IMAGES.AVT_TEXT} />
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <label htmlFor="file">
            <img src="./img.png" alt="" />
          </label>
          <input type="file" id="file" style={{ display: 'none' }} />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder={'Type a message...'}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker"></div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default FormMessage;
