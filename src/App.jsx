import { useState } from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import NavBar from './assets/Components/NavBar'
import Footer from './assets/Components/Footer'
import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Cart from './Pages/Cart'
import ProductDetail from './Pages/ProductDetail'
import Hero1 from './assets/Components/Hero1'
import Footer1 from './assets/Components/Footer1'
function App() {

  return (
    <>
     <NavBar/>
     <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/> 
     </Routes>
    
      <Footer/>
      <Footer1/>
      <ToastContainer />
    </>
  )
}

export default App
