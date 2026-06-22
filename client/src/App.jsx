import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AcademyPage from './pages/AcademyPage'
import ServicesPage from './pages/Services'
import ContactPage from './pages/Contact'
import MentorPage from './pages/MentorPage'
import FestivalsPage from './pages/FestivalsPage'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppFloating from './components/WhatsAppFloating'
import AutoSignalX from './pages/AutoSignalX'
import CourseCadets from './pages/CourseCadets'
import LiveChannelPage from './pages/LiveChannelPage'

// Importing the newly created Festival Popup component
import FestivalPopup from './components/FestivalPopup'

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar/>
      
      {/* Global Floating Components */}
      <FestivalPopup />
      <WhatsAppFloating />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/academy' element={<AcademyPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/mentor' element={<MentorPage/>}/>
        <Route path='/software/autosignal-x' element={<AutoSignalX/>}/>
        <Route path='/software/course-cadets' element={<CourseCadets/>}/>
        <Route path='/festivals' element={<FestivalsPage/>}/>
        <Route path='/live-channel' element={<LiveChannelPage/>}/>
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App