import "./ButtonMore.less";
import React from "react";

import { Button } from "antd";
// import { useNavigate } from "react-router-dom";

interface ButtonProps {
  title: string;
  className?: string;
  icon?: string;
  alt?: string;
  onClick?: () => void;
}

const ButtonMore: React.FC<ButtonProps> = ({ title, className, icon, alt, onClick }) => {
//   const navigate = useNavigate();

//   const goBack = () => {
//     navigate(-1);
//   };

  return (
    <Button 
      className={`button-more ${className}`}
      onClick={onClick}
    >
      {title}
      <img src={icon} alt={alt} />
    </Button>
  );
};

export default ButtonMore;