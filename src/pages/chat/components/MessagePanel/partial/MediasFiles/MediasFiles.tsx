import './MediasFiles.less';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Documents from './components/Documents/Documents';
import PhotoVideo from './components/Photo-Video/PhotoVideo';

// This is the array of document data
const documentData = [
  {
    nameFile: 'Screenshot-3817.png',
    type: 'PNG',
    capacity: '200gb',
    picture:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
  },
];
const photovideoData = [
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
  {
    link_file:
      'https://img.freepik.com/premium-photo/boy-with-green-eyes-green-eyes_922700-8.jpg?w=740',
    date_receive: '20/10/2024;',
  },
];
const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Documents',
    children: <Documents documents={documentData} />,
  },
  {
    key: '2',
    label: 'Photos and videos',
    children: <PhotoVideo photovideo={photovideoData} />,
  },
];

const onChange = (key: string) => {
  console.log(key);
};

const MediaFiles = () => {
  return (
    <div className="media-file">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default MediaFiles;
