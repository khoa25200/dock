import './Files.less'

import { ICONS } from "../../../../../../assets/icons";

export type TFilesProps = {
    icon: string,
    nameFile: string,
    extension: string,
    sizeFile: string,
}

const Files: React.FC<TFilesProps> = ({icon, nameFile, extension, sizeFile}: TFilesProps) => {
    return ( 
        <div className="file">
            <div className="file-icon">
                <img src={icon} alt="ICon" />
            </div>
            <div className="file-content">
                <div className="file-content-header">
                    {nameFile}
                </div>
                <div className="file-content-footer">
                    <div>{extension}</div>
                    <div>{sizeFile}</div>
                </div>
            </div>
            <div className="file-download">
                <img src={ICONS.DOWNLOAD} alt="Download" />
            </div>
        </div>
    );
}

export default Files;