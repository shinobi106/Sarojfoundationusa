import React, { useState } from 'react'
import "./products.scss";
import { List } from "../../components/List/List"
import { useParams } from 'react-router-dom';

export default function Products() {

  const catId = parseInt(useParams().id)
  const [ maxPrice, setMaxPrice ] = useState(1000)
  const [ sort, setSort ] = useState(null)

  return (
    <div className='products'>
          <div className='team'>
          <div className='heading'>
            <h1>Our Team</h1>
          </div>
          <div className='card'>
          <div className='profile'>
            <img src='/img/profile.jpeg' alt='none'/>
            <div className='name'>
              <span>Mrs. RITU TYAGI</span>
              <p>FOUNDER & PRESIDENT</p>
            </div>
          </div>

          {/* <div className='profile'>
            <img src='/img/ruby.jpeg' alt='none'/>
            <div className='name'>
              <span>Mrs. RUBY TYAGI</span>
              <p>VICE - PRESIDENT</p>
            </div>
          </div>

          <div className='profile'>
            <img src='/img/preeti.jpeg' alt='none'/>
            <div className='name'>
              <span>Mrs. PREETI TYAGI</span>
              <p>SECRETARY</p>
            </div>
          </div> */}
          </div>
          </div>
    </div>
  )
}
