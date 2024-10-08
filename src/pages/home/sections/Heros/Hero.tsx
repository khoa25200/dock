import './Hero.less';

type HeroProps = {
  title: string;
  description: string;
  image: string;
};

function Hero({ title, description, image }: HeroProps) {
  return (
    <section className="hero-section ">
      <div className="hero-section--inner">
        <div className="hero-section-title ">
          <p
            className="hero-section-title-left"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p
            className="hero-section-title-right"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className="hero-section-image">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
