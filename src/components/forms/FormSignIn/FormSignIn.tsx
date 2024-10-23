import './FormSignIn.less';
import './FormSignIn.media.less';
import React, { useState } from 'react';
import { Checkbox, Form, Input, Layout } from 'antd';
import SignUpButton from '../../buttons/ButtonAccount/ButtonAccount';
import SignUpGoogle from '../../buttons/ButtonAccountGoogle/ButtonAccountGoogle';
import { AccountUser } from '../../../libs/api/auth';
import { IUser, ToastMessage } from '../../../libs/types/auth';
import { useNavigate } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import useFormErrors from '../../../libs/hooks/useFormErrors';
import CustomAlert from '../../notifis/Alert';

const FormSignInPage: React.FC = () => {
  const navigate = useNavigate();
  const { clearErrors, errors, setFieldError } = useFormErrors();
  const [formAccountUser] = Form.useForm<IUser>();
  const [alertMessage, setAlertMessage] = useState<ToastMessage>();
  const handleSignIn = async () => {
    clearErrors();
    try {
      const formData = await formAccountUser.validateFields();
      const response = await AccountUser.loginUser(formData);
      if (response) {
        setAlertMessage({
          status: response.status,
          message: response.message,
        });
        setTimeout(() => {
          navigate('/chat');
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
  };
  return (
    <Layout className="signin">
      <div className="signin-title">
        <h1 className="signin-title-name">Sign In</h1>
      </div>
      {alertMessage && (
        <CustomAlert
          status={alertMessage.status === 'success' ? 'success' : 'error'}
          message={alertMessage.message}
        />
      )}
      <Form className="signin-from" form={formAccountUser}>
        <FormInput
          name="username"
          className="signin-from-email"
          error={errors.error}
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Enter your username" />
        </FormInput>
        <FormInput
          name="password"
          className="signin-from-password"
          error={errors.error}
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Enter Password" />
        </FormInput>
      </Form>
      <Checkbox className="signin-checkbox">
        I accept the Terms and Conditions.
      </Checkbox>
      <div className="signin-button">
        <SignUpButton
          className="signin-button-account"
          title="Sign In"
          onclick={handleSignIn}
        />
        <div className="signin-button-or">OR</div>
        <SignUpGoogle
          className="signin-button-google"
          title="Sign In with OTP"
          href="/sign-in-otp"
        />
      </div>
      <div className="signin-content">
        <span>Already using DockChat?</span>
        <a href="/signup">
          <span>Sign up account</span>
        </a>
      </div>
    </Layout>
  );
};

export default FormSignInPage;
