import React from 'react';
import './ButtonFooter.less'
import { Button } from 'antd';

interface ButtonProps {
  name: string;
  className?: string;
  color?: string;
  action?: () => void;
}

const ButtonFooter: React.FC<ButtonProps> = ({className, name, color, action }) => {
  return (
    <Button 
      className={`custom-button ${className}`} 
      onClick={action} 
      style={{ backgroundColor: color }}
    >
      {name}
    </Button>
  );
};

export default ButtonFooter;
