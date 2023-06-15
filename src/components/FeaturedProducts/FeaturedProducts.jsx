import React from 'react'

import "./FeaturedProducts.scss"
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import RocketIcon from '@mui/icons-material/Rocket';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LanguageIcon from '@mui/icons-material/Language';

export const FeaturedProducts = ({type}) => {


    
  return (
    <div className='FeaturedProducts'>
        <div className='top'>
            <h1>WHAT WE ARE DOING?</h1>
            <p>
            Children are the future of a nation. For an emerging country like India, development of underprivileged children holds the key to the progress of the nation itself, and their education is the cornerstone of this progress. But education for children cannot be achieved without ensuring the welfare of the family – a child can go to school regularly only when the family, 
            particularly the mother is healthy and empowered; the family has decent livelihood opportunities and a steady income.
            </p>
        </div>
        <div className='bottom'>
            <div className='item'>
                <div className='icon'><SentimentVerySatisfiedIcon fontSize='large'/></div>
                <div className='num'>754</div>
                <div className='tag'>HAPPY DONATORS</div>
            </div>

            <div className='item'>
                <div className='icon'><RocketIcon fontSize='large'/></div>
                <div className='num'>675</div>
                <div className='tag'>SUCCESS MISSION</div>
            </div>

            <div className='item'>
                <div className='icon'><PersonAddIcon fontSize='large'/></div>
                <div className='num'>1,248</div>
                <div className='tag'>VOLUNTEER REACHED</div>
            </div>

            <div className='item'>
                <div className='icon'><LanguageIcon fontSize='large'/></div>
                <div className='num'>24</div>
                <div className='tag'>GLOBALIZATION WORK</div>
            </div>
            
        </div>
    </div>
  )
}
