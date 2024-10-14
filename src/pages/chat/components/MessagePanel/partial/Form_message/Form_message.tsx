import './Form_message.less';
import { IMAGES } from '../../../../../../assets/images';

const FormMessage = () => {
  return (
    <div className="form--messages">
      <div className="form--messages-list">
        <div className="form--messages-item">
          <img src={IMAGES.AVT_TEXT}/>
          <div className="texts">
            <span>Nguyễn Long Duy</span>
            <p>message.text</p>
            <span>27 minute ago</span>
          </div>
        </div>
        <div className="form--messages-item own">
          <div className="texts">
            <p>message.text</p>
          </div>
          <img src={IMAGES.AVT_TEXT} />
        </div>
      </div>
      <div className="form--messages-chat">
        <div className="icons">
          <label htmlFor="file">
            <img src="./img.png" alt="" />
          </label>
          <input type="file" id="file" style={{ display: 'none' }} />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder={'Type a message...'} />
        <div className="emoji">
          <img src="./emoji.png" alt="" />
          <div className="picker"></div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default FormMessage;
