import "./ButtonBack.less";
import React from "react";

import { Button } from "antd";
import { ICONS } from "../../../assets/icons";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  title: string;
  className?: string;
}

const ButtonBack: React.FC<ButtonProps> = ({ title, className }) => {
    const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Button className={`button-back ${className}`} onClick={goBack}>
      <img src={ICONS.ARROW_LEFT} alt="Arrow left" className="icon" />
      {title}
    </Button>
  );
};

export default ButtonBack;
