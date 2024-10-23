import React from 'react';
import LayoutAcount from '../../../layouts/LayoutAccount/LayoutAccount';
import FormRequestOtpPage from '../../../components/forms/FormSignInOtp/FormSignInOtp';

const SignInOtpPage: React.FC = () => {
  return (
    <LayoutAcount>
      <FormRequestOtpPage />
    </LayoutAcount>
  );
};

export default SignInOtpPage;
