import React from 'react'
import './WorkspaceHeader.less'
import { IMAGES } from '../../../../assets/images'
import ButtonCreate from '../../../../components/buttons/ButtonCreate/ButtonCreate'

type TWorkspaceHeader = {
    className: string
}

const WorkspaceHeader: React.FC<TWorkspaceHeader> = ({className}) => {
    return (
        <div className={`header ${className}`}>
            <img src={IMAGES.LOGO} alt="Logo" />
            <ButtonCreate title='Create a new workspace' className='header-btn'/>
        </div>
    )
}

export default WorkspaceHeader