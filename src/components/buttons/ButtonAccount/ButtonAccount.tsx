import { ReactEventHandler } from 'react';
import './ButtonAccount.less';
import { Button } from 'antd';

interface ButtonProps {
  title: string;
  className?: string;
  onclick?: ReactEventHandler;
}

const ButtonAccount: React.FC<ButtonProps> = ({
  className,
  title,
  onclick,
}) => {
  return (
    <Button className={`button-account ${className}`} onClick={onclick}>
      {title}
    </Button>
  );
};

export default ButtonAccount;
