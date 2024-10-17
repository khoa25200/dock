import './FormSignIn.less';
import './FormSignIn.media.less';
import React from 'react';
import axios from 'axios';
import { Checkbox, Form, Input, Layout } from 'antd';
import SignUpButton from '../../buttons/ButtonAccount/ButtonAccount';
import SignUpGoogle from '../../buttons/ButtonAccountGoogle/ButtonAccountGoogle';

type FieldType = {
  username?: string;
  password?: string;
};

const FormSignInPage: React.FC = () => {
  const [formAccountUser] = Form.useForm();

  const handleSignIn = async () => {
    const formData = formAccountUser.getFieldsValue();
    const data = await axios.post(
      'http://47.129.183.26:8080/api/auth/sign-in',
      formData
    );
    console.log(data);

    formAccountUser.resetFields();
  };
  return (
    <Layout className="signin">
      <div className="signin-title">
        <h1 className="signin-title-name">Sign In</h1>
      </div>
      <Form className="signin-from">
        <Form.Item<FieldType>
          className="signin-from-email"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Enter Email" />
        </Form.Item>
        <Form.Item<FieldType>
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
