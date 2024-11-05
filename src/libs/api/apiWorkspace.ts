import api from './api';
import { TWorkspace } from '../types/workspace';
import { BE_ENDPOINT } from '../../configs/constants/backend.const';
import { IUser } from '../types/auth';

export const WorkspacesUserService = {
  //Create a new Workspaces
  registerWorkspaces: async (data: TWorkspace) => {
    try {
      const response = await api.post(
        `${BE_ENDPOINT.createWorkspace}/${data.id}`,
        data
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  //Get all Workspaces
  getWorkspacesOfSelf: async (data: IUser) => {
    try {
      const response = await api.get(
        `${BE_ENDPOINT.getWorkspaceOfSelf}/${data.userId}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  //Get by id Workspace

  //Update by id Workspace

  //Delete by id Workspace
};
