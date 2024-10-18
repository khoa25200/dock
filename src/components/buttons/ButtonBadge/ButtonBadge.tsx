import React from 'react';
import { Badge, Space } from 'antd';
import { PresetStatusColorType } from 'antd/es/_util/colors';

type TButtonBadge = {
    status: PresetStatusColorType
}

const ButtonBadge: React.FC<TButtonBadge> = ({status}:TButtonBadge ) => {
    return (
        <>
            <Space>
                <Badge status={status} />
            </Space>
            {/* button status */}
            {/* <Badge status="success" /> */}
            {/* <Badge status="error" /> */}
            {/* <Badge status="default" /> */}
            {/* <Badge status="processing" /> */}
            {/* <Badge status="warning" /> */}

            {/* class to change height and width */}
            {/* .ant-badge-status-{props} */}
        </>
    )
}

export default ButtonBadge;