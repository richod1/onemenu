import React from 'react'
import Hero from './Pages/Hero'
import Sections from './Pages/Sections'
import Products from './Pages/Products'
import Footer from './Pages/Footer'
import NavBar from './Pages/NavBar'

function Homepage() {
  return (
    <div>
      
      <Hero/>
      <Sections/>
      <Products/>
      <Footer/>
      <NavBar/>
      
    </div>
  )
}

export default Homepage