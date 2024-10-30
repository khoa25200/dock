import api from "./api";
import { BE_ENDPOINT } from "../../configs/constants/backend.const";

export const UploadFiles = {
  uploadFiles: async (file: any) => {
    try {
        const formData = new FormData();
        formData.append('file', file);
    
        const response = await api.postForm(
          BE_ENDPOINT.uploadFiles,
          file,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        return response
    } catch (error) {
      throw error;
    }
  },
};

export default UploadFiles;
