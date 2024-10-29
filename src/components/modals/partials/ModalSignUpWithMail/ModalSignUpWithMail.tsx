import ModalCustom from "../../modal";
import FormEmail from "../../../forms/FormEmail/FormEmail";

type TModelProps = {
  isModalOpen: boolean;
  setIsModalOpen: any;
};

const ModalFormEmail: React.FC<TModelProps> = ({isModalOpen, setIsModalOpen}) => {
  return (
      <ModalCustom isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <FormEmail />
      </ModalCustom>
  )
}

export default ModalFormEmail;
