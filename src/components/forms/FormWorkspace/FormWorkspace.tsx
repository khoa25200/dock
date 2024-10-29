import "./FormWorkspace.less";

import React from "react";
import { useNavigate } from "react-router-dom";
import useFormErrors from "../../../libs/hooks/useFormErrors";
import { Form, Layout, Input } from "antd";
import FormInput from "../FormInput/FormInput";
// import { ToastMessage } from "../../../libs/types/auth";
import CreateButton from "../../buttons/ButtonAccount/ButtonAccount";
// import CustomAlert from "../../notifis/Alert";
import { WorkspacesUserService } from "../../../libs/api/apiWorkspace";

const FormWorkspace: React.FC = () => {
  const navigate = useNavigate();
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
        navigate("/workspace");
      }
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || "An unexpected error occurred";
      setFieldError("error", errorMessage);
    }
  };
  return (
    <Layout className="modal-workspace">
      <div>dsd</div>
      {/* {alertMessage && (
        <CustomAlert
          status={alertMessage.status}
          message={alertMessage.message}
        />
      )} */}
      <Form className="modal-workspace-form" form={formCreateWorkspace}>
        <FormInput
          name="name"
          error={errors.error}
          rules={[
            { required: true, message: "Please input your workspace name!" },
            { type: "text" },
          ]}
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
        >
          <Input placeholder="Enter your workspace description" />
        </FormInput>
      </Form>

      <CreateButton
        title="Submit"
        className="modal-workspace-btn"
        onclick={handleSubmitWorkspace}
      />
    </Layout>
  );
};

export default FormWorkspace;
