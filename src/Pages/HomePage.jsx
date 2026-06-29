import React from 'react'
import Brands from '../assets/Components/Brands'
import ProductList from '../assets/Components/ProductList'
import Hero1 from '../assets/Components/Hero1'
import Contact from '../assets/Components/Contact'

const HomePage = () => {
  return (
    <div>
      <Hero1/>
      {/* <Brands/> */}
      <ProductList/>
      <Contact/>
    </div>
  )
}

export default HomePage