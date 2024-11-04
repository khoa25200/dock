export type TChannels = {
  idChannels?: string | null;
  idWorkSpace?: string | null;
  nameChannels?: string;
  descriptionChannels?: string;
  is_private?: true;
};

export interface ChannelData {
  id: string;
  name: string;
  description: string;
  avatarURL: string;
  isDeleted: boolean;
  workspaceId?: string;
  channels: Array<{
    id: string;
    name: string;
    description: string;
    isPrivate: boolean;
    workspaceId: string;
  }>;
}

export interface ChannelState {
  channelData: ChannelData | null;
  channelCurrent: ChannelData | null;
  loading: boolean;
  error: string | null;
}
