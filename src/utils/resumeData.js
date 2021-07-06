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
  about:
    'Offering web development and enhancement since July 2019.Possess strong knowledge in Web Application Development, Deployment and SQL. Experience in various Frameworks (Spring MVC, Hibernate, Servlet, JDBC). Experience in MERN Stack development (Mongo DB, Express, React, Node JS).Experience in writing SQL queries as per requirements.Experience in writing HTML and CSS.Experience in writing Perl scripts for batch jobsStrong experience of AGILE Methodologies and Scrum processes.Experience in Insurance Company and Insurance Agent related Applications.Knowledge in project management activities including project planning, risk management, finalisation of technical / functional specifications of the product / software application.Keen analyst with excellence in gathering and understanding requirements of clients & other multiple stakeholders (at strategic and tactical levels), followed by translation into functional specifications as well as provisioning of suitable technical solutions.Knowledge of entire Software Development Lifecycle (SDLC), right from requirement analysis, documentation (functional specifications, technical design) to maintenance of proposed applications.Pleasing youthful personality with a zest for life, knowledge and sound understanding of technology.',

  experiences: [
    {
      title: 'Programmer Analyst- Cognizant ',
      date: 'July 2019- present',
      description:
        'Application development and enhancement.Writing SQL queries as per requirements and prepare reports..Preparation of test cases.RCA preparation and give resolution. Reports building and reporting from the testing team. Handling Onsite & Offshore calls regularly giving updates. Attending project triage meetings and representing the team. ',
    },
  ],
  educations: [
    {
      title: 'St Thomas College of Engineering & Technology',
      date: '2015-2019',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
    },
    {
      title: 'Mahesh SriRamkrishna Ashram',
      date: '2013-2015',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
    },
    {
      title: 'Mahesh SriRamkrishna Ashram',
      date: '2011-2013',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
    },
  ],
  services: [
    {
      title: 'Web Development',
      description: 'Web Development Web Development Web Development',
      icon: <AssignmentOutlinedIcon />,
    },
    {
      title: 'Web Development',
      description: 'Web Development Web Development Web Development',
      icon: <WebOutlinedIcon />,
    },
    {
      title: 'Web Development',
      description: 'Web Development Web Development Web Development',
      icon: <AssignmentOutlinedIcon />,
    },
  ],
  skills: [
    {
      title: 'FRONT END',
      description: ['React Js', 'Javascript', 'Bootstrap', 'Material UI'],
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
      tag: 'React',
      image:
        'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
      title: 'React Project 1',
      caption: 'This is short description',
      description: 'This is my first Project',
      links: [
        { link: 'https://github.com/Aritra1296', icon: <GitHubIcon /> },
        { link: 'http://web.aritrarivu.co.in/', icon: <Language /> },
      ],
    },
    {
      tag: 'Java',
      image:
        'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
      title: 'Java Project 1',
      caption: 'This is short description',
      description: 'This is my first Project',
      links: [
        { link: 'https://github.com/Aritra1296', icon: <GitHubIcon /> },
        { link: 'http://web.aritrarivu.co.in/', icon: <Language /> },
      ],
    },
  ],
}
