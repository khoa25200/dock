import './FormAuth.less';
import './FormAuth.media.less';
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Flex, Input, Layout } from 'antd';
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
  const onChange: OTPProps['onChange'] = (text) => {
    setOtp(text);
  };

  const sharedProps: OTPProps = {
    onChange,
  };

  const handleVerifyOTP = async () => {
    if (email) {
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
    } else {
      alert('Vui lòng nhập OTP');
    }
  };

  return (
    <Layout className="auth">
      <h1 className="auth-title">Please check your email</h1>
      <p className="auth-email">
        we’re sending a code to{' '}
        <strong>{email ? email : 'namework@gmail.com'}</strong>
      </p>
      <Flex gap="middle" align="flex-start" vertical className="auth-from">
        <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
      </Flex>
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
