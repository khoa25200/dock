// src/FormInput.tsx
import React from 'react';
import { Form, Input } from 'antd';

interface FormInputProps {
  name: string;
  label?: string;
  error: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rules?: any[];
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  onChange,
  error,
  rules,
}) => {
  return (
    <Form.Item
      name={name}
      rules={rules}
      help={error}
      validateStatus={error ? 'error' : undefined}
    >
      <Input onChange={onChange} placeholder={label} />
    </Form.Item>
  );
};

export default FormInput;
