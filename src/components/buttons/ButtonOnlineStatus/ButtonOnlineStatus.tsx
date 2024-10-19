import React from 'react';
import { Badge, Space } from 'antd';

type TButtonBadge = {
    active: string
}

const ButtonOnlineStatus: React.FC<TButtonBadge> = ({active}) => {
    const badgeStatus = active === 'online' ? 'success' : 'default';
    return (
        <>
            <Space>
                <Badge status={badgeStatus} />
            </Space>
            {/* class to change height and width */}
            {/* .ant-badge-status-{status} */}
        </>
    )
}

export default ButtonOnlineStatus;