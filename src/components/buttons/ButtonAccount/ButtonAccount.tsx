import './ButtonAccount.less'
import { Button } from 'antd';

interface ButtonProps {
  title: string;
  className?: string;
}

const ButtonAccount: React.FC<ButtonProps> = ({className, title}) => {
  return (
    <Button 
      className={`custom-button ${className}`} 
    >
        {title}
    </Button>
  );
};

export default ButtonAccount;