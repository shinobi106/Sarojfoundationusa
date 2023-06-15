import React, { useState } from 'react'
import "./slider.scss"

import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import Diversity1Icon from '@mui/icons-material/Diversity1';

export const Slider = () => {

    

  return (
    <div className='slider'>
        <div className='donate'>
          <span>Donate</span>
        </div>
        <div className='container'>
            
        <div className='intro'>
          <div className='profile'>
            <img src='/img/profile.jpeg' alt='none'/>
            <div className='name'>
              <span>Mrs. RITU TYAGI</span>
              <p>FOUNDER & PRESIDENT</p>
            </div>
          </div>
          <div className='desc'>
            <div className='heading'>
              <span>Welcome to
                  Saroj Foundation</span>
            </div>
            <div className='msg'>
              <p>Saroj Foundation is a non-profit organization founded in 2006 and registered under ................
              ........... 
              To attain integrated socio-economic development we are primarily focused to work on “Education & Employment for All”. 
              Though we are undoubtedly stepping towards progressive Bharat, yet we have to walk miles to achieve 100%.
               It can be obtained through education, economic and social empowerment of all those who are still left at
                the lower end of the social structure.
                Apart from education we provide skill to woman as per their capability and competence to make 
                them self-reliant or entrepreneurs. We are intended to benefit women under
               our training programme to avail them with employability and entrepreneurship.</p>
            </div>
          </div>
          
        </div>
        <div className='objective'>
            <div className='title'>
              <span>Our objectives</span>
            </div>
            <div className='items'>
            <div className='item'>
            <div className='icon'><VolunteerActivismIcon fontSize='large'/></div>
              <span className='heading'>SOCIAL DEVELOPMENT</span>
              <span className='msg'>To work for the social development of underprivileged individuals.</span>
              
            </div>

            <div className='item'>
            <div className='icon'><HealthAndSafetyIcon fontSize='large'/></div>
              <span className='heading'>HEALTHCARE</span>
              <span className='msg'>To encourage healthcare development and health promotion.</span>
              
            </div>

            <div className='item'>
            <div className='icon'><Diversity1Icon fontSize='large'/></div>
              <span className='heading'>HUMAN RIGHTS</span>
              <span className='msg'>To endorse the human rights and in particular the rights of the children.</span>
              
            </div>
            </div>
          </div>
      </div>
      
       
    </div>
  )
}
