import "./WorkspaceContent.less";

import React, { useState } from "react";
import ButtonCreate from "../../../../components/buttons/ButtonCreate/ButtonCreate";
import ButtonMore from "../../../../components/buttons/ButtonMore/ButtonMore";
import { ICONS } from "../../../../assets/icons";
import WorkspaceItem from "../WorkspaceItem/WorkspaceItem";

type TWorkspaceContent = {
  className: string;
};

const WorkspaceContent: React.FC<TWorkspaceContent> = ({ className }) => {
  const workspaces = [
    { id: 1, name: "Workspace Alpha", member: "8 members" },
    { id: 2, name: "Workspace Beta", member: "2 members" },
    { id: 3, name: "Workspace Gamma", member: "5 members" },
    { id: 4, name: "Workspace Delta", member: "7 members" },
    { id: 5, name: "Workspace Epsilon", member: "3 members" },
  ];

  const [isHidden, setIsHidden] = useState(true);

  const handleShowItems = () => {
    setIsHidden(false);
  };

  const handleHiddenItems = () => {
    setIsHidden(true);
  };

  return (
    <div className={`content ${className}`}>
      <h1 className="content-hi">Welcom back</h1>
      <div className="content-render">
        <h3>Workspaces for email@.com</h3>
        <div className="content-render-list">
          {workspaces.map((workspace, index) => (
            <WorkspaceItem
              key={workspace.id}
              name={workspace.name}
              member={workspace.member}
              isHidden={index > 2 && isHidden}
            />
          ))}
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
        <span>Want to use Slack with a different team?</span>
        <ButtonCreate
          title="Create a new workspace"
          className="content-create-btn"
        />
      </div>
    </div>
  );
};

export default WorkspaceContent;
