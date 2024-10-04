import { IMAGES } from '../../assets/images/index';
import { ICONS } from '../../assets/icons/index';

const heroProps = {
  title: 'Get the best <br/> <b> experience </b>when sending messages.',
  description:
    'Platform used to send message with a myriad of features. by prioritizing the user <br/> experience.',
  image: IMAGES.WORKSPACE,
};

const featuresProps = {
  title: 'Reasons why you should choose a <b>DockChat</b>',
  description: 'Advanced Features, Effortless Connections – That’s DockChat',
};

const showCaseProps = {
  title: 'Send messages in <b>Real Time,</b> without any delay between us',
  description:
    'Send messages easily and also without and delay between us. Make the convenience of sending messages better and more fun.',
};

const aboutUsProps = {
  title: 'Make work life simpler, more enjoyable, and more productive.',
  description:
    'Make work life simpler, more enjoyable, and more productive. DockChat is an AI-powered platform for work that brings all your chats, apps, and customers together in one place DockChat was created by us in 2024',
  img: IMAGES.ABOUT_US,
  imgDescription: 'Development Teams',
};

const introduceProps = {
  title:
    'With DockChat, the design team can now build design which identifies employees’ career aspirations and goals and from which we approach managers and check to see what is happening.',
  description:
    '“People now recognise that having a good performance conversation means that something happens as a result.”',
  img: IMAGES.BACKGRUND_CONTENT,
  imgDescription: 'Picture',
  iconQuote: ICONS.DOUBLE_QUOTE,
};

export const PROPS = {
  HERO: {
    ...heroProps,
  },
  FEATURES: {
    ...featuresProps,
  },
  SHOWCASE: {
    ...showCaseProps,
  },
  ABOUT_US: {
    ...aboutUsProps,
  },
  INTRODUCE: {
    ...introduceProps,
  },
};
