import ModalCustom from "../../modal";
import FormWorkspace from "../../../forms/FormWorkspace/FormWorkspace";

type TModelProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  onWorkspaceCreate: () => void;
};

const ModalWorkspace: React.FC<TModelProps> = ({ isModalOpen, setIsModalOpen, onWorkspaceCreate }) => {
  return (
      <ModalCustom isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} closable={true}>
          <FormWorkspace setIsModalOpen={setIsModalOpen} onWorkspaceCreate={onWorkspaceCreate}/>
      </ModalCustom>
  )
}

export default ModalWorkspace;
