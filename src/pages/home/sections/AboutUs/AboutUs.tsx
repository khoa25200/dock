import './AboutUs.less';

type AboutUsProps = {
  title: string;
  description: string;
  img: string;
  imgDescription: string;
};

function AboutUs({ title, description, img, imgDescription }: AboutUsProps) {
  return (
    <section className="about-us">
      <h3 className="about-us-title">{title}</h3>
      <p className="about-us-description">{description}</p>
      <div className="about-us-image" style={{ backgroundImage: `url(${img})` }}></div>
      <p className="about-us-content">{imgDescription}</p>
    </section>
  );
}

export default AboutUs;
