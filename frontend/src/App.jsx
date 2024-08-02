import React from 'react'
import Hero from './components/Hero/Hero'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './components/About/AboutUs'
import Services from './components/Services/Services'
import CaseStudy from './components/CaseStudy/CaseStudy'

const App = () => {
  return (
    <div className='app'>
      <Hero/>
      <Routes>
        {/* <Route path='/' element={<Home />}/> */}
      </Routes>
      <AboutUs/>
      <Services/>
      <CaseStudy/>
    </div>
  )
}

export default App