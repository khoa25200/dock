import React from 'react';
import './Introduce.less';
import background from '../../../../assets/images/intro-picture.png';
import Doublequote from '../../../../assets/icons/double_quote.svg';

type IntroduceLayoutProps = {
  title: string;
  description: string;
};

const IntroduceLayout: React.FC<IntroduceLayoutProps> = ({
  title,
  description,
}: IntroduceLayoutProps) => {
  return (
    <section className="introduce">
      <div className="introduce-content">
        <img src={Doublequote} alt="Double quote" />
        <span
          className="introduce-content-cause"
          dangerouslySetInnerHTML={{ __html: title }}></span>
        <span
          className="introduce-content-desc"
          dangerouslySetInnerHTML={{ __html: description }}></span>
      </div>
      <div className="introduce-img">
        <img src={background} alt="Picture" />
      </div>
    </section>
  );
};

export default IntroduceLayout;
