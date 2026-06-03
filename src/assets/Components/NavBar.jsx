import React, { useContext, useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { FaOpencart } from "react-icons/fa6";
import { ShopContext } from './ShopContext';

const NavBar = () => {
  const {quantity} = useContext(ShopContext)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <div className={`flex justify-between items-center p-4 sticky top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-gray-100' : 'bg-transparent'}`}>
        <div>
          <ul className='flex justify-between gap-4'>
            <li>HOME</li>
            <li>CLOTHES </li>
          </ul>
        </div>
        <div>
          <Link to='/'>
          <h2>FASHION FUXION</h2>
          </Link>
        </div>
        <Link to='/cart'>
        <div className='flex gap-2 bg-gray-500 rounded-4xl p-4'>
          <FaOpencart size={32}/><p>{quantity}</p>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default NavBar