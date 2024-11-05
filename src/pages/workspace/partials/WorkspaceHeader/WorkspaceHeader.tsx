import './WorkspaceHeader.less'

import React from 'react'
import { IMAGES } from '../../../../assets/images'
import ButtonCreate from '../../../../components/buttons/ButtonCreate/ButtonCreate'
import ModalWorkspace from '../../../../components/modals/partials/ModalWorkspace/ModalWorkspace'

type TWorkspaceHeader = {
    className: string;
    isModalOpen: boolean;
    setIsModalOpen: any;
    showModal: () => void;
}

const WorkspaceHeader: React.FC<TWorkspaceHeader> = ({className, isModalOpen, setIsModalOpen, showModal}) => {
   

    return (
        <div className={`header ${className}`}>
            <img src={IMAGES.LOGO} alt="Logo" />
            <ButtonCreate title='Create a new workspace' className='header-btn' showModal={showModal}/>
            <ModalWorkspace 
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </div>
    )
}

export default WorkspaceHeader