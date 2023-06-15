
import "./donar.scss"
import React from 'react'
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import HomeIcon from '@mui/icons-material/Home';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import HandshakeIcon from '@mui/icons-material/Handshake';

export const Donar = () => {
  return (
    <div className='donar'>
        <div className="box">
            <div className="icon"><FamilyRestroomIcon fontSize="large"/></div>
            <div className="title">
                <span>Save The children</span>
            </div>
        </div>

        <div className="box">
            <div className="icon"><HomeIcon fontSize="large"/></div>
            <div className="title">
                <span>Shelter Poor Child</span>
            </div>
        </div>

        <div className="box">
            <div className="icon"><LocalDrinkIcon fontSize="large"/></div>
            <div className="title">
                <span>Pure Water For Poor</span>
            </div>
        </div>

        <div className="box">
            <div className="icon"><BloodtypeIcon fontSize="large"/></div>
            <div className="title">
                <span>Donation orphan child</span>
            </div>
        </div>

        <div className="box">
            <div className="icon"><VolunteerActivismIcon fontSize="large"/></div>
            <div className="title">
                <span>Help The Helpless</span>
            </div>
        </div>

        <div className="box">
            <div className="icon"><HandshakeIcon fontSize="large"/></div>
            <div className="title">
                <span>Donation for poor</span>
            </div>
        </div>
    </div>
  )
}
