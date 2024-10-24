import './FormVerify.less';
import './FormVerify.media.less';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Layout, Form } from 'antd';
import VerifyButton from '../../buttons/ButtonAccount/ButtonAccount';
import { ToastMessage, verifyAccount } from '../../../libs/types/auth';
import { AccountUser } from '../../../libs/api/auth';
import FormInput from '../FormInput/FormInput';
import useFormErrors from '../../../libs/hooks/useFormErrors';
import useQuery from '../../../libs/hooks/useQuery';
import CustomAlert from '../../notifis/Alert';

const FormVerifyPage: React.FC = () => {
  const query = useQuery();
  const email = query.get('email');
  const navigate = useNavigate();
  const { clearErrors, errors, setFieldError } = useFormErrors();
  const [formAccountUser] = Form.useForm<verifyAccount>();
  const [alertMessage, setAlertMessage] = useState<ToastMessage>();

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
          setAlertMessage({
            status: response.status,
            message: response.message,
          });
          setTimeout(() => {
            navigate(`/signin`);
          }, 5000);
        }
        formAccountUser.resetFields();
      } catch (error: unknown) {
        if (error instanceof Error && (error as any).response) {
          const errorResponse = (error as any).response.data;
          const errorMessage = errorResponse.message;
          setFieldError('error', errorMessage);
        } else {
          console.error('An unexpected error occurred:', error);
        }
      }
    }
  };

  return (
    <Layout className="auth">
      {alertMessage && (
        <CustomAlert
          status={alertMessage.status === 'success' ? 'success' : 'error'}
          message={alertMessage.message}
        />
      )}
      <h1 className="auth-title">Please check your email</h1>
      <p className="auth-email">
        we’re sending a code to{' '}
        <strong>{email ? email : 'namework@gmail.com'}</strong>
      </p>
      <Form className="auth-from" form={formAccountUser}>
        <FormInput
          name="otp"
          error={errors.error}
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

export default FormVerifyPage;
