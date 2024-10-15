import { ICONS } from '../../../../assets/icons'
import { IMAGES } from '../../../../assets/images'
import './SideBarItem.less'
import './SideBarItem.media.less'
import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom';

type TSidebarSubProps = {
    openSub: boolean,
}

const SideBarItem: React.FC<TSidebarSubProps> = ({openSub}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const goWorksPase = (path: string) => {
        navigate(path);
    };

    const items = [
        { path: '/chat/#', label: 'KTC-FE-SLACK' },
        { path: '/chat/another', label: 'Another Workspace' },
        { path: '/chat/yetanother', label: 'Yet Another Workspace' },
    ];

    return (
        <div className={`side-sub ${openSub ? "open" : ""}`}>
            <ul className='side-sub-workspase'>
                {items.map((item, index) => (
                    <li
                        key={index}
                        // className={`side-sub-workspase-item ${location.pathname === item.path ? 'active' : ''}`}
                        className={`side-sub-workspase-item ${location.pathname === item.path || (location.pathname === '/chat/' && item.path === '/chat/#') ? 'active' : ''}`}
                        onClick={() => goWorksPase(item.path)}
                    >
                        <img src={IMAGES.LOGO} alt="" />
                        <p>{item.label}</p>
                    </li>
                ))}
            </ul>
            <div className='side-sub-add'>
                <div className='side-sub-add-icon'>
                    <img src={ICONS.PLUS} alt="Plus" />
                </div>
                <p className='side-sub-add-text'>Add a workspace</p>
            </div>
        </div>
    )
}

export default SideBarItem;