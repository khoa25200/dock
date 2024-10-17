import './FormAuth.less';
import './FormAuth.media.less';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Flex, Input, Layout } from 'antd';
import VerifyButton from '../../buttons/ButtonAccount/ButtonAccount';

type OTPProps = {
  onChange: (text: string) => void;
  otp?: string;
};

const FormAuthPage: React.FC = () => {
  const { email } = useParams();

  const [otp, setOtp] = useState<string>('');

  const onChange: OTPProps['onChange'] = (text) => {
    console.log('onChange:', text);
    setOtp(text);
  };

  const sharedProps: OTPProps = {
    onChange,
  };

  const handleVerifyOTP = () => {
    if (otp) {
      console.log('OTP nè:', otp);
    } else {
      console.log('Vui lòng nhập OTP');
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
