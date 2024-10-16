import "./MediasFiles.less";

import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Files from "./Files";
import { IMAGES } from "../../../../../../assets/images";

const onChange = (key: string) => {
  console.log(key);
};

const props = {
  icon: IMAGES.FILE_ICON,
  nameFile: "i9.pdf",
  extension: "pdf",
  sizeFile: "555kb",
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Documents",
    children: [<Files {...props} />, <Files {...props} />, <Files {...props} />, <Files {...props} /> ],
  },
  {
    key: "2",
    label: "Photos and videos",
    children: "Content of Tab Pane 2",
  },
];

const MediaFiles = () => {
  return (
    <div className="media-file">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default MediaFiles;
