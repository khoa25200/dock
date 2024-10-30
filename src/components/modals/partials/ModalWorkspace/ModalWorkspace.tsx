import ModalCustom from "../../modal";
import FormWorkspace from "../../../forms/FormWorkspace/FormWorkspace";

type TModelProps = {
  isModalOpen: boolean;
  setIsModalOpen: any;
};

const ModalWorkspace: React.FC<TModelProps> = ({isModalOpen, setIsModalOpen}) => {
  return (
      <ModalCustom isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <FormWorkspace setIsModalOpen={setIsModalOpen}/>
      </ModalCustom>
  )
}

export default ModalWorkspace;
