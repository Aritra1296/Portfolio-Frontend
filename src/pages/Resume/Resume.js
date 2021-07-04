import React from 'react'
import './Resume.css'
import Typography from '@material-ui/core/Typography'
import resumeData from '../../utils/resumeData'
import { Container, Grid } from '@material-ui/core'
import './Resume.css'

const Resume = () => {
  return (
    <>
      {/* About Me */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1' className='aboutme_text'>
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Education and experience */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>Education and experience</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1' className='aboutme_text'>
            {/* {resumeData.about} */}
          </Typography>
        </Grid>
      </Grid>

      {/* Services */}
      <Grid container className=''></Grid>

      {/* Skills */}
      <Grid container className=''></Grid>

      {/* Contacts */}
      <Grid container className=''></Grid>
    </>
  )
}

export default Resume
