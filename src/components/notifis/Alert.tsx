import React, { useEffect } from 'react';
import { notification } from 'antd';
import { ToastMessage } from '../../libs/types/auth';

const CustomAlert: React.FC<ToastMessage> = ({
  message,
  description,
  status,
}) => {
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    api[status]({
      message: message,
      description: description,
    });
  }, [api, status, message, description]);

  return <>{contextHolder}</>;
};

export default CustomAlert;
