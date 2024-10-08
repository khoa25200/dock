import "./AboutUs.less";
import "./AboutUs.media.less";
type AboutUsProps = {
  title: string;
  description: string;
  img: string;
  team: string;
};

function AboutUs({ title, description, img, team }: AboutUsProps) {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <h3
          className="about-us-title"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h3>
        <p
          className="about-us-description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      </div>
      <div className="about-us-image">
        <img src={img} alt="Group picture" />
      </div>
      <span className="about-us-team">{team}</span>
    </section>
  );
}

export default AboutUs;
