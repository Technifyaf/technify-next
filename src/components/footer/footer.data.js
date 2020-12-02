import { FaFacebook, FaTwitter, FaGithub, FaDribbble, FaSlack } from 'react-icons/fa';

export default [
  {
    header: 'About Us',
    items: [
      {
        path: '/',
        label: 'Vision',
      },
      {
        path: '/',
        label: 'Mission',
      },
      {
        path: '/',
        label: 'Team',
      },
    ],
  },
  {
    header: 'Updates',
    items: [
      {
        path: '/',
        label: 'Events',
      },
      {
        path: '/',
        label: 'Careers',
      },
      {
        path: '/',
        label: 'Blog',
      },
    ],
  },
  {
    header: 'Offices',
    items: [
      {
        path: '/',
        label: 'Maseru',
      },
      {
        path: '/',
        label: 'Pretoria',
      },
      {
        path: '/',
        label: 'Joburg',
      },
      {
        path: '/',
        label: 'Capetown',
      },
    ],
  },
  {
    header: 'Contact',
    items: [
      {
        path: '/',
        label: 'Facebook',
        name: 'facebook',
        icon: <FaFacebook />,
      },
      {
        path: '/',
        label: 'Twitter',
        name: 'twitter',
        icon: <FaTwitter />,
      },
      {
        path: 'https://github.com/Technifyaf',
        label: 'Github',
        name: 'github',
        icon: <FaGithub />,
      },
      
      {
        path: '/',
        label: 'Slack',
        name: 'slack',
        icon: <FaSlack />,
      },
    ],
  },
];
