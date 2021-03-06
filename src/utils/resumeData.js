import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import Language from '@material-ui/icons/Language'
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined'
import WebOutlinedIcon from '@material-ui/icons/WebOutlined'

export default {
  name: 'Aritra Chatterjee',
  title: 'Full Stack Developer',
  age: '25',
  email: 'aritrivu@gmail.com',
  job: 'Freelancer',
  address: 'Kolkata, India',
  phone: '9830243909',

  socials: {
    Facebook: {
      link: 'https://www.facebook.com/aritra.chatterjee.14/',
      text: 'MyFacebook',
      icon: <FacebookIcon />,
    },
    Twitter: {
      link: 'https://www.twitter.com/',
      text: 'MyTwitter',
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: 'https://www.linkedin.com/in/aritra-chatterjee-a25a4519a',
      text: 'MyLinkedIn',
      icon: <LinkedInIcon />,
    },
    Github: {
      link: 'https://www.github.com/Aritra1296',
      text: 'MyGitHub',
      icon: <GitHubIcon />,
    },
  },
  about:
    'Offering web development and enhancement since July 2019.Possess strong knowledge in Web Application Development, Deployment and SQL. Experience in various Frameworks (Spring MVC, Hibernate, Servlet, JDBC). Experience in MERN Stack development (Mongo DB, Express, React, Node JS, Redux).Experience in writing SQL queries as per requirements.Experience in writing HTML and CSS.Experience in writing Perl scripts for batch jobsStrong experience of AGILE Methodologies and Scrum processes.Experience in Insurance Company and Insurance Agent related Applications.Keen analyst with excellence in gathering and understanding requirements of clients & other multiple stakeholders (at strategic and tactical levels), followed by translation into functional specifications as well as provisioning of suitable technical solutions.Pleasing youthful personality with a zest for life, knowledge and sound understanding of technology.',

  experiences: [
    {
      title: 'Programmer Analyst- Cognizant ',
      date: 'July 2019- present',
      description:
        'Application development and enhancement.Writing SQL queries as per requirements and prepare reports.RCA preparation and give resolution. Handling Onsite & Offshore calls regularly giving updates. Attending project triage meetings and representing the team. ',
    },
  ],
  educations: [
    {
      title: 'St Thomas College of Engineering & Technology',
      date: '2015-2019',
      description:
        'West Bengal University Of Technology .Final Exam score :DGPA: 8.13 out of 10 ',
    },
    {
      title: 'Mahesh SriRamkrishna Ashram',
      date: '2013-2015',
      description:
        'Board Name :Council for The Indian School Certificate Examinations .Final Exam score : 88.88% ',
    },
    {
      title: 'Mahesh SriRamkrishna Ashram',
      date: '2011-2013',
      description:
        'Board Name :Council for The Indian School Certificate Examinations .Final Exam score : 92.28%  ',
    },
  ],
  services: [
    {
      title: 'Web Development',
      description:
        'Web Development Web Enhancement Web RCA preparation and give resolution. ',
      icon: <AssignmentOutlinedIcon />,
    },
    {
      title: 'Database',
      description:
        'Writing SQL queries as per requirements and prepare reports.',
      icon: <WebOutlinedIcon />,
    },
    {
      title: 'Business Handlling',
      description:
        'Attending project triage meetings and representing the team',
      icon: <AssignmentOutlinedIcon />,
    },
  ],
  skills: [
    {
      title: 'FRONT END',
      description: [
        'React Js',
        'Redux',
        'Javascript',
        'Node Js',
        'Bootstrap',
        'Material UI',
      ],
    },
    {
      title: 'BACK END',
      description: ['MongoDb', 'Express', 'Spring', 'Hibernate'],
    },
    {
      title: 'DATABASE',
      description: ['MySql', 'Ms SQL Server', 'MongoDB'],
    },
    {
      title: 'SOURCE CONTROL',
      description: ['Git', 'GitHub', 'Scrum/Agile'],
    },
  ],
  projects: [
    {
      tag: 'MERN STACK',
      image:
        'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
      title: 'MERN stack Project 1',
      caption: 'This is a Shopping App',
      description:
        'In this application you can add a product in your cart and place the order. Admin profile can only  show the orders placed by all users. Admin can also add or remove product from the App.',
      links: [
        {
          link: 'https://github.com/Aritra1296/Shopping-frontend',
          icon: <GitHubIcon />,
        },
        { link: 'http://flybuy.aritrarivu.co.in/', icon: <Language /> },
      ],
    },
    {
      tag: 'MERN STACK',
      image:
        'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
      title: 'MERN stack Project 2',
      caption: 'This is a Chat App',
      description:
        'In this application you can chat with all the users who have already logged in. Pusher library is used.',
      links: [
        {
          link: 'https://github.com/Aritra1296/chat-frontend',
          icon: <GitHubIcon />,
        },
        { link: 'http://chatmates.aritrarivu.co.in/', icon: <Language /> },
      ],
    },
    {
      tag: 'MERN STACK',
      image:
        'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
      title: 'MERN stack Project 3',
      caption: 'This is a Blogging App',
      description:
        'In this application you can see blogs of admin profile. You can like or comment blogs also. Only Admin profile can add blog.',
      links: [
        {
          link: 'https://github.com/Aritra1296/blogging-frontend',
          icon: <GitHubIcon />,
        },
        { link: 'http://blogosphere.aritrarivu.co.in/', icon: <Language /> },
      ],
    },
    {
      tag: 'MERN STACK',
      image:
        'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
      title: 'MERN stack Project 4',
      caption: 'This is a Contact Saver App',
      description:
        'Sometimes you might not want to save contact details in your phone. So that you can store the Contact Details information in this App Build on MERN',
      links: [
        { link: 'https://github.com/Aritra1296', icon: <GitHubIcon /> },
        { link: 'http://web.aritrarivu.co.in/', icon: <Language /> },
      ],
    },
    {
      tag: 'React',
      image:
        'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
      title: 'React Project 1',
      caption: 'This is a Portfolio App',
      description:
        'You can build your own portfolio and consolidate your all Projects',
      links: [
        {
          link: 'https://github.com/Aritra1296/Portfolio-Frontend',
          icon: <GitHubIcon />,
        },
        {
          link: 'https://aritra-portfolio.herokuapp.com/',
          icon: <Language />,
        },
      ],
    },
    {
      tag: 'Java',
      image:
        'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
      title: 'Java Project 1',
      caption: 'This is dummy record',
      description: 'This is dummy record',
      links: [
        { link: 'https://github.com/Aritra1296', icon: <GitHubIcon /> },
        {
          link: 'https://github.com/Aritra1296/Portfolio-Frontend',
          icon: <Language />,
        },
      ],
    },
  ],
}
