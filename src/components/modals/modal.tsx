import "./modal.less";

import React, { PropsWithChildren } from "react";
import { Modal } from "antd";

type TModelProps = {
  isModalOpen: boolean;
  setIsModalOpen: any;
};

const ModalCustom: React.FC<PropsWithChildren<TModelProps>> = ({ isModalOpen, setIsModalOpen, children }) => {
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalCustom;