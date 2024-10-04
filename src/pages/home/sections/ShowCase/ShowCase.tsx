import './ShowCase.less';
import { IMAGES } from '../../../../assets/images/index';
type ShowCaseProps = {
  title: string;
  description: string;
};

function ShowCase({ title, description }: ShowCaseProps) {
  return (
    <section className="showcase">
      <img src={IMAGES.SHOWCASE} alt="showcase" className="showcase-image" />
      <div className="showcase-content">
        <h3 className="showcase-title" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="showcase-description">{description}</p>
      </div>
    </section>
  );
}

export default ShowCase;
