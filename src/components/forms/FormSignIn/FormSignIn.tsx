import './FormSignIn.less';
import './FormSignIn.media.less';
import React, { useEffect } from 'react';
import { Checkbox, Form, Input, Layout } from 'antd';
import SignUpButton from '../../buttons/ButtonAccount/ButtonAccount';
import { IUser } from '../../../libs/types/auth';
import { useNavigate } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import useFormErrors from '../../../libs/hooks/useFormErrors';
import CustomAlert from '../../notifis/Alert';
import { authActions } from '../../../libs/redux/auth/authSlice';
import {
  useAppSelector,
  useAppDispatch,
} from '../../../libs/hooks/useSelectorApp';
import SignUpGoogle from '../../buttons/ButtonAccountGoogle/ButtonAccountGoogle';

const FormSignInPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formAccountUser] = Form.useForm<IUser>();
  const { clearErrors, errors, setFieldError } = useFormErrors();
  const { isLoggedIn, error } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/chat');
    }
    if (error) {
      const errorMessage = error || 'An unexpected error occurred';
      setFieldError('error', errorMessage);
    }
  }, [isLoggedIn, error, navigate, errors]);
  const handleSignIn = async () => {
    clearErrors();
    try {
      const formData = await formAccountUser.validateFields();
      dispatch(authActions.signIn(formData));
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || 'An unexpected error occurred';
      setFieldError('error', errorMessage);
    }
  };
  return (
    <Layout className="signin">
      <div className="signin-title">
        <h1 className="signin-title-name">Sign In</h1>
      </div>
      {isLoggedIn && (
        <CustomAlert
          status="success"
          message="Sign in successful. Redirecting..."
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
