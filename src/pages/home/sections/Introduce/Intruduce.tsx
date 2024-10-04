import React from 'react';
import './Introduce.less';

type IntroduceLayoutProps = {
  title: string;
  description: string;
  img: string;
  imgDesctions: string,
  iconQuote: string;
};

const IntroduceLayout: React.FC<IntroduceLayoutProps> = ({
  title,
  description,
  img,
  imgDesctions,
  iconQuote,
}: IntroduceLayoutProps) => {
  return (
    <section className="introduce">
      <div className="introduce-content">
        <img src={iconQuote} alt="Double quote" />
        <span
          className="introduce-content-cause"
          dangerouslySetInnerHTML={{ __html: title }}></span>
        <span
          className="introduce-content-desc"
          dangerouslySetInnerHTML={{ __html: description }}></span>
      </div>
      <div className="introduce-img">
        <img src={img} alt={imgDesctions} />
      </div>
    </section>
  );
};

export default IntroduceLayout;
