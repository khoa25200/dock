import React from 'react';
import './Introduce.less';
import background from '../../assets/images/intro-picture.png'
import Doublequote from '../../assets/icon/double_quote.svg'

const IntroduceLayout: React.FC = () => {
  return (
    <section className='introduce'>
        <div className='introduce-content'>
            <img src={Doublequote} alt="Double quote" />
            <span className='introduce-content-cause'>
                “People now recognise that having a <br/> 
                good performance conversation <br/>
                means that something happens as a <br/>
                result.”
            </span>
            <span className='introduce-content-desc'>
                “With DockChat, the design team can now build <br/>
                design which identifies employees’ career <br/>
                aspirations and goals and from which we approach <br/>
                managers and check to see what is happening.”
            </span>
        </div>
        <div className='introduce-img'>
            <img src={background} alt="Picture" />
        </div>
    </section>
  )
};

export default IntroduceLayout;