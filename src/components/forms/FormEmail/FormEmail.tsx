import './FormEmail.less';
import './FormEmail.media.less';
import { Layout, Form } from 'antd';
import { IMAGES } from '../../../assets/images';
import ButtonAccount from '../../buttons/ButtonAccount/ButtonAccount';
import ButtonAccountGoogle from '../../buttons/ButtonAccountGoogle/ButtonAccountGoogle';
import { AccountUser } from '../../../libs/api/auth';
import { useNavigate } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import useFormErrors from '../../../libs/hooks/useFormErrors';

const FormEmail: React.FC = () => {
  const { clearErrors, errors, setFieldError } = useFormErrors();
  const [formEmailUser] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmitAccount = async () => {
    clearErrors();
    try {
      const formData = await formEmailUser.validateFields();
      const response = await AccountUser.registerWithEmail(formData);

      if (response) {
        navigate(`/verify/${formData.email}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error && (error as any).response) {
        const errorResponse = (error as any).response.data;
        const errorMessage = errorResponse.message;
        setFieldError('email', errorMessage);
      } else {
        console.error('An unexpected error occurred:', error); // Xử lý lỗi không mong muốn
      }
    }
  };

  return (
    <Layout className="modal-email">
      <div className="modal-email-logo">
        <img src={IMAGES.LOGO} alt="Logo DocK" />
      </div>
      <h1 className="modal-email-title">First, please enter your email!</h1>
      <p className="modal-email-note">
        We suggest using the email address you use at work.
      </p>
      <Form className="modal-email-input" form={formEmailUser}>
        <FormInput
          name="email"
          label="Enter your email"
          error={errors.email}
          onChange={() => setFieldError('email', null)}
          rules={[
            { required: true, message: 'Please input your email!' },
            { type: 'email', message: 'The input is not valid Email!' }, // Kiểm tra định dạng email
          ]}
        />
      </Form>
      <ButtonAccount
        title="Continue with email"
        className="modal-email-continue"
        onclick={handleSubmitAccount} // Sử dụng onclick để xử lý sự kiện
      />
      <div className="modal-email-or">OR</div>
      <ButtonAccountGoogle
        href="/signup"
        title="Continue with register account"
        className="modal-email-google"
      />
      <div className="modal-email-content">
        <span>Already using DockChat?</span>
        <span>Sign in to an existing workspace</span>
      </div>
    </Layout>
  );
};

export default FormEmail;
