import React from 'react';
import './Footer.less';
import { Layout } from 'antd';
import Logo from '../../assets/images/footer-logo.png'
import facebook from '../../assets/icon/facebook.svg'
import figma from '../../assets/icon/figma.svg'
import linkedin from '../../assets/icon/linkedin.svg'
import twitter from '../../assets/icon/twitter.svg'
import ButtonFooter from '../../components/buttons/ButtonFooter/ButtonFooter';
const { Footer } = Layout;

const FooterLayout: React.FC = () => {
  return (
    <Layout>
        <Footer className='footer'>
            <div className='footer-content'>
              <div className='footer-content-info'>
                <div className='content-info-lofo'>
                  <img src={Logo} alt="Logo" />
                </div>
                <div className='content-info-disc'>
                  <span >High level experience in <br/> web design and development knowledge, producing quality work.</span>
                </div>
              </div>
              <div className='footer-content-teams'>
                  My Teams
                <ul>
                  <li>About Us</li>
                  <li>FAQs</li>
                  <li>Teams</li>
                  <li>Contacts Us</li>
                </ul>
              </div>
              <div className='footer-content-buttons'>
                <ButtonFooter className='button-contact' title='Contact-Us' />
                <ButtonFooter className='button-started' title='Get started' />
              </div>
              <div className='footer-content-socials'>
                <img src={facebook} alt="FaceBook" />
                <img src={linkedin} alt="Linkedin" />
                <img src={twitter} alt="Twitter" />
                <img src={figma} alt="Figma" />
              </div>
            </div>
            <div className='footer-copyright'>
              <span>© 2024 All Rights Reserved</span>
            </div>
        </Footer>
    </Layout>
  )
};

export default FooterLayout;