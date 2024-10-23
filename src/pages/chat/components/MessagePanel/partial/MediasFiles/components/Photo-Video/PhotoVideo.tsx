import { ICONS } from '../../../../../../../../assets/icons';
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
    <div className="photo--video-list">
      {photovideo.map((img) => (
        <div className="photo--video-item">
          <img src={img.link_file} />
        </div>
      ))}
    </div>
  );
};
export default PhotoVideo;
