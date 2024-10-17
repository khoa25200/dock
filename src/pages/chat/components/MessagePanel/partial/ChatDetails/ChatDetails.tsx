import './ChatDetails.less';
import { ICONS } from '../../../../../../assets/icons';
import { Avatar, List } from 'antd';
import React, { useState } from 'react';
interface TeamMember {
  name: string;
  role: string;
  picture: string;
}
interface ListMember {
  members: TeamMember[];
}
const ChatDetail: React.FC<ListMember> = ({ members }) => {
  return (
    <div className="chatDetails--wrapper">
      <header className="chatDetails--header">
        <h1>Chat Details</h1>
        <div className="chatDetails--icon-more">
          <img src={ICONS.ELLIPSIS} />
        </div>
      </header>
      <main className="team--member">
        <div className="team--member-heading">
          <div className="teamMember--heading-inner">
            <h1>Team Members</h1>
            <p className="team--member-count">
              <span>6</span>
            </p>
          </div>
        </div>
        <div
          id="scrollableDiv"
          style={{
            maxHeight: 250,
            height: '100%',
            overflow: 'auto',
            borderBottom: '2px solid #ebebeb',
          }}
        >
          <List
            dataSource={members}
            renderItem={(item) => (
              <List.Item key={item.role}>
                <List.Item.Meta
                  avatar={<Avatar src={item.picture} />}
                  title={item.name}
                  description={item.role}
                />
              </List.Item>
            )}
          />
        </div>
      </main>
    </div>
  );
};
export default ChatDetail;
