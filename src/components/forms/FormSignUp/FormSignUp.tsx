import './FormSignUp.less';
import './FormSignUp.media.less';
import React, { useState } from 'react';
import { Checkbox, Form, Input, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import SignUpButton from '../../buttons/ButtonAccount/ButtonAccount';
import { IUser, ToastMessage } from '../../../libs/types/auth';
import { AccountUser } from '../../../libs/api/auth';
import FormInput from '../FormInput/FormInput';
import useFormErrors from '../../../libs/hooks/useFormErrors';
import CustomAlert from '../../notifis/Alert';

const FormSignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState<ToastMessage>();
  const [formAccountUser] = Form.useForm<IUser>();
  const { clearErrors, errors, setFieldError } = useFormErrors();
  const handleSubmitAccount = async () => {
    clearErrors();
    try {
      const formData = await formAccountUser.validateFields();
      const response = await AccountUser.registerUser(formData);
      if (response.status === 'success') {
        setAlertMessage({
          status: response.status,
          message: response.message,
        });
        setTimeout(() => {
          navigate(`/verify?email=${formData.email}`);
        }, 2500);
      }
      formAccountUser.resetFields();
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || 'An unexpected error occurred';
      setFieldError('error', errorMessage);
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
