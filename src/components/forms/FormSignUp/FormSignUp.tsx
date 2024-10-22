import "./FormSignUp.less";
import "./FormSignUp.media.less";
import React, { useState, useEffect } from "react";
import { Checkbox, Form, Input, Layout } from "antd";
import SignUpButton from "../../buttons/ButtonAccount/ButtonAccount";
import SignUpGoogle from "../../buttons/ButtonAccountGoogle/ButtonAccountGoogle";
import Loading from "../../loadings/Loading";

type FieldType = {
  fullname?: string;
  email?: string;
  password?: string;
};

const FormSignUpPage: React.FC = () => {
  return (
    <Layout className="signup">
      <div className="signup-title">
        <h1 className="signup-title-name">Sign Up</h1>
      </div>
      <Form className="signup-from">
        <Form.Item<FieldType>
          className="signup-from-name"
          name="fullname"
          rules={[{ required: true, message: "Please input your fullname!" }]}
        >
          <Input placeholder="Enter FullName" />
        </Form.Item>
        <Form.Item<FieldType>
          className="signup-from-email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Enter Email" />
        </Form.Item>
        <Form.Item<FieldType>
          className="signup-from-password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
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
