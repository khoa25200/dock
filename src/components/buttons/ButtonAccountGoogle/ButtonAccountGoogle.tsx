import './ButtonAccountGoogle.less'
import { Button } from 'antd';
import GoogleIcon from '../../../assets/icons/google.svg'

interface ButtonProps {
  title: string;
  className?: string;
}

const ButtonAccountGoogle: React.FC<ButtonProps> = ({className, title}) => {
  return (
    <Button 
      className={`custom-button ${className}`} 
    >
        <img className='icon-google' src={GoogleIcon} alt="Google" />
        {title}
    </Button>
  );
};

export default ButtonAccountGoogle;