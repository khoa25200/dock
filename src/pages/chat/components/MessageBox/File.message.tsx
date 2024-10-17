import './File.message.less';
import { ICONS } from '../../../../assets/icons';

function FileMessage({
  fileName,
  extension,
  size,
}: {
  fileName: string;
  extension: string;
  size: string;
}) {
  return (
    <div className="file-message">
      <div className="file-detail">
        <h4>{fileName}</h4>
        <p>
          <span>{extension}</span>
          <span>{size}</span>
        </p>
      </div>
      <img src={ICONS.DOWNLOAD} alt="download" />
    </div>
  );
}

export default FileMessage;
