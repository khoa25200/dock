import './ButtonAccount.less'

import { Button } from 'antd';
import { useNavigate } from 'react-router-dom'
interface ButtonProps {
  title: string;
  className?: string;
  navigation?: string
  onClick?: () => void;
}

const ButtonAccount: React.FC<ButtonProps> = ({className, title, navigation, onClick}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    if (navigation) {
      navigate(navigation);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button 
      className={`button-account ${className}`}
      onClick={handleClick}
    >
        {title}
    </Button>
  );
};

export default ButtonAccount;