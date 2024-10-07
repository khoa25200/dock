import LayoutLandingPage from '../../layouts/LayoutLandingPage/LayoutLandingPage';
import './HomePage.less';
import IntroduceLayout from './sections/Introduce/Introduce';
import Features from './sections/Features/Features';
import HeroSection from './sections/Heros/Hero';
import ShowCase from './sections/ShowCase/ShowCase';
import AboutUs from './sections/AboutUs/AboutUs';
import { PROPS } from '../../configs/constants/homepage.config';

function HomePage() {
  return (
    <LayoutLandingPage>
      <HeroSection {...PROPS.HERO} />
      <div className="content-wrapper">
        <Features {...PROPS.FEATURES} />
        <ShowCase {...PROPS.SHOWCASE} />
        <AboutUs {...PROPS.ABOUT_US} />
        <IntroduceLayout {...PROPS.INTRODUCE} />
      </div>
    </LayoutLandingPage>
  );
}

export default HomePage;
