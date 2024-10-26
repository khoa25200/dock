import './Workspace.less'

// import React from 'react'
import { Layout } from 'antd';
import WorkspaceHeader from './partials/WorkspaceHeader/WorkspaceHeader';
import WorkspaceContent from './partials/WorkspaceContent/WorkspaceContent';

const Workspace = () => {
  return (
    <Layout className='workspace'>
      <WorkspaceHeader className='workspace-header' />
      <WorkspaceContent className='workspace-content' />
    </Layout>
  )
}

export default Workspace