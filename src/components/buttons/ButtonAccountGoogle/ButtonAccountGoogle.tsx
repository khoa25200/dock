import './ButtonAccountGoogle.less';
import { Button } from 'antd';

interface ButtonProps {
  title: string;
  className?: string;
  href?: string;
}

const ButtonAccountGoogle: React.FC<ButtonProps> = ({
  className,
  title,
  href,
}) => {
  return (
    <Button href={href} className={`button-google ${className}`}>
      {title}
    </Button>
  );
};

export default ButtonAccountGoogle;
