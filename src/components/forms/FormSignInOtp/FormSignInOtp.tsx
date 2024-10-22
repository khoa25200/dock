import './FormSignInOtp.less';
import './FormSignInOtp.media.less';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Layout, Form, Checkbox } from 'antd';
import VerifyButton from '../../buttons/ButtonAccount/ButtonAccount';
import { verifyAccount } from '../../../libs/types/auth';
import { AccountUser } from '../../../libs/api/auth';
import FormInput from '../FormInput/FormInput';
import useFormErrors from '../../../libs/hooks/useFormErrors';

const FormSignInOtp: React.FC = () => {
  const [isLoginOtp, setIsLoginOtp] = useState(true);
  const { clearErrors, errors, setFieldError } = useFormErrors();
  const navigate = useNavigate();

  const [formEmailUser] = Form.useForm<verifyAccount>();
  const [formOtpUser] = Form.useForm<verifyAccount>();

  const handleRequestOTP = async () => {
    setIsLoginOtp((isLoginOtp) => !isLoginOtp);
    clearErrors();
    try {
      const formData = await formEmailUser.validateFields();
      if (response) {
      }
    } catch (error) {
      console.error('Error during sign up:', error);
    }

    formEmailUser.resetFields();
  };

  const handleSignInWithOTP = async () => {
    clearErrors();
    const formData = await formOtpUser.validateFields();
    console.log(formData);
  };
  return (
    <Layout className="signIn--otp">
      <div className="signIn--title">
        <h1 className="signIn--title-name">Sign In With OTP</h1>
      </div>
      {isLoginOtp ? (
        <>
          <Form className="signIn--from" form={formEmailUser}>
            <FormInput
              name="email"
              error={errors.email}
              className="signIn-from-email"
              onChange={() => setFieldError('email', null)}
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
          <Form className="signIn--from" form={formOtpUser}>
            <FormInput
              name="email"
              error={errors.email}
              className="signIn-from-email"
              onChange={() => setFieldError('email', null)}
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'The input is not valid Email!' },
              ]}
            >
              <Input placeholder="Enter your email" />
            </FormInput>
            <FormInput
              name="otp"
              error={errors.otp}
              onChange={() => setFieldError('email', null)}
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
