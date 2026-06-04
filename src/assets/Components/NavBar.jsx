import React, { useContext, useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { FaOpencart } from "react-icons/fa6";
import { ShopContext } from './ShopContext';
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";;


const NavBar = () => {
  const {quantity} = useContext(ShopContext)


  return (
    // <div>
    //   <div className={`flex justify-between items-center p-4 sticky top-0 z-50 transition-colors duration-300 bg-gray-300`}>
    //     <div>
    //       <ul className='flex justify-between gap-4'>
    //         <li>HOME</li>
    //         <li>CLOTHES </li>
    //       </ul>
    //     </div>
    //     <div>
    //       <Link to='/'>
    //       <h2 className='text-3xl font-bold text-gray-800'>FASHION FUXION</h2>
    //       </Link>
    //     </div>
    //     <div>
    //     <Link to='/cart'>
    //     <div className='flex gap-2 bg-gray-500 rounded-4xl p-4'>
    //       <FaOpencart size={32}/><p>{quantity}</p>
    //     </div>
    //     </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="flex justify-between items-center px-4 bg-black text-white h-20">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold">Fashion Fuxion</h2>
        <ul className="flex ml-10">
          <li className="ml-4">Collections</li>
          <li className="ml-4">New Arrivals</li>
          <li className="ml-4">Sales</li>
          <li className="ml-4">About</li>
        </ul>
      </div>
      <div className="flex items-center cursor-pointer">
        <div className="bg-transparent size-12 flex justify-center border-white border pl-3 mr-4 items-center rounded-full">
          <CiSearch size={24} className="mr-4"/>
        </div>
        <Link to='/cart'>
          <div className="bg-transparent size-12 flex justify-center border-white border mr-4 items-center rounded-full">
            <FaOpencart size={24} className="mr-4"/>
            <p className=''>{quantity}</p>
          </div>
        </Link>
        <div className="bg-transparent size-12 flex justify-center border-white border pl-3 mr-4 items-center rounded-full">
          <CiUser size={24} className="mr-4"/>
        </div>
        
      </div>
    </div>
  )
}

export default NavBar