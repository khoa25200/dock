import './MediasFiles.less';
import { Avatar, Divider, List, Skeleton } from 'antd';
import { useState } from 'react';
import { ICONS } from '../../../../../../assets/icons';
interface DataType {
  nameFile: string;
  capacity: string;
  type: string;
  picture: string;
}
const MediaFiles = () => {
  const TeamMember = [
    {
      nameFile: 'Screenshot-3817.png',
      type: 'PNG',
      capacity: '200gb',
      picture:
        'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    },
  ];
  const [data, setData] = useState<DataType[]>(TeamMember);
  return (
    <div className="files--container">
      <div className="files--container-heading">
        <div className="file--list">
          <h1>Documents</h1>
          <div className="files--count">
            <span>6</span>
          </div>
        </div>
        <div className="media--list">
          <h1>Photo and video</h1>
          <div className="medias--count">
            <span>6</span>
          </div>
        </div>
      </div>
      <div
        id="scrollableDiv"
        style={{
          maxHeight: 250,
          height: '100%',
          overflow: 'auto',
        }}
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.type}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture} />}
                title={item.nameFile}
                description={
                  <div>
                    {item.type} - {item.capacity}
                  </div>
                }
              />
              <div className="media--icon-download">
                <img src={ICONS.DOWNLOAD} />
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
export default MediaFiles;
