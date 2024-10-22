import './FormSignIn.less';
import './FormSignIn.media.less';
import React, { useState } from 'react';
import { Checkbox, Form, Input, Layout, notification } from 'antd';
import SignUpButton from '../../buttons/ButtonAccount/ButtonAccount';
import SignUpGoogle from '../../buttons/ButtonAccountGoogle/ButtonAccountGoogle';
import { AccountUser } from '../../../libs/api/auth';
import { IUser } from '../../../libs/types/auth';
import { useNavigate } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import useFormErrors from '../../../libs/hooks/useFormErrors';

const FormSignInPage: React.FC = () => {
  const [status, setStatus] = useState<
    'success' | 'info' | 'warning' | 'error'
  >('info');
  const [message, setMessage] = useState<string>('Sign In Successful');
  const [description, setDescription] = useState<string>(
    'You have successfully signed in!'
  );

  const handleClick = () => {
    notification[status]({
      message: message,
      description: description,
    });
  };
  const navigate = useNavigate();
  const { clearErrors, errors, setFieldError } = useFormErrors();
  const [formAccountUser] = Form.useForm();

  const handleSignIn = async () => {
    clearErrors();
    try {
      const formData = await formAccountUser.validateFields();
      const response = await AccountUser.loginUser(formData);
      if (response) {
        navigate('/chat');
      }
      formAccountUser.resetFields();
    } catch (error) {}
  };
  return (
    <Layout className="signin">
      <div className="signin-title">
        <h1 className="signin-title-name">Sign In</h1>
      </div>
      <Form className="signin-from" form={formAccountUser}>
        <FormInput
          name="email"
          className="signin-from-email"
          error={errors.email}
          onChange={() => setFieldError('email', null)}
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'The input is not valid Email!' },
          ]}
        >
          <Input placeholder="Enter your email" />
        </FormInput>
        <FormInput
          name="password"
          className="signin-from-password"
          error={errors.email}
          onChange={() => setFieldError('email', null)}
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
          onclick={handleClick}
          // navigation='/chat'
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
