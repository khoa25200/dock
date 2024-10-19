import './FormAuth.less';
import './FormAuth.media.less';
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Flex, Input, Layout, Form } from 'antd';
import VerifyButton from '../../buttons/ButtonAccount/ButtonAccount';
import { verifyAccount } from '../../../libs/types/auth';
import { AccountUser } from '../../../libs/api/auth';

type OTPProps = {
  onChange: (text: string) => void;
  otp?: string;
};

const FormAuthPage: React.FC = () => {
  const { email } = useParams();
  const navigate = useNavigate();

  const [otp, setOtp] = useState<string>('');
  const [formAccountUser] = Form.useForm();

  const onChange: OTPProps['onChange'] = (text) => {
    if (!text) {
      console.error('Please input your OTP!');
    } else {
      setOtp(text);
    }
  };

  const sharedProps: OTPProps = {
    onChange,
  };

  const handleVerifyOTP = async () => {
    if (!email || !otp) {
      await formAccountUser.validateFields();
    } else {
      const VerifyEmail: verifyAccount = {
        otp: otp,
        email: email,
      };
      try {
        const response = await AccountUser.verifyEmail(VerifyEmail);
        if (response) {
          navigate(`/signin`);
        }
      } catch (error) {
        console.error('Error during sign up:', error);
      }
    }
  };

  return (
    <Layout className="auth">
      <h1 className="auth-title">Please check your email</h1>
      <p className="auth-email">
        we’re sending a code to{' '}
        <strong>{email ? email : 'namework@gmail.com'}</strong>
      </p>
      <Form className="auth-from" form={formAccountUser}>
        <Form.Item
          name="otp"
          rules={[{ required: true, message: 'Please input your OTP!' }]}
        >
          <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
        </Form.Item>
      </Form>
      <VerifyButton
        className="auth-button"
        title="Verify"
        onclick={handleVerifyOTP}
      />
      <div className="auth-content">
        Didn’t receive an email? <strong>Resend</strong>
      </div>
    </Layout>
  );
};

export default FormAuthPage;
