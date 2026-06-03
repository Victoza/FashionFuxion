import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-gray-600 py-16 px-8'>
      <div className="footer ">
        <div className="footer-content flex justify-between">
          <div className="footer-name">
            <h2>FASHION FUXION</h2>
          </div>
          <div className="footer-social flex gap-6">
            <FaFacebook size={32} className='cursor-pointer'/>
            <FaInstagram size={32} className='cursor-pointer'/>
            <FaTwitter size={32} className='cursor-pointer'/>
          </div>
        </div>
        <hr className='mt-4'/>
        <div className="copy flex justify-center">
          <p>Copyright FASHION FUXION 2026. All rights.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer