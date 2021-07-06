import React, { useState } from 'react'
import './Portfolio.css'
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

const Portfolio = () => {
  const [tabValue, setTabValue] = useState('All')
  const projectDialog = () => {
    <Dialog>
      <DialogTitle></DialogTitle>
      <img src="" alt="" />
      <DialogContent>
        
      </DialogContent>
    </Dialog>
  }

  return (
    <Grid container className='section pb_45 pt_45'>
      {/* Title */}
      <Grid item className='section_title mb_30'>
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
              tabValue == 'All' ? 'customTabs_item_active' : 'customTabs_item'
            }
          />
          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab label={tag} value={tag} />
            )
          )}
        </Tabs>
      </Grid>
      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {resumeData.projects.map((project) => (
            <>
              {tabValue == project.tag || tabValue == 'All' ? (
                <Grid item>
                  <Grow in timeout={1000}>
                    <Card
                      className='CustomCard'
                      onClick={() => {
                        console.log('click')
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          className='CustomCard_image'
                          image={project.image}
                          title={project.title}
                        >
                          <CardContent>
                            <Typography className='CustomCard_title'>
                              {project.title}
                            </Typography>
                            <Typography
                              variant='body2'
                              className='CustomCard_description'
                            >
                              {project.description}
                            </Typography>
                          </CardContent>
                        </CardMedia>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Portfolio
