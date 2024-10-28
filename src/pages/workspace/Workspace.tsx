import './Workspace.less'

import { useState } from 'react';
import { Layout } from 'antd';
import WorkspaceHeader from './partials/WorkspaceHeader/WorkspaceHeader';
import WorkspaceContent from './partials/WorkspaceContent/WorkspaceContent';
import { PROPS } from '../../configs/constants/workspace.const';

const Workspace = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
      setIsModalOpen(true);
  };

  return (
    <Layout className='workspace'>
      <WorkspaceHeader 
        className='workspace-header' 
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        showModal={showModal}
      />
      <WorkspaceContent 
        className='workspace-content'
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        showModal={showModal}
        {...PROPS.WORKSPACE}
      />
    </Layout>
  )
}

export default Workspace