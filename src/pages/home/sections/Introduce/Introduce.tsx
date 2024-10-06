import React from 'react';
import './Introduce.less';
import './Introduce.media.less';

type IntroduceLayoutProps = {
  title: string;
  description: string;
  img: string;
  alt_picture: string;
};

const IntroduceLayout: React.FC<IntroduceLayoutProps> = ({
  title,
  description,
  img,
  alt_picture,
}: IntroduceLayoutProps) => {
  return (
    <section className="introduce">
      <div className="introduce-content">
        <span
          className="introduce-content-cause"
          dangerouslySetInnerHTML={{ __html: title }}></span>
        <span
          className="introduce-content-desc"
          dangerouslySetInnerHTML={{ __html: description }}></span>
      </div>
      <div className="introduce-img">
        <img src={img} alt={alt_picture} />
      </div>
    </section>
  );
};

export default IntroduceLayout;
