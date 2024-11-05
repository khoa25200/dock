import "./ButtonLaunch.less";
import React from "react";

import { Button } from "antd";
// import { useNavigate } from "react-router-dom";

interface ButtonProps {
  title: string;
  className?: string;
}

const ButtonLaunch: React.FC<ButtonProps> = ({ title, className }) => {
//   const navigate = useNavigate();

//   const goBack = () => {
//     navigate(-1);
//   };

  return (
    <Button className={`button-launch ${className}`}>
      {title}
    </Button>
  );
};

export default ButtonLaunch;