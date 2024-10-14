import './FormEmail.less';
import './FormEmail.media.less';
import { Layout, Input } from 'antd';
import { IMAGES } from '../../../assets/images';
import ButtonAccount from '../../buttons/ButtonAccount/ButtonAccount';
import ButtonAccountGoogle from '../../buttons/ButtonAccountGoogle/ButtonAccountGoogle';

// type TModelProps = {
//     setIsModalOpen: any;
// };

const FormEmail = () => {
  return (
    <Layout className="modal-email">
      <div className="modal-email-logo">
        <img src={IMAGES.LOGO} alt="Logo DocK" />
      </div>
      <h1 className="modal-email-title">First, please enter you email !</h1>
      <p className="modal-email-note">We suggest using the email address you use at work.</p>
      <div className="modal-email-input">
        <Input type="email" placeholder="namework@dockchat.com" />
      </div>
      <ButtonAccount title="Continue" className="modal-email-continue" />
      <div className="modal-email-or">OR</div>
      <ButtonAccountGoogle title="Continue with Google" className="modal-email-google" />
      <div className="modal-email-content">
        <span>Already using DockChat?</span>
        <span>Sign in to an existing workspace</span>
      </div>
    </Layout>
  );
};

export default FormEmail;
