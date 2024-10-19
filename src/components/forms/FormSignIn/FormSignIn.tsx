import './FormSignIn.less';
import './FormSignIn.media.less';
import React from 'react';
import { Checkbox, Form, Input, Layout } from 'antd';
import SignUpButton from '../../buttons/ButtonAccount/ButtonAccount';
import SignUpGoogle from '../../buttons/ButtonAccountGoogle/ButtonAccountGoogle';
import { AccountUser } from '../../../libs/api/auth';
import { IUser } from '../../../libs/types/auth';
import { useNavigate } from 'react-router-dom';

const FormSignInPage: React.FC = () => {
  const navigate = useNavigate();
  const [formAccountUser] = Form.useForm();

  const handleSignIn = async () => {
    const formData = formAccountUser.getFieldsValue();
    try {
      const response = await AccountUser.loginUser(formData);
      if (response) {
        navigate('/chat');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
    }
    console.log(formData);

    formAccountUser.resetFields();
  };
  return (
    <Layout className="signin">
      <div className="signin-title">
        <h1 className="signin-title-name">Sign In</h1>
      </div>
      <Form className="signin-from" form={formAccountUser}>
        <Form.Item<IUser>
          className="signin-from-email"
          name="email"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Enter Email" />
        </Form.Item>
        <Form.Item<IUser>
          className="signin-from-password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Enter Password" />
        </Form.Item>
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
          title="Continue with Google"
        />
      </div>
      <div className="signin-content">
        <span>Already using DockChat?</span>
        <span>Sign in to an existing workspace</span>
      </div>
    </Layout>
  );
};

export default FormSignInPage;
