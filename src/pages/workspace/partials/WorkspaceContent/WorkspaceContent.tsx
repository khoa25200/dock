import "./WorkspaceContent.less";

import React, { useState, useEffect } from "react";
import ButtonCreate from "../../../../components/buttons/ButtonCreate/ButtonCreate";
import ButtonMore from "../../../../components/buttons/ButtonMore/ButtonMore";
import { ICONS } from "../../../../assets/icons";
import WorkspaceItem from "../WorkspaceItem/WorkspaceItem";
import { WorkspacesUserService } from "../../../../libs/api/apiWorkspace";
import { TWorkspace } from "../../../../libs/types/workspace";
import ModalWorkspace from "../../../../components/modals/partials/ModalWorkspace/ModalWorkspace";

type TWorkspaceContentProps = {
  className: string;
  welcome: string;
  workspacefor: string;
  createWorkspace: string;
  isModalOpen: boolean;
  setIsModalOpen: any;
  showModal: () => void;
};

const WorkspaceContent: React.FC<TWorkspaceContentProps> = ({
  className,
  welcome,
  workspacefor,
  createWorkspace,
  isModalOpen,
  setIsModalOpen,
  showModal,
}) => {
  const [isHidden, setIsHidden] = useState(true);
  const [workspaces, setWorkspaces] = useState<TWorkspace[]>([]);

  const fetchWorkspaces = async () => {
    const response = await WorkspacesUserService.getAllWorkspaces();
    setWorkspaces(response.data);
  };

  // useEffect(() => {
  //   fetchWorkspaces();
  // }, []);

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
        <h3>{workspacefor} email@.com</h3>
        <div className="content-render-list">
          {workspaces && workspaces.length > 0 ? (
            workspaces.map((workspace, index) => (
              <WorkspaceItem
                key={workspace.id}
                name={workspace.name}
                member={workspace.description}
                avatarURL={workspace.avatarURL}
                isHidden={index > 2 && isHidden}
              />
            ))
          ) : (
            <div className="render-list-null">
              You don't have a workspace yet. <strong>Join a workspace</strong> or <strong onClick={showModal}>create your own</strong>.
            </div>
          )}
        </div>
        <div className="content-render-more">
          <ButtonMore
            title={isHidden ? "Show more workspace" : "Show fewer workspaces"}
            className="content-render-more-btn"
            icon={isHidden ? ICONS.ARROW_DOWN_LIGHT : ICONS.ARROW_UP_LIGHT}
            alt={isHidden ? "Dropdown icon" : "Roll up icon"}
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
        />
      </div>
    </div>
  );
};

export default WorkspaceContent;
