import "./FormSignUp.less";
import "./FormSignUp.media.less";
import React, { useState, useEffect } from "react";
import { Checkbox, Form, Input, Layout } from "antd";
import SignUpButton from "../../buttons/ButtonAccount/ButtonAccount";
import SignUpGoogle from "../../buttons/ButtonAccountGoogle/ButtonAccountGoogle";

type FieldType = {
  fullname?: string;
  email?: string;
  password?: string;
};

const FormSignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const [formAccountUser] = Form.useForm<IUser>();

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
