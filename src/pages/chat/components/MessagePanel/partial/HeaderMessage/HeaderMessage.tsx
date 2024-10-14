import { ICONS } from '../../../../../../assets/icons';
import './HeaderMessage.less';
const HeaderMessage = () => {
  return (
    <div className="header--message">
      <img src={ICONS.HASH} />
      <h1>notice</h1>
    </div>
  );
};
export default HeaderMessage;
