import FormEmail from "../../forms/FormEmail/FormEmail";
import "./ModalSignUpWithMail.less";
import { Modal } from "antd";

type TModelProps = {
  isModalOpen: boolean;
  setIsModalOpen: any;
};

const ModalCustom = ({ isModalOpen, setIsModalOpen }: TModelProps) => {
  
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        // closable={false}
      >
        <FormEmail 
          // setIsModalOpen={setIsModalOpen} 
        />
      </Modal>
    </>
  );
};

export default ModalCustom;
