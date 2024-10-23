import './Media.message.less';
function MediaMessage({ mediaURL }: { mediaURL: string }) {
  return (
    <div className="media-message">
      <img src={mediaURL} alt="image" />
    </div>
  );
}

export default MediaMessage;
