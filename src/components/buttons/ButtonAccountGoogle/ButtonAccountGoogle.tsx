import './ButtonAccountGoogle.less'
import { Button } from 'antd';
import { ICONS } from '../../../assets/icons/index';

interface ButtonProps {
  title: string;
  className?: string;
}

const ButtonAccountGoogle: React.FC<ButtonProps> = ({className, title}) => {
  return (
    <Button 
      className={`custom-button ${className}`} 
    >
        <img className='icon-google' src={ICONS.GOOGLE} alt="Google" />
        {title}
    </Button>
  );
};

export default ButtonAccountGoogle;