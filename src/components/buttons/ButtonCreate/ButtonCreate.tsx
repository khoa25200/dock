import "./ButtonCreate.less";
import React from "react";

import { Button } from "antd";
// import { useNavigate } from "react-router-dom";

interface ButtonProps {
  title: string;
  className?: string;
  showModal?: () => void;
}

const ButtonCreate: React.FC<ButtonProps> = ({ title, className, showModal }) => {
//   const navigate = useNavigate();
  return (
    <Button onClick={showModal} className={`button-create ${className}`}>
      {title}
    </Button>
  );
};

export default ButtonCreate;
