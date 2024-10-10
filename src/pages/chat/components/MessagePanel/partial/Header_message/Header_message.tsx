import { ICONS } from '../../../../../../assets/icons';
import './Header_message.less';
const HeaderMessage = () => {
  return (
    <div className="header--message">
      <img src={ICONS.HASH} />
      <h1>notice</h1>
    </div>
  );
};
export default HeaderMessage;
