import "./modal.less";

import { Modal } from "antd";
import React, { PropsWithChildren } from "react";

type TModelProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  closable: boolean;
};

const ModalCustom: React.FC<PropsWithChildren<TModelProps>> = ({ 
    isModalOpen,
    setIsModalOpen,
    closable,
    children 
  }) => {
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        closable={closable}
        footer={null}
        maskClosable={false}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalCustom;