import './FormSignUp.less';
import './FormSignUp.media.less';
import React from 'react';
import axios from 'axios';
import { Checkbox, Form, Input, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import SignUpButton from '../../buttons/ButtonAccount/ButtonAccount';
import SignUpGoogle from '../../buttons/ButtonAccountGoogle/ButtonAccountGoogle';

type FieldType = {
  username?: string;
  email?: string;
  password?: string;
};

const FormSignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [formAccountUser] = Form.useForm();

  const handleSubmitAccount = async () => {
    const formData = formAccountUser.getFieldsValue();
    try {
      const response = await axios.post(
        'http://47.129.183.26:8080/api/auth/sign-up',
        formData
      );
      if (response && response.data) {
        navigate(`/auth/${formData.email}`);
      }
    } catch (error) {
      console.error('Error during sign up:', error);
    }
    formAccountUser.resetFields();
  };
  return (
    <Layout className="signup">
      <div className="signup-title">
        <h1 className="signup-title-name">Sign Up</h1>
      </div>
      <Form className="signup-from" form={formAccountUser}>
        <Form.Item<FieldType>
          className="signup-from-name"
          name="username"
          rules={[{ required: true, message: 'Please input your fullname!' }]}
        >
          <Input placeholder="Enter FullName" />
        </Form.Item>
        <Form.Item<FieldType>
          className="signup-from-email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder="Enter Email" />
        </Form.Item>
        <Form.Item<FieldType>
          className="signup-from-password"
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
