import { BE_ENDPOINT } from '../../configs/constants/backend.const';
import { TChannels } from '../types/channels';
import api from './api';
export const ChannelsService = {
  getChannelsOfWorkspace: async (data: TChannels) => {
    const response = await api.get(
      `${BE_ENDPOINT.getChannelsOfWorkspace}/${data.idWorkSpace}/channels`
    );
    return response.data;
  },
  getChannelWithId: async (data: TChannels) => {
    const response = await api.get(
      `${BE_ENDPOINT.getChannelsOfWorkspace}/${data.idWorkSpace}/channels/${data.idChannels}`
    );
    return response.data;
  },
};
