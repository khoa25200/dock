import "./ButtonCreate.less";
import React from "react";

import { Button } from "antd";
// import { useNavigate } from "react-router-dom";

interface ButtonProps {
  title: string;
  className?: string;
}

const ButtonCreate: React.FC<ButtonProps> = ({ title, className }) => {
//   const navigate = useNavigate();

//   const goBack = () => {
//     navigate(-1);
//   };

  return (
    <Button className={`button-create ${className}`}>
      {title}
    </Button>
  );
};

export default ButtonCreate;
