import './FormEmail.less';
import './FormEmail.media.less';

import { Layout, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';

import { IMAGES } from '../../../assets/images';
import { AccountUser } from '../../../libs/api/auth';
import useFormErrors from '../../../libs/hooks/useFormErrors';
import ButtonAccount from '../../buttons/ButtonAccount/ButtonAccount';
import ButtonAccountGoogle from '../../buttons/ButtonAccountGoogle/ButtonAccountGoogle';
import { ToastMessage } from '../../../libs/types/auth';
import { useState } from 'react';
import CustomAlert from '../../notifis/Alert';

const FormEmail: React.FC = () => {
  const navigate = useNavigate();
  const [formEmailUser] = Form.useForm();
  const { clearErrors, errors, setFieldError } = useFormErrors();
  const [alertMessage, setAlertMessage] = useState<ToastMessage>();
  const handleSubmitAccount = async () => {
    clearErrors();
    try {
      const formData = await formEmailUser.validateFields();
      const response = await AccountUser.registerWithEmail(formData);
      if (response) {
        setAlertMessage({ status: response.status, message: response.message });
        navigate(`/verify?email=${formData.email}`);
      }
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || 'An unexpected error occurred';
      setFieldError('error', errorMessage);
    }
  };

  return (
    <Layout className="modal-email">
      <div className="modal-email-logo">
        <img src={IMAGES.LOGO} alt="Logo DocK" />
      </div>
      {alertMessage && (
        <CustomAlert
          status={alertMessage.status}
          message={alertMessage.message}
        />
      )}
      <h1 className="modal-email-title">First, please enter your email!</h1>
      <p className="modal-email-note">
        We suggest using the email address you use at work.
      </p>
      <Form className="modal-email-input" form={formEmailUser}>
        <FormInput
          name="email"
          error={errors.error}
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'The input is not valid Email!' },
          ]}
        >
          <Input placeholder="Enter your email" />
        </FormInput>
      </Form>
      <ButtonAccount
        title="Continue with email"
        className="modal-email-continue"
        onclick={handleSubmitAccount}
      />
      <div className="modal-email-or">OR</div>
      <ButtonAccountGoogle
        href="/signup"
        title="Continue with register account"
        className="modal-email-google"
      />
      <div className="modal-email-content">
        <a href="/request-otp">
          <span>Already using DockChat?</span>
        </a>
        <a>
          <span>Sign in to an existing workspace</span>
        </a>
      </div>
    </Layout>
  );
};

export default FormEmail;
