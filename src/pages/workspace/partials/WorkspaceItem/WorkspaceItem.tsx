// WorkspaceItem.tsx
import React from 'react';
import './WorkspaceItem.less';
import ButtonAccount from '../../../../components/buttons/ButtonAccount/ButtonAccount';
import { useNavigate } from 'react-router-dom';

type WorkspaceItemProps = {
  id: string;
  name: string;
  member: string;
  avatarURL: string;
  isHidden: boolean;
};

const WorkspaceItem: React.FC<WorkspaceItemProps> = ({
  name,
  member,
  avatarURL,
  isHidden,
  id,
}) => {
  const navigate = useNavigate();
  const handleClick = async () => {
    navigate(`/chat?id_workspace=${id}`);
  };

  return (
    <div
      className={`render-list-item ${isHidden ? 'hidden' : ''}`}
      onClick={(e) => e.preventDefault()}
    >
      <div className="list-item-avatar">
        <img src={avatarURL} alt="Avatar" />
      </div>
      <div className="list-item-details">
        <h4 className="list-item-details-name">{name}</h4>
        <p className="list-item-details-description">{member}</p>
      </div>
      <div className="list-item-action" onClick={(e) => e.preventDefault()}>
        <ButtonAccount
          onclick={handleClick}
          title="Launch workspace"
          className="list-item-action-btn"
        />
      </div>
    </div>
  );
};

export default WorkspaceItem;
