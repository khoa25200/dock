// src/FormInput.tsx
import React, { ReactNode } from 'react';
import { Form } from 'antd';

interface FormInputProps {
  name: string;
  error: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rules?: any[];
  className?: string;
  children: ReactNode;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  error,
  rules,
  className,
  children,
}) => {
  return (
    <Form.Item
      name={name}
      rules={rules}
      help={error}
      className={className}
      validateStatus={error ? 'error' : undefined}
    >
      {children}
    </Form.Item>
  );
};

export default FormInput;
