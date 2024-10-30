// WorkspaceItem.tsx
import React from "react";
import "./WorkspaceItem.less";
import ButtonLaunch from "../../../../components/buttons/ButtonLaunch/ButtonLaunch";

type WorkspaceItemProps = {
  name: string;
  member: string;
  avatarURL: string;
  isHidden: boolean;
};

const WorkspaceItem: React.FC<WorkspaceItemProps> = ({ name, member, avatarURL, isHidden }) => {
  return (
    <div className={`render-list-item ${isHidden ? "hidden" : ""}`}>
      <div className="list-item-avatar">
        <img src={avatarURL} alt="Avatar" />
      </div>
      <div className="list-item-details">
        <h4 className="list-item-details-name">{name}</h4>
        <p className="list-item-details-description">{member}</p>
      </div>
      <div className="list-item-action">
        <ButtonLaunch title="Launch workspace" className="list-item-action-btn" />
      </div>
    </div>
  );
};

export default WorkspaceItem;
