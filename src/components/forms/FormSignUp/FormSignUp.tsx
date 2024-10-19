import './FormSignUp.less';
import './FormSignUp.media.less';
import React from 'react';
import { Checkbox, Form, Input, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import SignUpButton from '../../buttons/ButtonAccount/ButtonAccount';
import SignUpGoogle from '../../buttons/ButtonAccountGoogle/ButtonAccountGoogle';
import { IUser } from '../../../libs/types/auth';
import { AccountUser } from '../../../libs/api/auth';

const FormSignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [formAccountUser] = Form.useForm();

  const handleSubmitAccount = async () => {
    try {
      const formData = await formAccountUser.validateFields();
      const response = await AccountUser.registerUser(formData);
      if (response) {
        navigate(`/auth/${formData.email}`);
      }
      formAccountUser.resetFields();
    } catch (error) {}
  };

  return (
    <Layout className="signUp">
      <div className="signUp-title">
        <h1 className="signUp-title-name">Sign Up</h1>
      </div>
      <Form className="signUp-from" form={formAccountUser}>
        <Form.Item<IUser>
          className="signUp-from-name"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Enter Username" />
        </Form.Item>
        <Form.Item<IUser>
          className="signUp-from-email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
            {
              type: 'email',
              message: 'The input is not valid email!',
            },
          ]}
        >
          <Input placeholder="Enter Email" />
        </Form.Item>
        <Form.Item<IUser>
          className="signUp-from-password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Enter Password" />
        </Form.Item>
      </Form>
      <Checkbox className="signup-checkbox">
        I accept the Terms and Conditions.
      </Checkbox>
      <div className="signup-button">
        <SignUpButton
          className="signup-button-account"
          title="Sign Up Account"
          onclick={handleSubmitAccount}
        />
        <div className="signup-button-or">OR</div>
        <SignUpGoogle
          className="signup-button-google"
          title="Continue with Google"
        />
      </div>
      <div className="signup-content">
        <span>Already using DockChat?</span>
        <span>Sign in to an existing workspace</span>
      </div>
    </Layout>
  );
};
export default FormSignUpPage;
