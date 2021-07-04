import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'


export default {
  name: 'Aritra Chatterjee',
  title: 'Full Stack Developer',

  birthday: '12 Aug ,1997',
  email: 'aritrivu@gmail.com',
  job: 'Freelancer',
  address: 'Chandannagar ,WestBengal, India',
  phone: '9830243909',

  socials: {
    Facebook: {
      link: 'https://www.facebook.com/',
      text: 'MyFacebook',
      icon: <FacebookIcon />,
    },
    Twitter: {
      link: 'https://www.twitter.com/',
      text: 'MyTwitter',
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: 'https://www.linkedin.com/',
      text: 'MyLinkedIn',
      icon: <LinkedInIcon />,
    },
    Github: {
      link: 'https://www.github.com/',
      text: 'MyGitHub',
      icon: <GitHubIcon />,
    },
  },
}
