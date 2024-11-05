import './WorkspaceContent.less';

import React, { useState, useEffect } from 'react';
import ButtonCreate from '../../../../components/buttons/ButtonCreate/ButtonCreate';
import ButtonMore from '../../../../components/buttons/ButtonMore/ButtonMore';
import { ICONS } from '../../../../assets/icons';
import WorkspaceItem from '../WorkspaceItem/WorkspaceItem';
import { WorkspacesUserService } from '../../../../libs/api/apiWorkspace';
import { TWorkspace } from '../../../../libs/types/workspace';
import ModalWorkspace from '../../../../components/modals/partials/ModalWorkspace/ModalWorkspace';
import { useAppSelector } from '../../../../libs/hooks/useSelectorApp';

type TWorkspaceContentProps = {
  className: string;
  welcome: string;
  createWorkspace: string;
  isModalOpen: boolean;
  setIsModalOpen: any;
  showModal: () => void;
};

const WorkspaceContent: React.FC<TWorkspaceContentProps> = ({
  className,
  welcome,
  createWorkspace,
  isModalOpen,
  setIsModalOpen,
  showModal,
}) => {
  const [isHidden, setIsHidden] = useState(true);
  const [workspaces, setWorkspaces] = useState<TWorkspace[]>([]);
  const { currentUser } = useAppSelector((state) => state.auth);
  const userId = currentUser?.data.userId;
  const fetchWorkspaces = async () => {
    const response = await WorkspacesUserService.getWorkspacesOfSelf({
      userId,
    });
    setWorkspaces(response);
  };

  useEffect(() => {
    fetchWorkspaces();
  }, []);

  const handleWorkspaceCreate = () => {
    fetchWorkspaces();
  };

  const handleShowItems = () => {
    setIsHidden(false);
  };

  const handleHiddenItems = () => {
    setIsHidden(true);
  };

  return (
    <div className={`content ${className}`}>
      <h1 className="content-welcome">{welcome}</h1>
      <div className="content-render">
        <h3>Workspace for your workspace</h3>
        <div className="content-render-list">
          {workspaces && workspaces.length > 0 ? (
            workspaces.map((workspace, index) => (
              <WorkspaceItem
                key={workspace.id}
                id={workspace.id}
                name={workspace.name}
                member={workspace.description}
                avatarURL={workspace.avatarURL}
                isHidden={index > 2 && isHidden}
              />
            ))
          ) : (
            <div className="render-list-null">
              You don't have a workspace yet.
              <a>Join a workspace</a>
              or
              <a onClick={showModal}>Create your workspace</a>
              by clicking here!
            </div>
          )}
        </div>
        <div className="content-render-more">
          <ButtonMore
            title={isHidden ? 'Show more workspace' : 'Show fewer workspaces'}
            className="content-render-more-btn"
            icon={isHidden ? ICONS.ARROW_DOWN_LIGHT : ICONS.ARROW_UP_LIGHT}
            alt={isHidden ? 'Dropdown icon' : 'Roll up icon'}
            onClick={isHidden ? handleShowItems : handleHiddenItems}
          />
        </div>
      </div>
      <div className="content-create">
        <span>{createWorkspace}</span>
        <ButtonCreate
          title="Create a new workspace"
          className="content-create-btn"
          showModal={showModal}
        />
        <ModalWorkspace
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          onWorkspaceCreate={handleWorkspaceCreate}
        />
      </div>
    </div>
  );
};

export default WorkspaceContent;
