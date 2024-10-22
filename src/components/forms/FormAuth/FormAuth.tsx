import './FormAuth.less';
import './FormAuth.media.less';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Input, Layout, Form } from 'antd';
import VerifyButton from '../../buttons/ButtonAccount/ButtonAccount';
import { verifyAccount } from '../../../libs/types/auth';
import { AccountUser } from '../../../libs/api/auth';
import FormInput from '../FormInput/FormInput';
import useFormErrors from '../../../libs/hooks/useFormErrors';

const FormAuthPage: React.FC = () => {
  const { email } = useParams();
  const navigate = useNavigate();
  const { clearErrors, errors, setFieldError } = useFormErrors();
  const [formAccountUser] = Form.useForm<verifyAccount>();

  const handleVerifyOTP = async () => {
    clearErrors();
    const form = formAccountUser.validateFields();
    if (email) {
      const VerifyEmail = {
        email: email,
        otp: (await form).otp,
      };
      try {
        const response = await AccountUser.verifyEmail(VerifyEmail);
        if (response) {
          navigate(`/signin`);
        }
      } catch (error) {}
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
        <FormInput
          name="otp"
          error={errors.error}
          onChange={() => setFieldError('email', null)}
          rules={[{ required: true, message: 'Please input your OTP!' }]}
        >
          <Input.OTP formatter={(str) => str.toUpperCase()} />
        </FormInput>
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
