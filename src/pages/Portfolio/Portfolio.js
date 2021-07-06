import React, { useState } from 'react'
import './Portfolio.css'
import displayImage from '../../assets/images/displayImage.jpg'
import resumeData from '../../utils/resumeData'
import { Container, Grid, Tab } from '@material-ui/core'
import { Tabs, Typography } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grow from '@material-ui/core/Grow'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'

const Portfolio = () => {
  const [tabValue, setTabValue] = useState('All')
  const [projectDialogValue, setProjectDialogValue] = useState(false)


  return (
    <Grid container className='section pb_45 pt_45'>
      {/* Title */}
      <Grid item className='section_title mb_20'>
        <span></span>
        <h6 className='section_title_text'>Portfolio</h6>
      </Grid>

      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor='white'
          className='customTabs'
          onChange={(event, newValue) => setTabValue(newValue)}
        >
          <Tab
            label='All'
            value='All'
            className={
              tabValue == 'All' ? 'customTabs_item active' : 'customTabs_item'
            }
          />
          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue == tag ? 'customTabs_item active' : 'customTabs_item'
                }
              />
            )
          )}
        </Tabs>
      </Grid>
      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {resumeData.projects.map((project) => (
            <>
              {tabValue == project.tag || tabValue == 'All' ? (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Grow in timeout={1000}>
                    <Card
                      className='CustomCard'
                      onClick={() => {
                        setProjectDialogValue(project)
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          className='CustomCard_image'
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography className='CustomCard_title'>
                            {project.title}
                          </Typography>
                          <Typography
                            variant='body2'
                            className='CustomCard_caption'
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      {/* Dialog */}
      <Dialog
        open={projectDialogValue}
        onClose={() => {
          setProjectDialogValue(false)
        }}
        className='projectDialog'
        maxWidth={"lg"}
        fullwidth
      >
        <DialogTitle
          onClose={() => {
            setProjectDialogValue(false)
          }}
        >
          {projectDialogValue.title}
        </DialogTitle>
        <img
          src={projectDialogValue.image}
          alt=''
          className='projectDialog_image'
        />
        <DialogContent>
          <Typography className='projectDialog_description'>
            {projectDialogValue.description}
          </Typography>
        </DialogContent>
        <DialogActions className='projectDialog_actions'>
          {projectDialogValue?.links?.map((link) => (
            <a href={link.link} target='_blank' className='projectDialog_icon'>
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
      {/* End of Dialog */}
    </Grid>
  )
}

export default Portfolio
