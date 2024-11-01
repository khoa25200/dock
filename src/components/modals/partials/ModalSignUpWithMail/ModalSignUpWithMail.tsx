import ModalCustom from "../../modal";
import FormEmail from "../../../forms/FormEmail/FormEmail";

type TModelProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
};

const ModalFormEmail: React.FC<TModelProps> = ({isModalOpen, setIsModalOpen}) => {
  return (
      <ModalCustom isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} closable={true}>
          <FormEmail />
      </ModalCustom>
  )
}

export default ModalFormEmail;
