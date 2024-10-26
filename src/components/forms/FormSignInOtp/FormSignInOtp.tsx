import './FormSignInOtp.less';
import './FormSignInOtp.media.less';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Layout, Form } from 'antd';
import VerifyButton from '../../buttons/ButtonAccount/ButtonAccount';
import { ToastMessage, verifyAccount } from '../../../libs/types/auth';
import { AccountUser } from '../../../libs/api/auth';
import FormInput from '../FormInput/FormInput';
import useFormErrors from '../../../libs/hooks/useFormErrors';
import CustomAlert from '../../notifis/Alert';

const FormSignInOtp: React.FC = () => {
  const navigate = useNavigate();
  const [isLoginOtp, setIsLoginOtp] = useState(true);
  const [email, setEmail] = useState<string | undefined>();

  const { clearErrors, errors, setFieldError } = useFormErrors();
  const [alertMessage, setAlertMessage] = useState<ToastMessage>();

  const [formEmailUser] = Form.useForm<verifyAccount>();
  const [formOtpUser] = Form.useForm<verifyAccount>();

  const handleRequestOTP = async () => {
    clearErrors();
    try {
      const formData = await formEmailUser.validateFields();
      const response = await AccountUser.requestOtp(formData);
      setEmail(formData.email);
      if (response) {
        setAlertMessage({ status: response.status, message: response.message });
        setIsLoginOtp((isLoginOtp) => !isLoginOtp);
      }
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || 'An unexpected error occurred';
      setFieldError('error', errorMessage);
    }
  };

  const handleSignInWithOTP = async () => {
    clearErrors();
    try {
      const formData = await formEmailUser.validateFields();
      const response = await AccountUser.loginUserWithOTP(formData);
      if (response) {
        setAlertMessage({ status: response.status, message: response.message });
        setTimeout(() => navigate('/chat'), 2000);
      }
      formEmailUser.resetFields();
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || 'An unexpected error occurred';
      setFieldError('error', errorMessage);
    }
  };

  return (
    <Layout className="signIn--otp">
      <div className="signIn--title">
        <h1 className="signIn--title-name">Sign In With OTP</h1>
      </div>
      {isLoginOtp ? (
        <>
          {alertMessage && (
            <CustomAlert
              status={alertMessage.status}
              message={alertMessage.message}
            />
          )}
          <Form className="signIn--from" form={formEmailUser}>
            <FormInput
              name="email"
              error={errors.errors}
              className="signIn-from-email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'The input is not valid Email!' },
              ]}
            >
              <Input placeholder="Enter your email" />
            </FormInput>
          </Form>
          <VerifyButton
            className="sign--in-button"
            title="Request OTP"
            onclick={handleRequestOTP}
          />
        </>
      ) : (
        <>
          {alertMessage && (
            <CustomAlert
              status={alertMessage.status}
              message={alertMessage.message}
            />
          )}
          <Form className="signIn--from" form={formOtpUser}>
            <FormInput
              name="email"
              error={errors.errors}
              className="signIn-from-email"
              onChange={() => setFieldError('errors', null)}
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'The input is not valid Email!' },
              ]}
            >
              <Input placeholder="Please input your Email!" value={email} />
            </FormInput>
            <FormInput
              name="otp"
              error={errors.email}
              rules={[{ required: true, message: 'Please input your OTP!' }]}
            >
              <Input.OTP formatter={(str) => str.toUpperCase()} />
            </FormInput>
          </Form>
          <VerifyButton
            className="sign--in-button"
            title="Sign In"
            onclick={handleSignInWithOTP}
          />
        </>
      )}
      <div className="sign--in-notice">
        Didn’t receive an email?{' '}
        <strong onClick={handleRequestOTP}>Resend</strong>
      </div>
    </Layout>
  );
};

export default FormSignInOtp;
