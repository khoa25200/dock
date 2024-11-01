import FormProfie from "../../../forms/FormProfie/FormProfie";
import ModalCustom from "../../modal";

type TModelProps = {
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
};

const ModalProfile: React.FC<TModelProps> = ({isModalOpen, setIsModalOpen}) => {
    return (
        <ModalCustom 
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            closable={false}
        >
            <FormProfie setIsModalOpen={setIsModalOpen}/>
        </ModalCustom>
    )
}

export default ModalProfile;