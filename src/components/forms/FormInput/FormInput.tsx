import React, { ReactNode } from 'react';
import { Form } from 'antd';

interface FormInputProps {
  name: string;
  error: string | null;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rules?: any[];
  className?: string;
  children: ReactNode;
  value?: string | number;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  error,
  rules = [],
  className,
  children,
}) => {
  const noWhitespaceValidator = (rule: string, value: string) => {
    if (value && value.startsWith(' ')) {
      return Promise.reject('Vui Lòng Không Nhập Khoảng Trắng!');
    }
    return Promise.resolve();
  };
  return (
    <Form.Item
      name={name}
      rules={[...rules, { validator: noWhitespaceValidator }]}
      help={error}
      className={className}
      validateStatus={error ? 'error' : undefined}
    >
      {children}
    </Form.Item>
  );
};

export default FormInput;
