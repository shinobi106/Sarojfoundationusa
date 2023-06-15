import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import "./navbar.scss"
import { Cart } from '../Cart/Cart';

export const Navbar = () => {

  const [ open, setOpen ] = useState(false);

  return (
  <>
    <div className='info'>
    <div className='item'>
          <Link className='link' to="/products/1"> Donation Hotline : +91-8826556784</Link>
        </div>
        <div className='item'>
          <Link className='link' to="/products/2"> sarojfoundation2020@gmail.com</Link>
        </div>
    </div>
    <div className='navbar'>
    
     <div className='wrapper'>
      
       <div className='center'>
        <Link className='link' to="/">
          <img className='logo' src='/img/logo.png' alt='logo'/>
        </Link>
       </div>
       <div className='right'>

       <div className='item'>
        <Link className='link' to="/">Homepage</Link>
       </div>
       <div className='item'>
        <Link className='link' to="/about">About</Link>
       </div>
       <div className='item'>
        <Link className='link' to="/">Contact</Link>
       </div>
       
    
       </div>
      </div>
      <div className='about'>
    <div className='item'>
          <Link className='link' to="/about">About</Link>
        </div>
        <div className='item'>
          <Link className='link' to="/">Homepage</Link>
        </div>
        <div className='item'>
          <Link className='link' to="/">Contact</Link>
        </div>
    </div>
      {open && <Cart />}
    </div></>
  )
}
