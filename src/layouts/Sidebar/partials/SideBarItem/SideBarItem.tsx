import { ICONS } from '../../../../assets/icons'
import { IMAGES } from '../../../../assets/images'
import './SideBarItem.less'
import './SideBarItem.media.less'
import React from 'react'

const SideBarItem: React.FC = () => {
    return (
        <div className='side-item'>
            <ul className='side-item-workspase'>
                <li className='side-item-workspase-item active'>
                    <img src={IMAGES.LOGO} alt="" />
                    <p>KTC-FE-SLACK</p>
                </li>
                <li className='side-item-workspase-item'>
                    <img src={IMAGES.LOGO} alt="" />
                    <p>KTC-FE-SLACK</p>
                </li>
                <li className='side-item-workspase-item'>
                    <img src={IMAGES.LOGO} alt="" />
                    <p>KTC-FE-SLACK</p>
                </li>
            </ul>
            <div className='side-item-add'>
                <div className='side-item-add-icon'>
                    <img src={ICONS.PLUS} alt="Plus" />
                </div>
                <p className='side-item-add-text'>Add a workspace</p>
            </div>
        </div>
    )
}

export default SideBarItem;