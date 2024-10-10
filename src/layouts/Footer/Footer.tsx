import React from 'react';
import './Footer.less';
import './Footer.media.less';
import { Layout } from 'antd';
import ButtonFooter from '../../components/buttons/ButtonFooter/ButtonFooter';
import { IMAGES } from '../../assets/images';
import { ICONS } from '../../assets/icons';
const { Footer } = Layout;

const FooterLayout: React.FC = () => {
  return (
    <Layout>
      <Footer className="footer">
        <div className="footer-content">
          <div className="footer-content-info">
            <div className="content-info-lofo">
              <img src={IMAGES.LOGOFOOTER} alt="Logo" />
            </div>
            <div className="content-info-disc">
              <span>
                High level experience in <br /> web design and development knowledge, producing
                quality work.
              </span>
            </div>
          </div>
          <div className="footer-content-teams">
            My Teams
            <ul>
              <li>About Us</li>
              <li>FAQs</li>
              <li>Teams</li>
              <li>Contacts Us</li>
            </ul>
          </div>
          <div className="footer-content-buttons">
            <ButtonFooter className="button-contact" title="Contact-Us" />
            <ButtonFooter className="button-started" title="Get started" />
          </div>
          <div className="footer-content-socials">
            <img src={ICONS.FACEBOOK} alt="FaceBook" />
            <img src={ICONS.LINKEDIN} alt="Linkedin" />
            <img src={ICONS.TWITER} alt="Twitter" />
            <img src={ICONS.FIGMA} alt="Figma" />
          </div>
        </div>
        <div className="footer-copyright">
          <span>© 2024 All Rights Reserved</span>
        </div>
      </Footer>
    </Layout>
  );
};

export default FooterLayout;
