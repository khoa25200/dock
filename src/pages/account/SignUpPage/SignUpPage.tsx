import React from "react";
import LayoutAcount from "../../../layouts/LayoutAccount/LayoutAccount";
import FormSignUpPage from "../../../components/forms/FormSignUp/FormSignUp";

const SignUpPage: React.FC = () => {
  return (
    <LayoutAcount>
      <FormSignUpPage />
    </LayoutAcount>
  );
};

export default SignUpPage;
