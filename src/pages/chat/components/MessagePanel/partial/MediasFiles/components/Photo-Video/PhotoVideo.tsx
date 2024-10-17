import { ICONS } from '../../../../../../../../assets/icons';
import { Avatar, List } from 'antd';
import './PhotoVideo.less';
interface PhotoVideoType {
  link_file: string;
  date_receive: string;
}

interface PhotoVideoProps {
  photovideo: PhotoVideoType[];
}
const PhotoVideo: React.FC<PhotoVideoProps> = ({ photovideo }) => {
  return (
    <div className="files--container">
      <div
        id="scrollableDiv"
        style={{
          maxHeight: 250,
          height: '100%',
          overflow: 'auto',
        }}
      >
        <List
          dataSource={photovideo}
          renderItem={(item) => (
            <List.Item key={item.date_receive}>
              <List.Item.Meta avatar={<Avatar src={item.link_file} />} />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
export default PhotoVideo;
