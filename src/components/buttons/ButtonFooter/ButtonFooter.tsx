import React from 'react';
import './ButtonFooter.less';
import { Button } from 'antd';

interface ButtonProps {
  title: string;
  className?: string;
  type?: string;
}

const ButtonFooter: React.FC<ButtonProps> = ({
  className,
  title,
  type = 'primary',
}) => {
  return (
    <Button className={`button-footer ${className} ${type}`}>{title}</Button>
  );
};

export default ButtonFooter;
