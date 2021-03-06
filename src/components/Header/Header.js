import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, NavLink, useRouter, withRouter } from 'react-router-dom'
import { HomeRounded, Telegram } from '@material-ui/icons'
import resumeData from '../../utils/resumeData'
import { Facebook, LinkedIn, Twitter, GitHub } from '@material-ui/icons'
import CustomButton from '../Button/Button'
import './Header.css'

const Header = (props) => {
  const pathName = props?.locatin?.pathName

  return (
    <>
      <Navbar expand='lg' sticky='top' className='header'>
        {/* Home Link */}
        <Nav.Link as={NavLink} to='/' className='header_navlink'>
          <Navbar.Brand className='header_home'>
            <HomeRounded />
          </Navbar.Brand>
        </Nav.Link>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className='header_left'>
            {/* Resume Link */}
            <Nav.Link
              as={NavLink}
              to='/'
              className={pathName == '/' ? 'header_link_active' : 'header_link'}
            >
              Resume
            </Nav.Link>
            {/* Portfolio Link */}
            <Nav.Link
              as={NavLink}
              to='/portfolio'
              className={
                pathName == '/portfolio' ? 'header_link_active' : 'header_link'
              }
            >
              Portfolio
            </Nav.Link>
          </Nav>
          <div className='header_right'>
            {Object.keys(resumeData.socials).map((key) => (
              <a href={resumeData.socials[key].link} target='_blank'>
                {resumeData.socials[key].icon}
              </a>
            ))}
            <a
              href={resumeData.socials.LinkedIn.link}
              target='_blank'
              className='header_right_hireMe'
            >
              <CustomButton text='Hire Me' icon={<Telegram />}></CustomButton>
            </a>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default withRouter(Header)
