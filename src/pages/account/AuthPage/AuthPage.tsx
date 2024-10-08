import React from "react";
import LayoutAcount from "../../../layouts/LayoutAccount/LayoutAccount";
import FormAuthPage from "../../../components/forms/FormAuth/FormAuth";

const AuthPage: React.FC = () => {
  return (
    <LayoutAcount>
      <FormAuthPage />
    </LayoutAcount>
  );
};

export default AuthPage;