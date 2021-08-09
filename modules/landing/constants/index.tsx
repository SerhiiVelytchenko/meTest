// Type
import { CommentsType, InformationInInformationPageType, PagesType } from '@md-modules/shared/types/landing';

export const Pages: PagesType[] = [
  {
    id: '1p',
    backgroundColorFirst: 'red800',
    backgroundColorSecond: 'red700',
    textTitle: 'Rentloop',
    text: {
      textOne: 'Evolving and expanding an online presence.',
      textTwo: 'Web development-Node.js and React'
    },
    background: 'https://cultum.io/static/images/rentloop/@1x.png'
  },
  {
    id: '2p',
    backgroundColorFirst: 'red650',
    backgroundColorSecond: 'red550',
    textTitle: 'Rentloop',
    text: {
      textOne: 'Evolving and expanding an online presence.',
      textTwo: 'Web development-Node.js and React'
    },
    background: 'https://cultum.io/static/images/skinCarisma/@1x.png'
  },
  {
    id: '3p',
    backgroundColorFirst: 'red700',
    backgroundColorSecond: 'red650',
    textTitle: 'Rentloop',
    text: {
      textOne: 'Evolving and expanding an online presence.',
      textTwo: 'Web development-Node.js and React'
    },
    background: 'https://cultum.io/static/images/creditScript/@1x.png'
  }
];

export const InformationInInformationPage: InformationInInformationPageType[] = [
  {
    id: '1i',
    imgUrl: '/static/images/CultumHome/web-dev@3x.png',
    textTitle: 'Web Development',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing'
  },
  {
    id: '2i',
    imgUrl: '/static/images/CultumHome/mobile@3x.png',
    textTitle: 'Mobile Development',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing'
  },
  {
    id: '3i',
    imgUrl: '/static/images/CultumHome/e-commerce@3x.png',
    textTitle: 'E-commerce',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing'
  },
  {
    id: '4i',
    imgUrl: '/static/images/CultumHome/saas@3x.png',
    textTitle: 'SAAS',
    text: 'Lorem ipsum dolor sit amet consectetur adipiscing'
  }
];

export const Comments: CommentsType[] = [
  {
    id: '1c',
    text:
      'The team has been great for us - giving us great development work in the right time frame and budget. It almost feels like they are part of our own company and team with how collaborative they have been. A no-nonsense approach to development and a focus on delivering the best solutions for any problems we ve encountered.',
    user: {
      id: '1n',
      name: 'Anton',
      imgUrl: 'http://pm1.narvii.com/7314/53a7f4333e3a0be4782a35aa96d1ecf96f7a87a2r1-500-500v2_uhq.jpg'
    }
  },
  {
    id: '2c',
    text:
      'We have used Cultum for almost  1.5 years on front end development. They are skilled, agile and pro-active managing sprints and deadlines well. We hope to be working with them for many years to come as they are now trusted and reliable partners of ours.',
    user: {
      id: '2n',
      name: 'Serhii',
      imgUrl: 'https://www.mnogoblog.ru/wp-content/uploads/2017/09/4.gif'
    }
  },
  {
    id: '3c',
    text:
      'Translated from English - Cascading CSS Grid Layout Tables or CSS Grid makes it easier and more consistent to create responsive web design layouts across different browsers. There were other methods to control web page layout methods such as tables, box model and flexbox',
    user: {
      id: '3n',
      name: 'Alex',
      imgUrl: 'https://i.pinimg.com/originals/f4/99/3e/f4993e2dd8e49fa0d2c125e14d42024f.jpg'
    }
  }
];
