import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <AboutUs/>
        <Services/>
        <ContactUs/>
        <Footer/>
    </>
  )
}
