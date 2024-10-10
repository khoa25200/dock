import './SidebarMessage.less';
import { ICONS } from '../../../../assets/icons';
import { IMAGES } from '../../../../assets/images';
function SidebarMessage() {
  return (
    <div className="sidebar-message">
      <div className="sidebar--message-inner">
        <div className="sidebar--message-header">
          <h1>KTC-FE-BASIC</h1>
          <img src={ICONS.ARROW_DOWN_LIGHT} alt="image error" />
        </div>
        <div className="sidebar--message-channels">
          <div className="sidebar--message-heading">
            <img src={ICONS.ARROW_DOWN_BOLD} alt="image error" />
            <h1>Channels</h1>
          </div>
          <div className="sidebar--channel-list">
            <ul>
              <li>
                <img src={ICONS.HASH} alt="image error" />
                <span>Code</span>
              </li>
              <li>
                <img src={ICONS.HASH} alt="image error" />
                <span>Code</span>
              </li>
              <li>
                <img src={ICONS.HASH} alt="image error" />
                <span>Code</span>
              </li>
            </ul>
            <div className="sidebar--btn-addChannel">
              <img src={ICONS.PLUS} />
              <span>Add channels</span>
            </div>
          </div>
        </div>
        <div className="sidebar--message-direct">
          <div className="sidebar--message-heading">
            <img src={ICONS.ARROW_DOWN_BOLD} alt="image error" />
            <h1>Messages</h1>
          </div>
          <div className="sidebar--direct-list">
            <ul>
              <li>
                <div className="user--message">
                  <img src={IMAGES.AVT_TEXT} alt="image error" />
                  <div className="online-indicator">
                    <span className="blink"></span>
                  </div>
                </div>
                <span>Nguyễn Long Duy</span>
              </li>
              <li>
                <div className="user--message">
                  <img src={IMAGES.AVT_TEXT} alt="image error" />
                  <div className="online-indicator">
                    <span className="blink"></span>
                  </div>
                </div>
                <span>Nguyễn Long Duy</span>
              </li>
              <li>
                <div className="user--message">
                  <img src={IMAGES.AVT_TEXT} alt="image error" />
                  <div className="online-indicator">
                    <span className="blink online"></span>
                  </div>
                </div>
                <span>Nguyễn Long Duy</span>
              </li>
              <li>
                <div className="user--message">
                  <img src={IMAGES.AVT_TEXT} alt="image error" />
                  <div className="online-indicator">
                    <span className="blink online"></span>
                  </div>
                </div>
                <span>Nguyễn Long Duy</span>
              </li>
              <li>
                <div className="user--message">
                  <img src={IMAGES.AVT_TEXT} alt="image error" />
                  <div className="online-indicator">
                    <span className="blink offline"></span>
                  </div>
                </div>
                <span>Nguyễn Long Duy</span>
              </li>
            </ul>
            <div className="sidebar--btn-addMessages">
              <img src={ICONS.PLUS} />
              <span>Add Colleagues</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarMessage;
