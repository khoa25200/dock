import { IMAGES } from '../../assets/images/index';

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
  team: 'Development Teams',
};

const introduceProps = {
  title:
    '“People now recognize that having a good performance conversation leads to tangible outcomes.”',
  description:
    '“With DockChat, the design team can now build a design that identifies employees’ career aspirations and goals, from which we can approach managers and check progress.”',
  img: IMAGES.BACKGRUND_CONTENT,
  alt_picture: 'Picture',
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
