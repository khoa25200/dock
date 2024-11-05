import './SideBarItem.less';
import './SideBarItem.media.less';

import React, { useState, useEffect } from 'react';
import { ICONS } from '../../../../assets/icons';
import { IMAGES } from '../../../../assets/images';
import { useLocation, useNavigate } from 'react-router-dom';
import { WorkspacesUserService } from '../../../../libs/api/apiWorkspace';
import { useAppSelector } from '../../../../libs/hooks/useSelectorApp';
import { TWorkspace } from '../../../../libs/types/workspace';
import ModalWorkspace from '../../../../components/modals/partials/ModalWorkspace/ModalWorkspace';

const SideBarItem: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [workspaces, setWorkspaces] = useState<TWorkspace[]>([]);
  const { infoUser } = useAppSelector((state) => state.self);
  const userId = infoUser?.data.id;

  const navigate = useNavigate();
  const location = useLocation();

  // Fetch workspaces for the user
  const fetchWorkspaces = async () => {
    try {
      const response = await WorkspacesUserService.getWorkspacesOfSelf({
        userId,
      });
      setWorkspaces(response);
    } catch (error) {
      console.error("Error fetching workspaces:", error);
    }
  };

  const handleClose= () => {
    fetchWorkspaces();
  };

  const handleOpen= () => {
    setIsModalOpen(true);
  };

  // Fetch workspaces when the component mounts
  useEffect(() => {
    fetchWorkspaces();
  }, []);

  const goWorksPase = (path: string) => {
    navigate(path);
  };

  return (
    <div className="side-sub">
      <ul className='side-sub-workspase'>
        {workspaces.length > 0 ? (
          workspaces.map((workspace) => (
            <li
              key={workspace.id}
              className={`side-sub-workspase-item ${
                location.search.includes(`id_workspace=${workspace.id}`) ? 'active' : ''
              }`}
              onClick={() => goWorksPase(`/chat?id_workspace=${workspace.id}`)}
            >
              <img src={workspace.avatarURL || IMAGES.LOGO} alt="Workspace Avatar" />
              <p>{workspace.name}</p>
            </li>
          ))
        ) : (
          <li className="side-sub-workspase-item">No workspaces available</li>
        )}
      </ul>
      <div className='side-sub-add' onClick={handleOpen}>
        <div className='side-sub-add-icon'>
          <img src={ICONS.PLUS} alt="Plus" />
        </div>
        <p className='side-sub-add-text'>Add a workspace</p>
      </div>
      <ModalWorkspace
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onWorkspaceCreate={handleClose}
      />
    </div>
  );
};

export default SideBarItem;
