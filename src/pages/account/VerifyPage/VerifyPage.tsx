import React from 'react';
import LayoutAcount from '../../../layouts/LayoutAccount/LayoutAccount';
import FormVerifyPage from '../../../components/forms/FormVerify/FormVerify';

const VerifyPage: React.FC = () => {
  return (
    <LayoutAcount>
      <FormVerifyPage />
    </LayoutAcount>
  );
};

export default VerifyPage;
