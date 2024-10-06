import './FeaturesItem.less';
import './FeaturesItem.media.less';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

type FeaturesItemProps = {
  logo: any;
  title: string;
  description: string;
};
function FeaturesItem({ logo, title, description }: FeaturesItemProps) {
  return (
    <Card
      hoverable
      style={{
        width: 240,
      }}
      className="features-item"
      cover={<img alt="example" src={logo} />}>
      <Meta className="features-content" title={title} description={description} />
    </Card>
  );
}

export default FeaturesItem;
