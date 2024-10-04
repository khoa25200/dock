import './Features.less';
import FeaturesItem from '../../components/FeaturesItem/FeaturesItem';
import { ICONS } from '../../../../assets/icons';

type FeaturesProps = {
  title: string;
  description: string;
};

const Features = ({ title, description }: FeaturesProps) => {
  return (
    <section className="features">
      <h3 className="features-title" dangerouslySetInnerHTML={{ __html: title }} />
      <p className="features-description">{description}</p>
      <div className="features-list">
        <FeaturesItem
          logo={ICONS.HAPPY}
          title="Easy to use"
          description="Connect with customers in real time"
        />
        <FeaturesItem
          logo={ICONS.GUARD}
          title="Real Time"
          description="Connect with customers in real time"
        />
        <FeaturesItem
          logo={ICONS.TIME}
          title="Safety & Private"
          description="Enjoy your comfort and safety when Communicate."
        />
      </div>
    </section>
  );
};

export default Features;
