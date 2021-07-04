import React from 'react'
import Typography from '@material-ui/core/Typography'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import displayImage from '../../assets/images/displayImage.jpg'
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'
import './Profile.css'
import resumeData from '../../utils/resumeData'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'

const Profile = () => {
  const CustomTimelineItem = ({ title, text, link }) => (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent className='timeline_content'>
        {link ? (
          <Typography className='timelineItem_text'>
            <span>{title}:</span>{' '}
            <a href={link} target='_blank'>
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className='timelineItem_text'>
            <span>{title}:</span>
            {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  )

  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>{resumeData.name}</Typography>
        <Typography className='title'>{resumeData.title}</Typography>
      </div>
      <figure className='profile_image'>
        <img src={displayImage} alt='' />
      </figure>
      <div className='profile_information'>
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title='Name' text={resumeData.name} />
          <CustomTimelineItem title='Title' text={resumeData.title} />
          <CustomTimelineItem title='Email' text={resumeData.email} />
          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <br />
        <button>My Button</button>
      </div>
    </div>
  )
}

export default Profile
