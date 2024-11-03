export type TChannels = {
  idChannels?: string;
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
  channels: Array<{
    id: string;
    name: string;
    description: string;
    isPrivate: boolean;
    workspaceId: string;
  }>;
}
