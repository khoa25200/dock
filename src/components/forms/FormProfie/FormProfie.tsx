import "./FormProfie.less";

import React, { useState } from "react";
import { Button, Flex, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import UploadFiles from "../../../libs/api/apiFile";
import useFormErrors from "../../../libs/hooks/useFormErrors";
import { Form, Input } from "antd";
import { ToastMessage } from "../../../libs/types/auth";
import FormInput from "../FormInput/FormInput";
import { useAppSelector } from "../../../libs/hooks/useSelectorApp"
import ButtonAccount from "../../buttons/ButtonAccount/ButtonAccount";
import { AccountUser } from "../../../libs/api/auth";
import CustomAlert from "../../notifis/Alert";

type TFormProfileProps = {
  setIsModalOpen: (isOpen: boolean) => void;
};

const FormProfie: React.FC<TFormProfileProps> = ({ setIsModalOpen }) => {
  const [formCreateWorkspace] = Form.useForm();
  const [isDisabled, setIsDisabled] = useState(true);
  const [imageUrl, setImageUrl] = useState<string>("");
  const { infoUser } = useAppSelector((state) => state.self);
  const { clearErrors, errors, setFieldError } = useFormErrors();
  const [alertMessage, setAlertMessage] = useState<ToastMessage>();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEditMode = () => {
    setIsDisabled(!isDisabled);
  }

  const handleUpdate = async () => {
    clearErrors();
    if (!infoUser) {
      setAlertMessage({ status: 'error', message: "User information is missing." });
      return;
    }
    try {
      const formData = await formCreateWorkspace.validateFields();
      
      const response = await AccountUser.putUser({
        userId: infoUser.data.id,
        ...formData,
        avatarURL: imageUrl,
      });
  
      if (response) {
        setAlertMessage({ status: 'success', message: response.message });
        setIsModalOpen(false);
        setIsDisabled(!isDisabled);
      } else {
        setAlertMessage({ status: 'error', message: "Update failed. Please try again." });
      }
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || "An unexpected error occurred";
      setFieldError("error", errorMessage);
    }
  };

  const handleImageUpload = async (file: any) => {
    clearErrors();
    try {
      const response = await UploadFiles.uploadFiles(file);
      setImageUrl(response.data);
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || "An unexpected error occurred";
      setFieldError("error", errorMessage);
    }
  };

  return (
    <div className="modal-profile">
      {alertMessage && (
        <CustomAlert
        status={alertMessage.status}
        message={alertMessage.message}
        />
        )}
      <div className="modal-profile-content">
        <div className="profile-content-infor">
          <Form className="content-infor-form" form={formCreateWorkspace}>
            <Flex>
            <FormInput
              name="firstName"
              error={errors.error}
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
                { type: "text" },
              ]}
              className="modal-workspace-form-item"
            >
              <Input placeholder={infoUser?.data.firstName} disabled={isDisabled}/>
            </FormInput>
            <FormInput
              name="lastName"
              error={errors.error}
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
                { type: "text" },
              ]}
              className="modal-workspace-form-item"
            >
              <Input placeholder={infoUser?.data.lastName}  disabled={isDisabled}/>
            </FormInput>
            </Flex>
            <FormInput
              name=""
              error=''
              rules={[
                {
                  required: false,
                },
                { type: "" },
              ]}
              className="modal-workspace-form-item"
            >
              <Input placeholder={infoUser?.data.username}  disabled/>
            </FormInput>
            <FormInput
              name=""
              error=''
              rules={[
                {
                  required: false,
                },
                { type: "" },
              ]}
              className="modal-workspace-form-item"
            >
              <Input placeholder={infoUser?.data.email} disabled/>
            </FormInput>
            <FormInput
              name="phoneNumber"
              error={errors.error}
              rules={[
                {
                  required: true,
                  message: "Please input your Phone!",
                },
                { type: "text" },
              ]}
              className="modal-workspace-form-item"
            >
              <Input placeholder={infoUser?.data.phoneNumber} disabled={isDisabled}/>
            </FormInput>
          </Form>
        </div>
        <div className="profile-content-avatar">
          <img src={infoUser?.data.avatarURL} alt="Avatar" />
          <Upload
            maxCount={1}
            accept="image/*"
            listType="picture"
            onChange={handleImageUpload}
            beforeUpload={() => false}
          >
            <Button type="primary" icon={<UploadOutlined />}>
              Upload Image
            </Button>
          </Upload>
        </div>
      </div>
      <div className="modal-profile-footer">
        <ButtonAccount
            className="profile-footer-cancel"
            title="Cancel"
            onclick={handleCancel}
        />
        <ButtonAccount
            className={isDisabled ? "profile-footer-edit" : "profile-footer-save"}
            title={isDisabled ? "Edit Profile" : "Save"}
            onclick={isDisabled ? handleEditMode : handleUpdate}
        />
      </div>
    </div>
  );
};

export default FormProfie;
