import './FormSignUp.less';
import './FormSignUp.media.less';
import React, { useState } from 'react';
import { Checkbox, Form, Input, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import SignUpButton from '../../buttons/ButtonAccount/ButtonAccount';
import SignUpGoogle from '../../buttons/ButtonAccountGoogle/ButtonAccountGoogle';
import { IUser, ToastMessage } from '../../../libs/types/auth';
import { AccountUser } from '../../../libs/api/auth';
import FormInput from '../FormInput/FormInput';
import useFormErrors from '../../../libs/hooks/useFormErrors';
import CustomAlert from '../../notifis/Alert';

const FormSignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [formAccountUser] = Form.useForm<IUser>();
  const { clearErrors, errors, setFieldError } = useFormErrors();
  const [alertMessage, setAlertMessage] = useState<ToastMessage>();
  const handleSubmitAccount = async () => {
    clearErrors();
    try {
      const formData = await formAccountUser.validateFields();
      const response = await AccountUser.registerUser(formData);
      if (response) {
        setAlertMessage({
          status: response.status,
          message: response.message,
        });
        setTimeout(() => {
          navigate(`/verify?email=${formData.email}`);
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
    <Layout className="signUp">
      <div className="signUp-title">
        <h1 className="signUp-title-name">Sign Up</h1>
      </div>
      {alertMessage && (
        <CustomAlert
          status={alertMessage.status === 'success' ? 'success' : 'error'}
          message={alertMessage.message}
        />
      )}
      <Form className="signUp-from" form={formAccountUser}>
        <FormInput
          name="username"
          className="signUp-from-name"
          error={errors.error}
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Enter your username" />
        </FormInput>
        <FormInput
          name="email"
          className="signUp-from-email"
          error={errors.error}
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'The input is not valid Email!' },
          ]}
        >
          <Input placeholder="Enter your email" />
        </FormInput>
        <FormInput
          name="password"
          className="signUp-from-password"
          error={errors.error}
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Enter Password" />
        </FormInput>
      </Form>
      <Checkbox className="signUp-checkbox">
        I accept the Terms and Conditions.
      </Checkbox>
      <div className="signUp-button">
        <SignUpButton
          className="signUp-button-account"
          title="Sign Up Account"
          onclick={handleSubmitAccount}
        />
        <div className="signUp-button-or">OR</div>
        <SignUpGoogle
          className="signUp-button-google"
          title="Continue with Google"
        />
      </div>
      <div className="signUp-content">
        <span>Already using DockChat?</span>
        <a href="/signin">
          <span>Sign in to an existing workspace</span>
        </a>
      </div>
    </Layout>
  );
};

export default FormSignUpPage;
