import "./FormProfie.less";

import React, { useState } from "react";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import UploadFiles from "../../../libs/api/apiFile";
import useFormErrors from "../../../libs/hooks/useFormErrors";
import { Form, Input } from "antd";
import FormInput from "../FormInput/FormInput";
import { useAppSelector } from "../../../libs/hooks/useSelectorApp"
import ButtonAccount from "../../buttons/ButtonAccount/ButtonAccount";

type TFormProfileProps = {
  setIsModalOpen: (isOpen: boolean) => void;
};

const FormProfie: React.FC<TFormProfileProps> = ({ setIsModalOpen }) => {
  const [formCreateWorkspace] = Form.useForm();
  const [isDisabled, setIsDisabled] = useState(true);
  const [imageUrl, setImageUrl] = useState<string>("");
  const { infoUser } = useAppSelector((state) => state.self);
  const { clearErrors, errors, setFieldError } = useFormErrors();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEditMode = () => {
    setIsDisabled(!isDisabled);
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
      <div className="modal-profile-content">
        <div className="profile-content-infor">
          <Form className="content-infor-form" form={formCreateWorkspace}>
            <FormInput
              name="name"
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
              <Input placeholder={infoUser?.data.lastName}  disabled={isDisabled}/>
            </FormInput>
            <FormInput
              name="username"
              error={errors.error}
              rules={[
                {
                  required: true,
                },
                { type: "text" },
              ]}
              className="modal-workspace-form-item"
            >
              <Input placeholder={infoUser?.data.username}  disabled/>
            </FormInput>
            <FormInput
              name="email"
              error={errors.error}
              rules={[
                {
                  required: true,
                },
                { type: "text" },
              ]}
              className="modal-workspace-form-item"
            >
              <Input placeholder={infoUser?.data.email} disabled/>
            </FormInput>
            <FormInput
              name="phone"
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
            onclick={handleEditMode}
        />
      </div>
    </div>
  );
};

export default FormProfie;
