import "./FormWorkspace.less";

import React from "react";
import useFormErrors from "../../../libs/hooks/useFormErrors";
import { Form, Layout, Input } from "antd";
import FormInput from "../FormInput/FormInput";
// import { ToastMessage } from "../../../libs/types/auth";
import CreateButton from "../../buttons/ButtonAccount/ButtonAccount";
// import CustomAlert from "../../notifis/Alert";
import { WorkspacesUserService } from "../../../libs/api/apiWorkspace";
import { IMAGES } from "../../../assets/images";

type TModelProps = {
  setIsModalOpen: any;
};

const FormWorkspace: React.FC<TModelProps> = ({setIsModalOpen}) => {
  const [formCreateWorkspace] = Form.useForm();
  const { clearErrors, errors, setFieldError } = useFormErrors();
//   const [alertMessage, setAlertMessage] = useState<ToastMessage>();

  const handleSubmitWorkspace = async () => {
    clearErrors();
    try {
      const formData = await formCreateWorkspace.validateFields();
      const response = await WorkspacesUserService.registerWorkspaces(formData);
      if (response) {
        // setAlertMessage({ status: response.status, message: response.message });
        setIsModalOpen(false)
      }
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || "An unexpected error occurred";
      setFieldError("error", errorMessage);
    }
  };
  return (
    <Layout className="modal-workspace">
      {/* {alertMessage && (
        <CustomAlert
        status={alertMessage.status}
        message={alertMessage.message}
        />
        )} */}
      <div className="modal-workspace-img">
        <img src={IMAGES.LOGO} alt="Avatar" />
      </div>
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
