import './Documents.less';
import { ICONS } from '../../../../../../../../assets/icons';
import { Avatar, List } from 'antd';
interface DocumentType {
  nameFile: string;
  capacity: string;
  type: string;
  picture: string;
}

interface DocumentsProps {
  documents: DocumentType[];
}
const Documents: React.FC<DocumentsProps> = ({ documents }) => {
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
          dataSource={documents}
          renderItem={(item) => (
            <List.Item key={item.nameFile}>
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
                <img src={ICONS.DOWNLOAD} alt="Download Icon" />
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
export default Documents;
