import React from 'react'
import Typography from '@material-ui/core/Typography'
import './Profile.css'
import displayImage from '../../assets/images/displayImage.jpg'
import CustomTimeline from '../Timeline/Timeline'

const Profile = () => {
 return (
   <div className='profile container_shadow'>
     <div className='profile_name'>
       <Typography className='name'>Aritra Chatterjee</Typography>
       <Typography className='title'>Software Developer</Typography>
     </div>
     <figure className='profile_image'>
       <img src={displayImage} alt='' />
     </figure>
     <div className='profile_information'>
       <CustomTimeline/>
       <br/>
       <button>My Button</button>
     </div>
   </div>
 )
}

export default Profile
