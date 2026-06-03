import React from 'react'
import './Brands.css'
import { GiBeveledStar } from "react-icons/gi";

const Brands = () => {
  return (
    <div className='brand-container'>
      <div className='strip-top'>
        <ul>
          <li><GiBeveledStar size={32}/>Amazing Fashion</li>
          <li><GiBeveledStar size={32}/>Unique Designs</li>
          <li><GiBeveledStar size={32}/>Amazing Fashion</li>
          <li><GiBeveledStar size={32}/>Unique Designs</li>
          <li><GiBeveledStar size={32}/>Amazing Fashion</li>
        </ul>
      </div>
      <div className='strip-bottom'>
        <ul>
          <li><GiBeveledStar size={32}/>Amazing Fashion</li>
          <li><GiBeveledStar size={32}/>Unique Designs</li>
          <li><GiBeveledStar size={32}/>Amazing Fashion</li>
          <li><GiBeveledStar size={32}/>Unique Designs</li>
          <li><GiBeveledStar size={32}/>Amazing Fashion</li>
        </ul>
      </div>
    </div>
  )
}

export default Brands