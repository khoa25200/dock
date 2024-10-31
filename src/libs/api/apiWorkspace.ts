import api from './api';
import { TWorkspace } from '../types/workspace';
import { BE_ENDPOINT } from '../../configs/constants/backend.const';

export const WorkspacesUserService = {
    //Create a new Workspaces
    registerWorkspaces: async (data: TWorkspace) => {
      try {
        const response = await api.post(BE_ENDPOINT.createWorkspace, data);
        return response.data;
      } catch (error) {
        throw error;
      }
    },

    //Get all Workspaces
    getAllWorkspaces: async () => {
      try {
        const response = await api.get(BE_ENDPOINT.getWorkspace);
        return response.data;
      } catch (error) {
        throw error;
      }
    },

    //Get by id Workspace

    //Update by id Workspace

    //Delete by id Workspace
}
