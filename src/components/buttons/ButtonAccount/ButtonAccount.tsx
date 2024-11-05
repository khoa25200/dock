import { ReactEventHandler } from 'react';
import './ButtonAccount.less';
import { Button } from 'antd';
interface ButtonProps {
  title: string;
  className?: string;
  href?: string;
  onclick?: ReactEventHandler;
}

const ButtonAccount: React.FC<ButtonProps> = ({
  className,
  title,
  onclick,
  href,
}) => {
  return (
    <Button
      href={href}
      className={`button-account ${className}`}
      onClick={onclick}
    >
      {title}
    </Button>
  );
};

export default ButtonAccount;
