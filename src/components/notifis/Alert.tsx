import './Alert.less'

import React, { useEffect } from 'react';
import { notification} from 'antd';

type TAlertProps = {
    status: 'success' | 'info' | 'warning' | 'error',
    message: string;
    description: string;
};

const CustomAlert: React.FC<TAlertProps> = ({ message, description, status }) => {
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