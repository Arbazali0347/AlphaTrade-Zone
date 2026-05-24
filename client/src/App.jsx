import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AcademyPage from './pages/AcademyPage'
import ServicesPage from './pages/Menu'
import ContactPage from './pages/Contact'
import MentorPage from './pages/MentorPage'
import FestivalsPage from './pages/FestivalsPage'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/academy' element={<AcademyPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/mentor' element={<MentorPage/>}/>
        <Route path='/festivals' element={<FestivalsPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App