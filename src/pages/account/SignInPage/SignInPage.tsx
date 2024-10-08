import React from "react";
import LayoutAcount from "../../../layouts/LayoutAccount/LayoutAccount";
import FormSignInPage from "../../../components/forms/FormSignIn/FormSignIn";

const SignUpPage: React.FC = () => {
  return (
    <LayoutAcount>
      <FormSignInPage />
    </LayoutAcount>
  );
};

export default SignUpPage;
