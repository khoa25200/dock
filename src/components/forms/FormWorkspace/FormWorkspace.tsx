import "./FormWorkspace.less";

import React, {useState} from "react";
import useFormErrors from "../../../libs/hooks/useFormErrors";
import { Form, Layout, Input } from "antd";
import FormInput from "../FormInput/FormInput";
import { ToastMessage } from "../../../libs/types/auth";
import CreateButton from "../../buttons/ButtonAccount/ButtonAccount";
import CustomAlert from "../../notifis/Alert";
import { WorkspacesUserService } from "../../../libs/api/apiWorkspace";
import { IMAGES } from "../../../assets/images";
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';

type TModelProps = {
  setIsModalOpen: any;
};

const FormWorkspace: React.FC<TModelProps> = ({setIsModalOpen}) => {
  const [formCreateWorkspace] = Form.useForm();
  const { clearErrors, errors, setFieldError } = useFormErrors();
  const [alertMessage, setAlertMessage] = useState<ToastMessage>();
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleSubmitWorkspace = async () => {
    clearErrors();
    try {
      const formData = await formCreateWorkspace.validateFields();
      const response = await WorkspacesUserService.registerWorkspaces({...formData, avatarURL: imageUrl});
      if (response) {
        setAlertMessage({ status: response.status, message: response.message });
        setIsModalOpen(false)
      }
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || "An unexpected error occurred";
      setFieldError("error", errorMessage);
    }
  };

  const handleImageUpload = () => {
    setImageUrl("https://picsum.photos/100/100");
  };

  return (
    <Layout className="modal-workspace">
      {alertMessage && (
        <CustomAlert
        status={alertMessage.status}
        message={alertMessage.message}
        />
        )}
      <div className="modal-workspace-img">
        <img src={IMAGES.LOGO} alt="Avatar" />
      </div>
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        // accept="image/*"
        // showUploadList={false}
        // beforeUpload={() => false}
      >
        <Button type="primary" icon={<UploadOutlined />} onClick={handleImageUpload}>
          Upload Image
        </Button>
      </Upload>
      <Form className="modal-workspace-form" form={formCreateWorkspace}>
        <FormInput
          name="name"
          error={errors.error}
          rules={[
            { required: true, message: "Please input your workspace name!" },
            { type: "text" },
          ]}
          className="modal-workspace-form-item"
        >
          <Input placeholder="Enter your workspace name" />
        </FormInput>
        <FormInput
          name="description"
          error={errors.error}
          rules={[
            {
              required: true,
              message: "Please input your workspace description!",
            },
            { type: "text" },
          ]}
          className="modal-workspace-form-item"
        >
          <Input placeholder="Enter your workspace description" />
        </FormInput>
      </Form>
      <CreateButton
        title="Save"
        className="modal-workspace-btn"
        onclick={handleSubmitWorkspace}
      />
    </Layout>
  );
};

export default FormWorkspace;
